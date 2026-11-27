#!/usr/bin/env python3
"""Generate a static Malang auction-assets snapshot for berkahkarya.org/property.

Read-only against the screener SQLite DB. Writes public/data/malang-assets.json.
Never fabricates values: missing deposit/NJOP remain null and the UI labels them
as unavailable. Excludes Pemalang (the public API fuzzy-matches it as Malang).
"""
import json
import os
import sqlite3
from datetime import datetime, timezone

DB = os.getenv(
    "SCREENER_DB_PATH",
    "/home/openclaw/projects/my-brain-dump/ideas/lelang-screener/data/screener.db",
)
OUT = os.path.join(os.path.dirname(__file__), "..", "public", "data", "malang-assets.json")

if not os.path.exists(DB):
    print(f"skip: screener DB not found at {DB}; keeping committed snapshot", flush=True)
    raise SystemExit(0)

try:
    con = sqlite3.connect(f"file:{DB}?mode=ro", uri=True)
    con.row_factory = sqlite3.Row
    rows = con.execute(
        """
        SELECT s.lot_id, s.provider, s.title, s.category, s.limit_price,
               s.market_price_est, s.discount_pct, s.deal_tier, s.source_url,
               s.end_time, s.auction_type,
               COALESCE(pa.street_address,'') street,
               COALESCE(pa.regency_city,'') city,
               COALESCE(pa.province,'') province,
               p.cert_type, p.land_area_sqm, p.building_area_sqm,
               ae.deposit_amount, ae.organizer_name
        FROM seen_lots s
        LEFT JOIN property_addresses pa ON s.lot_id=pa.property_id AND pa.is_primary=1
        LEFT JOIN properties p ON s.lot_id=p.property_id
        LEFT JOIN auction_events ae ON ae.source_lot_id=s.lot_id AND ae.is_active=1
        WHERE UPPER(COALESCE(pa.regency_city,'')) LIKE '%MALANG%'
          AND UPPER(COALESCE(pa.regency_city,'')) NOT LIKE '%PEMALANG%'
          AND UPPER(s.category) IN ('PROPERTI','TANAH')
        ORDER BY s.lot_id
        """
    ).fetchall()
except Exception as exc:  # CI may lack the DB; never break the build
    print(f"skip: cannot read screener DB ({exc}); keeping committed snapshot", flush=True)
    raise SystemExit(0)

seen, assets = set(), []
for r in rows:
    if r["lot_id"] in seen:
        continue
    seen.add(r["lot_id"])
    limit = float(r["limit_price"] or 0)
    market = float(r["market_price_est"] or 0)
    roi = round((market - limit) / limit * 100, 2) if limit > 0 and market > 0 else None
    assets.append({
        "id": r["lot_id"],
        "title": r["title"],
        "provider": r["provider"],
        "category": r["category"],
        "city": r["city"] or None,
        "province": r["province"] or None,
        "address": r["street"] or None,
        "limitPrice": limit,
        "marketPriceEst": market or None,
        "roiPct": roi,
        "discountPct": float(r["discount_pct"] or 0) or None,
        "dealTier": r["deal_tier"] or "UNREVIEWED",
        "sourceUrl": r["source_url"] or None,
        "certType": r["cert_type"] or None,
        "landAreaSqm": r["land_area_sqm"] or None,
        "buildingAreaSqm": r["building_area_sqm"] or None,
        "depositAmount": r["deposit_amount"] or None,
        "organizerName": r["organizer_name"] or None,
        "endTime": r["end_time"] or None,
    })

payload = {
    "generatedAt": datetime.now(timezone.utc).isoformat(),
    "source": "lelang-screener SQLite (read-only snapshot)",
    "region": "Malang, Jawa Timur",
    "count": len(assets),
    "assets": assets,
}
os.makedirs(os.path.dirname(OUT), exist_ok=True)
with open(OUT, "w", encoding="utf-8") as f:
    json.dump(payload, f, ensure_ascii=False, indent=2)
print(f"wrote {OUT}: {len(assets)} assets")
