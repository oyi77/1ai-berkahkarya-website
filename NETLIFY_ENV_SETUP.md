# Netlify Environment Variables

## Lokasi

https://app.netlify.com/sites/berkahkarya/settings/deploys#environment

## Variable yang harus di-set

```
# Required — tanpa ini build gagal
NEXT_PUBLIC_ADMIN_PANEL_KEY=BerkahKarya2026!

# Admin panel API
ADMIN_PANEL_KEY=BerkahKarya2026!
BOT_ADMIN_PASSWORD=BerkahKarya2026!
BOT_API_URL=https://api-saas.aitradepulse.com

# Meta Pixel & CAPI
META_PIXEL_ID=771021905629860
META_CAPI_ACCESS_TOKEN=<isi token kamu>

# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-V9C14XZ9SG

# TriPay
TRIPAY_API_KEY=<isi key>
TRIPAY_PRIVATE_KEY=<isi key>
TRIPAY_MERCHANT_CODE=T23409

# Tracking (opsional, server-side only)
TRACKING_META_CAPI_TOKEN=
TRACKING_TIKTOK_EVENTS_API_TOKEN=
```

## Cara

1. Buka link di atas
2. Klik **"Add a variable"** — isi satu per satu
3. Setelah semua terisi, klik **"Save"**
4. Buka tab **Deploys** → **Trigger deploy** → **Clear cache and deploy site**

## Notes

- `NEXT_PUBLIC_*` di-inline ke bundle JS saat build time — wajib ada sebelum build
- Variable lain cukup di Netlify dashboard, gak perlu `.env.local`
- Build gagal karena `NEXT_PUBLIC_ADMIN_PANEL_KEY` gak ada — ini satu-satunya blocker
