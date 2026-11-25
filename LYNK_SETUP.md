# Lynk.id setup — Digital Products (no-code path)

Use this to start taking payments **today**, without waiting for a code deploy.
You already use Lynk for the ebook (`lynk.id/jendralbot/l7qdy174d73d/checkout`), so the account exists.

> If the code path (`fix/self-serve-checkout`) is merged, pick **one** path per product.
> Don't point a tier at both Lynk and `/api/checkout`.

---

## 1. Prepare the files first

Lynk delivers files automatically after payment. Put these in a folder before you start:

| File | Suggested name |
|------|----------------|
| Prompt pack | `Prompt-Pack-AI-50.pdf` |
| Notion template | `Template-Notion-UMKM.pdf` (contains duplicate-link to your Notion template) |
| Workflow automation | `Workflow-Automation.zip` |
| Usage guide | `Panduan-Penggunaan.pdf` |

Open the Notion template → **Share** → copy the public link. Put that link inside `Panduan-Penggunaan.pdf`.
Test every link in a private/incognito window before selling.

---

## 2. Create three products in Lynk

Dashboard → **Products** → **New product**. Use **Digital product** / "Produk Digital" with file delivery.

### Product 1 — Starter

- **Name:** `Produk Digital AI — Starter`
- **Price:** `49000`
- **Description (paste):**

```
1 produk digital pilihan — langsung bisa dipakai.

Isi paket:
• 1 prompt pack AI (50 prompt siap pakai)
• Panduan penggunaan (PDF)
• Akses seumur hidup + update gratis

Cocok untuk mencoba sebelum beli paket yang lebih besar.
Garansi: jika tidak sesuai deskripsi, uang kembali penuh.
```

- **Files:** `Prompt-Pack-AI-50.pdf`, `Panduan-Penggunaan.pdf`
- **Thank-you message (paste):**

```
Terima kasih! Pembayaran berhasil ✅

Klik tombol download di bawah untuk mengambil file kamu.
Simpan PDF-nya, lalu ikuti panduan di halaman pertama.

Butuh bantuan? Chat WhatsApp: https://wa.me/6282231399998
```

### Product 2 — Professional (recommended)

- **Name:** `Produk Digital AI — Professional`
- **Price:** `99000`
- **Compare-at price:** `147000` (if the field exists)
- **Description (paste):**

```
3 produk digital pilihan untuk produktivitas kerja.

Isi paket:
• 3 prompt pack AI (content, coding, bisnis)
• Template Notion untuk project & CRM
• Workflow automation siap pakai
• Update gratis seumur hidup + bonus produk baru bulan ini

Hemat Rp 48.000 dibanding beli satuan.
Garansi 100% — cocok atau uang kembali.
```

- **Files:** all four files from step 1.
- **Thank-you message:** same as Starter, plus:

```
Bonus bulan ini sudah termasuk di folder download 🎁
```

### Product 3 — Enterprise

- **Name:** `Produk Digital AI — Enterprise (All Access)`
- **Price:** `199000`
- **Compare-at price:** `299000`
- **Description (paste):**

```
Akses semua produk digital AI — sekarang dan yang akan datang.

Isi paket:
• Semua prompt pack & template (update gratis selamanya)
• Semua workflow automation
• Prioritas request produk baru
• Komunitas eksklusif + support prioritas
• Diskon 30% untuk produk baru

Cocok untuk power user dan tim kecil.
Garansi 100%.
```

- **Files:** all four files.
- **Thank-you message:** same as Professional.

---

## 3. Settings to check on every product

- Payment methods: enable **QRIS**, **e-wallet (GoPay/OVO/DANA/ShopeePay)**, **Virtual Account**.
- **Delivery:** automatic after payment (not manual approval).
- **Redirect after success:** leave on Lynk's thank-you page — delivery happens there.
- **Stock:** unlimited.
- **Webhook:** optional. If you want notifications, point it to
  `https://berkahkarya.org/api/payment-confirmed`
  (only after `PAYMENT_WEBHOOK_SECRET` is set in Cloudflare; otherwise callbacks return 503).

Copy each product's checkout URL. They look like:
`https://lynk.id/jendralbot/<slug>/checkout`

---

## 4. Wire the URLs into the landing page

Edit `components/landing/lp-data/doc-design-services/digital-products.ts`.
Replace the three tier CTA blocks with the Lynk links, and **remove** the
`checkoutAmount` / `checkoutProduct` lines for those tiers:

```ts
// Starter
ctaLink: 'https://lynk.id/jendralbot/<starter-slug>/checkout',

// Professional
ctaLink: 'https://lynk.id/jendralbot/<professional-slug>/checkout',

// Enterprise
ctaLink: 'https://lynk.id/jendralbot/<enterprise-slug>/checkout',
```

Keep `waLink(...)` for the hero "Lihat Katalog" CTA — consultation stays manual.

Commit + push to `main`. Netlify/Cloudflare will rebuild automatically.

---

## 5. Test before promoting (5 minutes)

1. Open the live LP: `https://berkahkarya.org/id/lp/digital-products/1/`
2. Click **Pilih Starter** → Lynk checkout loads.
3. Pay with QRIS using your own money (small test, Rp 49K).
4. Confirm: files download on the thank-you page, all links open.
5. Refund yourself through Lynk dashboard so the test order is clean.

---

## 6. Promote it

- Put the LP link in your WhatsApp bio, Telegram bot menu, and email footer.
- Run Meta Ads to the LP with `InitiateCheckout` as the optimization event —
  the existing `TrackedCTA` already fires that event for external checkout links.
- Add a Rp 49K "tripwire" at the top of every other service LP, upselling to
  the Rp 500K academy class.

---

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| Lynk page opens but no files | Product type is not "digital" — recreate with file delivery |
| Download link 404 | Notion link is private — reshare with "Anyone with the link" |
| CTA still opens WhatsApp | `ctaLink` was not replaced, or cache — hard-refresh / clear CF cache |
| Payment succeeds but no file | Check Lynk "delivery method" = automatic |
