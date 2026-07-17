# POSTBUILD: Ebook PDF Image Width Fixes

## What Changed
- `diagram-potongan.png`: w=150→110mm (171→126mm tall)
- `konstruksi-1.jpg`: w=150→85mm (186→105mm tall)
- `konstruksi-2.jpg`: w=150→85mm (225→128mm tall)
- `diagram-sirkulasi.png`: w=150→130mm (107→93mm tall)
- Tahap space check: 65→50mm

## Result
- 18 pages (down from 21)
- No image-only blank pages
- Images now share pages with associated Tahap content
- All financial data verified consistent

## Files Changed
- `scripts/generate-ebook.py` — 4 image width changes + 1 space check
- `public/ebook/panduan-bangun-rumah-lengkap.pdf` — regenerated

## Commit
6cd7a9e — `fix: reduce image widths and space check to eliminate image-only pages`
