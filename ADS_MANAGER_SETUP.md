# Panduan Konversi & UTM Meta Ads — BerkahKarya / VilonaFX

Dokumen ini berisi panduan teknis & template URL campaign Meta Ads supaya atribusi dari Iklan -> LP -> Bot Telegram tercatat 100% tanpa ada data yang hilang.

---

## 1. Event Optimization di Meta Ads Manager

Saat membuat Ad Set baru di Ads Manager:
- **Lokasi Konversi:** Situs Web (`berkahkarya.org`)
- **Tujuan Kinerja:** Maksimalkan jumlah konversi
- **Peristiwa Konversi (Pixel Event):** `Menyelesaikan Pendaftaran` (`Lead`)
  - *Jangan pilih "Tambahkan ke Keranjang" (`AddToCart`) atau "Pembelian" (`Purchase`) untuk ad set prospect/top-funnel.*

---

## 2. Template Parameter UTM untuk URL Iklan (Meta Ads)

Tempelkan URL ini di bagian **Situs Web (Website URL)** pada level Iklan (Ad):

### Varian LP1 — VilonaFX (Hero Swarm / Multi-AI)
```text
https://berkahkarya.org/id/lp/vilonafx/1/?utm_source=meta&utm_medium=paid&utm_campaign={{campaign.name}}&utm_content={{ad.name}}&utm_term={{adset.name}}
```

### Varian LP2 — VilonaFX (Interactive Process / Swarm Visual)
```text
https://berkahkarya.org/id/lp/vilonafx/2/?utm_source=meta&utm_medium=paid&utm_campaign={{campaign.name}}&utm_content={{ad.name}}&utm_term={{adset.name}}
```

### Varian LP3 — VilonaFX (Direct Call-to-Action)
```text
https://berkahkarya.org/id/lp/vilonafx/3/?utm_source=meta&utm_medium=paid&utm_campaign={{campaign.name}}&utm_content={{ad.name}}&utm_term={{adset.name}}
```

---

## 3. Deep Link Bot Telegram (Alternatif Direct-to-Bot)

Jika menggunakan iklan yang langsung mengarahkan user membuka Telegram bot:

```text
https://t.me/berkahkaryaforexbotbot?start=track_lp1_meta
```

*Payload `track_<id>` otomatis ditangkap bot dan diproses sebagai event `CompleteRegistration` / `Lead` via Meta CAPI.*

---

## 4. Alur Event Funnel yang Terdaftar

| Tahap | Trigger | Event Meta Pixel / CAPI | TikTok Event |
|---|---|---|---|
| 1. Buka LP | Buka `/id/lp/vilonafx/1` dst. | `ViewContent` | `ViewContent` |
| 2. Join Channel / WA | Klik tombol CTA channel/WA | `Lead` (*Menyelesaikan Pendaftaran*) | `CompleteRegistration` |
| 3. Niat Beli Plan | Klik tombol `/subscribe` / plan | `AddToCart` | `AddToCart` |
| 4. Dapatkan Invoice | Form checkout / payment link | `InitiateCheckout` | `InitiateCheckout` |
| 5. Sukses Bayar | Webhook payment status paid | `Purchase` | `CompletePayment` |

---

## 5. Cek Hasil Monitor

1. **Monitor Web Local/Internal:** `https://berkahkarya.org/ab-test-monitor/`
2. **Bot Telegram Admin:** Command `/funnel` di `@berkahkaryaforexbotbot`
3. **Meta Events Manager:** Filter berdasarkan Pixel `619475190242307` -> Event `Lead` & `Purchase`
