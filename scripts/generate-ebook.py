#!/usr/bin/env python3
"""Generate panduan-bangun-rumah-lengkap.pdf with professional layout."""

import os
from PIL import Image
from fpdf import FPDF

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG_DIR = os.path.join(ROOT, "public/ebook/images")
OUT = os.path.join(ROOT, "public/ebook/panduan-bangun-rumah-lengkap.pdf")

W = 210  # A4
H = 297
LM = 20
RM = 20

FONT_DIR = "/usr/share/fonts/truetype/dejavu"
FONT = os.path.join(FONT_DIR, "DejaVuSans.ttf")
FONT_BOLD = os.path.join(FONT_DIR, "DejaVuSans-Bold.ttf")
FONT_ITALIC = os.path.join(FONT_DIR, "DejaVuSans-Oblique.ttf")
FONT_BI = os.path.join(FONT_DIR, "DejaVuSans-BoldOblique.ttf")

class Ebook(FPDF):
    def __init__(self):
        super().__init__(orientation='P', unit='mm', format='A4')
        self.set_auto_page_break(True, 25)
        self.set_margins(LM, 20, RM)

        self.add_font('DejaVu', '', FONT)
        self.add_font('DejaVu', 'B', FONT_BOLD)
        self.add_font('DejaVu', 'I', FONT_ITALIC)
        self.add_font('DejaVu', 'BI', FONT_BI)
        self.F = 'DejaVu'

    def header(self):
        if self.page_no() > 1:
            self.set_font(self.F, 'I', 7)
            self.set_text_color(130)
            self.cell(0, 4, 'Panduan Bangun Rumah Lengkap - BerkahKarya Kontraktor', align='C', new_x='LMARGIN', new_y='NEXT')
            self.line(LM, self.get_y(), W-RM, self.get_y())
            self.ln(3)

    def footer(self):
        if self.page_no() > 1:
            self.set_y(-15)
            self.set_font(self.F, 'I', 7)
            self.set_text_color(130)
            self.cell(0, 8, f'Halaman {self.page_no()}', align='C')

    def section_title(self, num, title, subtitle=""):
        # Prevent orphan: if remaining space < 35mm, force new page
        if self.get_y() > self.h - self.b_margin - 35:
            self.add_page()
        self.ln(4)
        self.set_text_color(180, 120, 20)
        self.set_font(self.F, 'B', 14)
        label = f'BAB {num}' if num else ''
        prefix = f'{label}: ' if label else ''
        self.cell(0, 8, f'{prefix}{title}', new_x='LMARGIN', new_y='NEXT')
        if subtitle:
            self.set_font(self.F, 'I', 9)
            self.set_text_color(100)
            self.cell(0, 5, subtitle, new_x='LMARGIN', new_y='NEXT')
        self.set_draw_color(180, 120, 20)
        self.line(LM, self.get_y(), W-RM, self.get_y())
        self.ln(3)
        self.set_text_color(30)

    def body(self, txt):
        self.set_x(self.l_margin)
        self.set_font(self.F, '', 9.5)
        self.set_text_color(50)
        self.multi_cell(W-LM-RM, 5.5, txt)
        self.set_text_color(30)

    def tip(self, txt):
        self.set_x(self.l_margin)
        self.ln(2)
        # Fill both TIP label and text for consistent background
        self.set_fill_color(255, 248, 225)
        self.set_draw_color(180, 150, 50)
        self.set_font(self.F, 'B', 8.5)
        self.set_text_color(140, 100, 10)
        self.cell(8, 5, 'TIP:', border=0, fill=True)
        self.set_font(self.F, '', 8.5)
        self.set_text_color(100, 70, 10)
        self.multi_cell(W-LM-RM-8, 5, txt, fill=True)
        self.set_x(self.l_margin)
        self.ln(2)
        self.set_text_color(30)

    def bold(self, txt):
        self.set_x(self.l_margin)
        self.set_font(self.F, 'B', 9.5)
        self.set_text_color(30)
        self.multi_cell(W-LM-RM, 5.5, txt)
        self.set_text_color(50)

    def bullet(self, items):
        self.set_x(self.l_margin)
        self.set_font(self.F, '', 9)
        self.set_text_color(50)
        for item in items:
            self.set_x(self.l_margin + 3)
            self.cell(5, 5, '\u2022', new_x='RIGHT', new_y='TOP')
            w = W - self.l_margin - self.r_margin - 8
            self.multi_cell(w, 5, item, new_x='LMARGIN', new_y='NEXT')
            self.ln(0.5)
        self.set_text_color(30)
        self.ln(1)


    def tbl(self, headers, rows, col_widths=None):
        """Draw a table with borders and alternating shading."""
        self.set_x(self.l_margin)
        self.ln(2)
        h = 6
        n = len(headers)
        if col_widths:
            cw = col_widths
        else:
            cw = [(W-LM-RM)/n] * n
        lw = sum(cw)
        # Check if table fits on current page — estimate 2*header + rows + margin
        est_h = 2 * h + len(rows) * h + 10
        if self.get_y() + est_h > self.h - self.b_margin:
            self.add_page()
            self.set_x(self.l_margin)
        # Header
        self.set_font(self.F, 'B', 8)
        self.set_fill_color(180, 120, 20)
        self.set_text_color(255)
        self.set_draw_color(160, 100, 10)
        for i, hdr in enumerate(headers):
            self.cell(cw[i], h, hdr, border=1, fill=True, align='C')
        self.ln()
        # Rows
        self.set_font(self.F, '', 7.5)
        self.set_draw_color(200)
        for ri, row in enumerate(rows):
            # Detect section header: first cell empty, Uraian has text, last cell empty
            is_section = (len(row) > 2 and row[0] == '' and row[2] != '' and row[-1] == '')
            # Detect sub-total: first cell empty, Uraian has text, last cell non-empty
            is_subtotal = (len(row) > 2 and row[0] == '' and row[2] != '' and row[-1] != '')

            if is_section:
                self.set_fill_color(240, 235, 215)
                self.set_font(self.F, 'B', 8)
                self.set_text_color(80, 50, 20)
            elif is_subtotal:
                self.set_fill_color(245, 242, 235)
                self.set_font(self.F, 'B', 7.5)
                self.set_text_color(30)
            elif ri % 2 == 0:
                self.set_fill_color(250, 245, 240)
                self.set_text_color(50)
            else:
                self.set_fill_color(255)
                self.set_text_color(50)

            # Check if row fits before drawing
            if self.get_y() + h > self.h - self.b_margin:
                self.add_page()
                self.set_x(self.l_margin)
                # Redraw header on new page
                self.set_font(self.F, 'B', 8)
                self.set_fill_color(180, 120, 20)
                self.set_text_color(255)
                self.set_draw_color(160, 100, 10)
                for idx, hdr in enumerate(headers):
                    self.cell(cw[idx], h, hdr, border=1, fill=True, align='C')
                self.ln()
                # After page break, reapply the row style for the row being drawn
                self.set_draw_color(200)
                if is_section:
                    self.set_fill_color(240, 235, 215)
                    self.set_font(self.F, 'B', 8)
                    self.set_text_color(80, 50, 20)
                elif is_subtotal:
                    self.set_fill_color(245, 242, 235)
                    self.set_font(self.F, 'B', 7.5)
                    self.set_text_color(30)
                elif ri % 2 == 0:
                    self.set_fill_color(250, 245, 240)
                    self.set_text_color(50)
                else:
                    self.set_fill_color(255)
                    self.set_text_color(50)

            for i, cell in enumerate(row):
                self.cell(cw[i], h, str(cell), border=1, fill=True, align='C' if i > 0 else 'L')
            self.ln()
        self.set_x(self.l_margin)
        self.set_text_color(30)
        self.ln(3)

    def img_centered(self, path, w=150, caption=""):
        """Place centered image with optional caption."""
        if not os.path.exists(path):
            self.body(f"[Gambar tidak tersedia: {os.path.basename(path)}]")
            return
        self.set_x(self.l_margin)
        self.ln(2)
        # Calculate rendered height and force page break if image won't fit
        with Image.open(path) as _img:
            iw, ih = _img.size
        rendered_h = w * ih / iw
        if self.get_y() + rendered_h + 10 > self.h - self.b_margin:
            self.add_page()
        # Calculate centered x
        x = (W - w) / 2
        self.set_x(x)
        self.image(path, x=x, w=w)
        if caption:
            self.ln(2)
            self.set_font(self.F, 'I', 8)
            self.set_text_color(100)
            self.cell(0, 4, caption, align='C', new_x='LMARGIN', new_y='NEXT')
        self.set_x(self.l_margin)
        self.ln(4)
        self.set_text_color(30)


def generate():
    pdf = Ebook()
    pdf.set_margin(LM)

    # ===========================
    # COVER PAGE
    # ===========================
    pdf.add_page()
    # Compact cover: title → image → info, all on 1 page
    pdf.ln(15)
    pdf.set_draw_color(180, 120, 20)
    pdf.set_line_width(1)
    pdf.line(LM, pdf.get_y(), W-RM, pdf.get_y())
    pdf.ln(6)
    pdf.set_font(pdf.F, 'B', 26)
    pdf.set_text_color(180, 120, 20)
    pdf.cell(0, 10, 'PANDUAN BANGUN RUMAH LENGKAP', align='C', new_x='LMARGIN', new_y='NEXT')
    pdf.ln(3)
    pdf.set_draw_color(180, 120, 20)
    pdf.set_line_width(0.5)
    pdf.line(LM+40, pdf.get_y(), W-RM-40, pdf.get_y())
    pdf.ln(3)
    pdf.set_font(pdf.F, '', 10)
    pdf.set_text_color(80, 80, 80)
    pdf.cell(0, 6, 'Gambaran, Desain, Struktur, Material, RAB, & Tahapan Konstruksi', align='C', new_x='LMARGIN', new_y='NEXT')
    pdf.ln(3)
    pdf.set_font(pdf.F, 'I', 9)
    pdf.set_text_color(180, 120, 20)
    pdf.cell(0, 6, 'GRATIS - Dari BerkahKarya Kontraktor', align='C', new_x='LMARGIN', new_y='NEXT')
    pdf.ln(6)

    # Cover image - scaled to fit in remaining space
    cover = os.path.join(IMG_DIR, 'cover-exterior.jpg')
    if os.path.exists(cover):
        # Get image aspect ratio
        from PIL import Image
        try:
            with Image.open(cover) as img:
                iw, ih = img.size
        except:
            iw, ih = 1199, 1801
        # Fit width to ~100mm leaving room for bottom text
        cover_w = 90
        cover_h = cover_w * ih / iw
        pdf.set_x((W-cover_w)/2)
        pdf.image(cover, x=(W-cover_w)/2, w=cover_w)
        pdf.ln(4)
    else:
        pdf.ln(20)

    pdf.set_font(pdf.F, '', 8)
    pdf.set_text_color(100)
    pdf.cell(0, 5, 'www.berkahkarya.org  |  WA: 0858-0062-0035', align='C', new_x='LMARGIN', new_y='NEXT')

    # ===========================
    # BAB 1: GAMBARAN
    # ===========================
    pdf.add_page()
    pdf.section_title('1', 'Gambaran Besar Rumah Impian', 'Memvisualisasikan rumah yang ingin Anda bangun')

    img1 = os.path.join(IMG_DIR, 'desain-modern.jpg')
    pdf.img_centered(img1, w=160, caption='Desain rumah tinggal 2 lantai modern minimalis')

    pdf.body(
        'Membangun rumah adalah perjalanan panjang yang dimulai dari sebuah gambaran di kepala. '
        'Ebook ini akan membantu Anda menerjemahkan imajinasi tersebut menjadi realitas, langkah demi langkah.\n\n'
        'Sebelum memulai, tanyakan pada diri sendiri:'
    )
    pdf.bullet([
        'Berapa luas tanah? (luas m2, lebar depan, kedalaman)',
        'Berapa lantai? Gaya arsitektur?',
        'Berapa jumlah kamar tidur, KM, ruang keluarga?',
        'Budget maksimal? (termasuk tanah, bangunan, interior)',
        'Target waktu penyelesaian?',
    ])
    pdf.tip('Buat folder inspirasi visual dari Pinterest, Instagram, atau portofolio BerkahKarya.')

    # ===========================
    # BAB 2: PERENCANAAN LAHAN
    # ===========================
    pdf.add_page()
    pdf.section_title('2', 'Perencanaan & Perhitungan Lahan', 'Cara menghitung potensi lahan Anda')

    img2 = os.path.join(IMG_DIR, 'diagram-siteplan.png')
    pdf.img_centered(img2, w=150, caption='Ilustrasi perhitungan KDB, KLB, dan GSB pada lahan')

    pdf.body(
        'Lahan adalah aset paling berharga. Sebelum mendesain, Anda harus tahu seberapa besar bangunan yang bisa dibangun.'
    )

    pdf.bold('1. KDB - Koefisien Dasar Bangunan')
    pdf.body(
        'KDB adalah persentase luas lahan maksimal yang boleh ditutupi bangunan. '
        'Di perumahan, KDB maksimal biasanya 60%.'
    )
    pdf.tip('Tanah 120 m2, bangunan 72 m2 -> KDB = 72/120 x 100% = 60%')

    pdf.bold('2. KLB - Koefisien Lantai Bangunan')
    pdf.body('KLB adalah total luas seluruh lantai dibagi luas tanah. Rumah 2 lantai 72m2 per lantai: total 144m2, KLB = 1.2.')

    pdf.bold('3. GSB - Garis Sempadan Bangunan')
    pdf.body(
        'Jarak minimal dari batas lahan ke dinding terluar bangunan. Perumahan: GSB depan 5-6m, '
        'samping 3m, belakang 3m.'
    )
    pdf.tip('Tanah 12x10m, GSB dpn 5m, blkng 3m, kiri 3m, kanan 3m. Efektif = 4x4 = 16m2.')

    pdf.tip('Cek KDB/KLB/GSB ke Dinas PUPR setempat sebelum beli tanah.')

    # ===========================
    # BAB 3: SPESIFIKASI TEKNIS
    # ===========================
    pdf.add_page()
    pdf.section_title('3', 'Spesifikasi Teknis Bangunan', 'Standar dimensi & material yang wajib diketahui')

    pdf.bold('A. Ukuran Standar Pintu')
    pdf.tbl(
        ['Tipe Pintu', 'Lebar (cm)', 'Tinggi (cm)', 'Keterangan'],
        [
            ['Pintu Utama', '90-100', '210-240', 'Double leaf'],
            ['Pintu Kamar', '80', '210', 'SNI'],
            ['Pintu KM', '70-75', '210', 'Akses'],
            ['Geser/Sliding', '90-120', '210', 'Balkon/teras'],
            ['Garasi', '250-300', '210-240', 'Rolling door'],
        ],
        [45, 30, 30, 45]
    )

    img3 = os.path.join(IMG_DIR, 'diagram-pintu-jendela.png')
    pdf.img_centered(img3, w=140, caption='Dimensi standar pintu dan jendela')

    pdf.bold('B. Ukuran Standar Jendela')
    pdf.tbl(
        ['Tipe Jendela', 'Lebar (cm)', 'Tinggi (cm)', 'Keterangan'],
        [
            ['Kamar', '80-120', '100-120', 'Bukaan min 0.5m2'],
            ['Ruang Tamu', '120-180', '150-180', 'Cahaya alami'],
            ['Dapur', '60-90', '80-100', 'Ventilasi kompor'],
            ['KM', '40-60', '60-80', '+exhaust fan'],
        ],
        [45, 30, 30, 45]
    )

    pdf.bold('C. Tinggi Plafon Ideal')
    pdf.tbl(
        ['Ruang', 'Min (m)', 'Ideal (m)', 'Saran'],
        [
            ['R. Keluarga', '2.8', '3.0 - 3.5', '+0.5m jika AC'],
            ['Kamar Tidur', '2.6', '2.8 - 3.0', 'Jangan < 2.4m'],
            ['KM', '2.4', '2.5 - 2.7', '+exhaust fan'],
            ['Dapur', '2.6', '2.8 - 3.0', 'Ventilasi kompor'],
        ],
        [45, 30, 30, 45]
    )
    pdf.tip('Rumus: (L+P ruangan)/2. Ruang 5x4m -> (5+4)/2 = 4.5m. Di Indonesia tropis, 3-3.5m cukup.')

    pdf.bold('D. Jenis Bata')
    pdf.tbl(
        ['Jenis', 'Ukuran', 'Kebutuhan/m2', 'Harga/m2', 'Kelebihan'],
        [
            ['Bata Merah', '23x11x5cm', '55-60 bh', 'Rp90-120rb', 'Kedap suara'],
            ['Bata Ringan', '60x20x10cm', '8-9 bh', 'Rp100-130rb', 'Cepat & rapi'],
            ['Batako', '40x20x10cm', '12-13 bh', 'Rp70-90rb', 'Ekonomis'],
        ],
        [35, 30, 30, 30, 35]
    )

    # ===========================
    # BAB 4: RAB
    # ===========================
    pdf.add_page()
    pdf.section_title('4', 'Rencana Anggaran Biaya (RAB)', 'Estimasi biaya pembangunan rumah — lengkap dengan studi kasus proyek riil')

    pdf.bold('A. Estimasi Biaya per Meter Persegi (2025-2026)')
    pdf.tbl(
        ['Standar', 'Per m2', 'Keterangan'],
        [
            ['Sederhana', 'Rp3-4 juta', 'Material standar, desain sederhana'],
            ['Menengah', 'Rp4-6 juta', 'Material cukup baik, finishing cat'],
            ['Modern Minimalis', 'Rp6-8 juta', 'Desain arsitek, material bagus'],
            ['Mewah', 'Rp8-12+ juta', 'Premium material, interior desain'],
        ],
        [50, 40, 70]
    )

    pdf.ln(2)
    pdf.body('Berikut adalah RAB proyek riil Rumah Tinggal 1 Lantai milik Bapak Tri Triswanto di Desa Pagerwojo, Perak, Jombang (luas 167 m2) — data transparan, bukan perkiraan.')

    # === Dashboard ===
    pdf.bold('B. Dashboard Proyek')
    pdf.body('TOTAL ESTIMASI: Rp 413.415.366 (Termasuk PPN 11% & Overhead)')

    pdf.tbl(
        ['Komponen', 'Persentase', 'Jumlah'],
        [
            ['Material', '48.5%', 'Rp 200.586.108'],
            ['Upah', '21.2%', 'Rp 87.679.746'],
            ['Alat', '0.1%', 'Rp 451.145'],
            ['Overhead & Profit', '13.3%', 'Rp 54.856.230'],
            ['Contingency', '7.0%', 'Rp 28.871.700'],
            ['Pajak (PPN)', '9.9%', 'Rp 40.968.942'],
            ['TOTAL', '100%', 'Rp 413.415.366'],
        ],
        [60, 30, 60]
    )

    pdf.ln(2)
    pdf.bold('C. 5 Item Pekerjaan Termahal (Pareto)')
    pdf.tbl(
        ['No', 'Uraian Pekerjaan', 'Biaya', '%'],
        [
            ['1', 'Pasang Dinding Bata Ringan AAC 10cm', 'Rp 79.191.087', '19.2%'],
            ['2', 'Pasang Pondasi Batu Kali 1:3:10', 'Rp 49.106.391', '11.9%'],
            ['3', 'Plesteran Dinding 1PC:3KP t=15mm', 'Rp 47.864.880', '11.6%'],
            ['4', 'Pasang Keramik Lantai Granit Tile 60x60', 'Rp 28.787.394', '7.0%'],
            ['5', 'Penutup Atap Genteng Beton Flat', 'Rp 26.364.000', '6.4%'],
        ],
        [12, 90, 35, 25]
    )
    pdf.tip('Hanya 5 dari 24 item ini mewakili ~56% dari total biaya. Fokus negosiasi pada item-item ini untuk efisiensi maksimal.')

    # === 24-Item Detail RAB ===
    pdf.bold('D. Rincian RAB — 24 Item Pekerjaan')
    pdf.body('Proyek: Rumah Tinggal 1 Lantai — Lokasi: Pagerwojo, Jombang — Luas: 167 m2')

    rab_headers = ['No', 'Kode', 'Uraian Pekerjaan', 'Volume', 'Sat', 'Harga Satuan', 'Jumlah Harga']
    rab_rows = [
        # I — Pekerjaan Persiapan
        ['', '', 'I. PEKERJAAN PERSIAPAN', '', '', '', ''],
        ['1', 'I.1', 'Pembersihan Lahan', '350', 'm2', 'Rp 3.735', 'Rp 1.307.250'],
        ['2', 'I.2', 'Pengukuran & Pasang Bouwplank', '160', 'm\'', 'Rp 52.311', 'Rp 8.369.707'],
        ['3', 'I.3', 'Galian Tanah Pondasi Batu Kali', '179.2', 'm3', 'Rp 14.276', 'Rp 2.558.200'],
        ['4', 'I.4', 'Urugan Tanah Kembali', '89.6', 'm3', 'Rp 2.490', 'Rp 223.104'],
        ['', '', 'SUB TOTAL I', '', '', '', 'Rp 12.458.260'],
        # II — Struktur Pondasi
        ['', '', 'II. STRUKTUR PONDASI', '', '', '', ''],
        ['5', 'II.1', 'Pasang Pondasi Batu Kali 1:3:10', '88', 'm3', 'Rp 463.163', 'Rp 40.758.305'],
        ['6', 'II.2', 'Beton Sloof S1 (15x20)', '4.8', 'm3', 'Rp 792.860', 'Rp 3.805.730'],
        ['', '', 'SUB TOTAL II', '', '', '', 'Rp 44.564.035'],
        # III — Struktur Beton
        ['', '', 'III. STRUKTUR BETON BERTULANG', '', '', '', ''],
        ['7', 'III.1', 'Beton Kolom K1/KP (12x12)', '1.43', 'm3', 'Rp 764.933', 'Rp 1.093.854'],
        ['8', 'III.2', 'Beton Ring Balok RB (15x20)', '4.8', 'm3', 'Rp 668.986', 'Rp 3.211.131'],
        ['', '', 'SUB TOTAL III', '', '', '', 'Rp 4.304.985'],
        # IV — Dinding
        ['', '', 'IV. PEKERJAAN DINDING', '', '', '', ''],
        ['9', 'IV.1', 'Pasang Dinding Bata Ringan AAC 10cm', '700', 'm2', 'Rp 93.898', 'Rp 65.728.602'],
        ['10', 'IV.2', 'Plesteran Dinding 1PC:3KP t=15mm', '1.400', 'm2', 'Rp 28.377', 'Rp 39.727.850'],
        ['11', 'IV.3', 'Acian Dinding', '1.400', 'm2', 'Rp 7.458', 'Rp 10.440.570'],
        ['', '', 'SUB TOTAL IV', '', '', '', 'Rp 115.897.022'],
        # V — Atap
        ['', '', 'V. PEKERJAAN ATAP', '', '', '', ''],
        ['12', 'V.1', 'Rangka Atap Baja Ringan', '240', 'm2', 'Rp 61.632', 'Rp 14.791.681'],
        ['13', 'V.2', 'Penutup Atap Genteng Beton Flat', '240', 'm2', 'Rp 91.176', 'Rp 21.882.120'],
        ['', '', 'SUB TOTAL V', '', '', '', 'Rp 36.673.801'],
        # VI — Lantai
        ['', '', 'VI. PEKERJAAN LANTAI', '', '', '', ''],
        ['14', 'VI.1', 'Pasang Keramik Granit Tile 60x60', '140', 'm2', 'Rp 170.668', 'Rp 23.893.537'],
        ['', '', 'SUB TOTAL VI', '', '', '', 'Rp 23.893.537'],
        # VII — Plafond
        ['', '', 'VII. PEKERJAAN PLAFOND', '', '', '', ''],
        ['15', 'VII.1', 'Rangka Plafond Hollow Galvanis 20x40', '131', 'm2', 'Rp 15.583', 'Rp 2.041.372'],
        ['16', 'VII.2', 'Penutup Plafond Gypsum Board 9mm', '131', 'm2', 'Rp 39.747', 'Rp 5.206.808'],
        ['', '', 'SUB TOTAL VII', '', '', '', 'Rp 7.248.179'],
        # VIII — Finishing
        ['', '', 'VIII. PEKERJAAN FINISHING', '', '', '', ''],
        ['17', 'VIII.1', 'Pengecatan Dinding Interior', '490', 'm2', 'Rp 7.376', 'Rp 3.614.066'],
        ['18', 'VIII.2', 'Pasang Kusen Pintu & Jendela Alum 4"', '90', 'm\'', 'Rp 133.447', 'Rp 12.010.266'],
        ['19', 'VIII.3', 'Pasang Daun Pintu Panel Kayu Meranti', '7', 'bh', 'Rp 1.091.367', 'Rp 7.639.569'],
        ['20', 'VIII.4', 'Pasang Kaca Polos 5mm', '48.5', 'm2', 'Rp 117.379', 'Rp 5.692.862'],
        ['21', 'VIII.5', 'Pasang Closet Duduk', '2', 'bh', 'Rp 1.165.992', 'Rp 2.331.985'],
        ['', '', 'SUB TOTAL VIII', '', '', '', 'Rp 31.288.748'],
        # IX — Instalasi
        ['', '', 'IX. PEKERJAAN INSTALASI', '', '', '', ''],
        ['22', 'IX.1', 'Instalasi Titik Lampu', '26', 'titik', 'Rp 100.472', 'Rp 2.612.259'],
        ['23', 'IX.2', 'Instalasi Pipa Air Bersih PVC 1/2"', '40', 'm\'', 'Rp 31.976', 'Rp 1.279.047'],
        ['', '', 'SUB TOTAL IX', '', '', '', 'Rp 3.891.306'],
        # X — Eksterior
        ['', '', 'X. PEKERJAAN EKSTERIOR', '', '', '', ''],
        ['24', 'X.1', 'Pembangunan Septik Tank & Resapan', '1', 'bh', 'Rp 8.497.125', 'Rp 8.497.125'],
        ['', '', 'SUB TOTAL X', '', '', '', 'Rp 8.497.125'],
    ]

    pdf.tbl(rab_headers, rab_rows, [10, 14, 65, 12, 12, 24, 24])

    # === Grand total ===
    pdf.bold('E. Rekapitulasi')
    pdf.tbl(
        ['Uraian', 'Jumlah'],
        [
            ['Total Biaya Langsung (I s.d. X)', 'Rp 288.718.044'],
            ['Overhead (7%)', 'Rp 20.210.263'],
            ['Profit (12%)', 'Rp 34.646.165'],
            ['Contingency (10%)', 'Rp 28.871.804'],
            ['Total Nilai Pekerjaan', 'Rp 372.446.276'],
            ['PPN (11%)', 'Rp 40.969.090'],
            ['TOTAL RAB AKHIR', 'Rp 413.415.366'],
        ],
        [100, 60]
    )

    pdf.tip(
        'Harga menggunakan HSP (Harga Satuan Pokok) JOMBANG 2026. Estimasi berbeda-beda tergantung '
        'lokasi dan spesifikasi. Selalu konsultasikan RAB dengan kontraktor atau QS profesional.'
    )

    # Catatan dari proyek riil
    pdf.ln(2)
    pdf.set_font(pdf.F, 'I', 7.5)
    pdf.set_text_color(100)
    notes = (
        'Catatan: (1) Tinggi dinding 3.80m dari lantai ke ring balok. (2) Pondasi dihitung per denah pondasi. '
        '(3) Volume galian diasumsikan kedalaman 1.40m, footplate 1.50m. (4) Mutu beton struktur K-225. '
        '(5) Luas atap dihitung dgn faktor kemiringan 1.22 dari luas denah. '
        '(6) Koefisien analisa HSP mengacu SNI untuk wilayah JOMBANG.'
    )
    pdf.multi_cell(W-LM-RM, 4, notes)
    pdf.set_text_color(30)


    # ===========================
    # BAB 5: MATERIAL
    # ===========================
    pdf.add_page()
    pdf.section_title('5', 'Panduan Memilih Material', 'Tips memilih material berkualitas sesuai budget')

    pdf.bold('A. Material Struktural')
    pdf.tbl(
        ['Material', 'Rekomendasi', 'Hindari', 'Estimasi Harga'],
        [
            ['Besi Beton', 'TS 280/420 (ulir)', 'Besi polos tanpa sertifikat', 'Rp15-20rb/kg'],
            ['Semen', 'Tiga Roda, Semen Padang', 'Semen kadaluarsa/kemasan bocor', 'Rp60-70rb/sak'],
            ['Pasir', 'Pasir beton (Muntilan)', 'Pasir mengandung lumpur >5%', 'Rp250-350rb/m3'],
            ['Bata', 'Bata ringan (AAC)', 'Bata merah kualitas rendah', 'Rp100-130rb/m2'],
        ],
        [40, 45, 45, 40]
    )

    pdf.bold('B. Material Finishing')

    pdf.tbl(
        ['Jenis', 'Ekonomis', 'Premium', 'Rekomendasi'],
        [
            ['Lantai', 'Keramik 40x40', 'Granit 60x60', 'Keramik lokal'],
            ['Cat', 'Dulux/Nippon Paint', 'Jotun', 'Cat interior+eksterior'],
            ['Plafon', 'Gypsum', 'GRC Board', 'Gypsum 9mm'],
            ['Atap', 'Genteng Metal', 'Genteng Tanah', 'Genteng Tanah ekspos'],
        ],
        [40, 40, 45, 41]
    )

    pdf.bold('C. Material Interior')
    pdf.tbl(
        ['Item', 'Ekonomis', 'Premium', 'Keterangan'],
        [
            ['Kitchen Set', 'Multiplek + HPL', 'Solid wood', 'Plywood 18mm'],
            ['Meja Dapur', 'Granit lokal', 'Marmer import', 'Min 2cm tebal'],
            ['Pintu', 'PVC', 'Kayu solid', 'Kayu kamper/meranti'],
            ['Kusen', 'Aluminium', 'Kayu jati', 'Aluminium powder coating'],
        ],
        [40, 40, 45, 41]
    )
    pdf.tip('Beli material langsung di distributor/suplier untuk harga lebih murah 10-20%. Jangan lupa negosiasi untuk pembelian partai besar.')

    # ===========================
    # BAB 6: TAHAPAN KONSTRUKSI
    # ===========================
    pdf.add_page()
    pdf.section_title('6', 'Tahapan & Timeline Konstruksi', 'Proyek dari awal hingga serah terima')

    img4 = os.path.join(IMG_DIR, 'diagram-potongan.png')
    pdf.img_centered(img4, w=110, caption='Detail potongan struktur bangunan (pondasi, kolom, ring balk, atap)')

    pdf.bold('10 Kategori Pekerjaan (berdasarkan RAB Proyek Riil)')
    pdf.body('Berikut pembagian 10 kelompok pekerjaan dari proyek Rumah 1 Lantai 167 m2 di Jombang — lihat detail RAB 24 item di Bab 4.')

    pdf.tbl(
        ['Tahap', 'Kategori', 'Estimasi Biaya', '%'],
        [
            ['I', 'Persiapan (Pembersihan, Bouwplank, Galian, Urugan)', 'Rp 12.458.260', '4.3%'],
            ['II', 'Struktur Pondasi (Pondasi Batu Kali, Sloof 15x20)', 'Rp 44.564.035', '15.4%'],
            ['III', 'Struktur Beton (Kolom 12x12, Ring Balok 15x20)', 'Rp 4.304.985', '1.5%'],
            ['IV', 'Dinding (Bata Ringan AAC, Plester, Acian)', 'Rp 115.897.022', '40.1%'],
            ['V', 'Atap (Rangka Baja Ringan, Genteng Beton Flat)', 'Rp 36.673.801', '12.7%'],
            ['VI', 'Lantai (Granit Tile 60x60, Keramik Kasar)', 'Rp 23.893.537', '8.3%'],
            ['VII', 'Plafond (Hollow Galvanis 20x40, Gypsum 9mm)', 'Rp 7.248.179', '2.5%'],
            ['VIII', 'Finishing (Cat, Kusen Alum, Pintu Kayu, Closet)', 'Rp 31.288.748', '10.8%'],
            ['IX', 'Instalasi (Titik Lampu, Stop Kontak, Pipa Air)', 'Rp 3.891.306', '1.3%'],
            ['X', 'Eksterior (Septik Tank & Resapan)', 'Rp 8.497.125', '2.9%'],
            ['', 'TOTAL BIAYA LANGSUNG', 'Rp 288.718.044', '100%'],
        ],
        [16, 90, 40, 18]
    )

    pdf.ln(2)

    stages = [
        ('TAHAP 1 - Persiapan & Pondasi (3-4 minggu)',
         ['Pembersihan lahan & bouwplank', 'Galian tanah & urugan', 'Pondasi batu kali / footplate',
          'Estimasi biaya: Rp30-50jt'],
         'konstruksi-1.jpg'),
        ('TAHAP 2 - Sloof & Kolom (2-3 minggu)',
         ['Bekisting & pembesian sloof', 'Pengecoran beton K-225/K-250', 'Kolom praktis 15x15cm',
          'Estimasi biaya: Rp15-25jt'],
         None),
        ('TAHAP 3 - Struktur Beton (3-5 minggu)',
         ['Sloof 20x30, kolom 15x15, ring balk', 'Pelat lantai 2 (jika 2 lantai)', 'Tangga beton',
          'Estimasi biaya: Rp15-25jt'],
         'konstruksi-2.jpg'),
        ('TAHAP 4 - Dinding & Atap (3-5 minggu)',
         ['Bata ringan + plester + aci', 'Atap baja ringan + genteng', 'Listrik + pipa kasar',
          'Estimasi biaya: Rp25-35jt'],
         None),
        ('TAHAP 5 - MEP (2-3 minggu)',
         ['Instalasi listrik, stop kontak, saklar', 'Pipa air bersih & kotor', 'Septictank & resapan',
          'Estimasi biaya: Rp8-15jt'],
         None),
        ('TAHAP 6 - Finishing (4-6 minggu)',
         ['Plafon gypsum', 'Lantai keramik/granit', 'Cat dinding interior/eksterior',
          'Kitchen set & furniture built-in', 'Estimasi biaya: Rp30-50jt'],
         None),
        ('TAHAP 7 - Interior (2-4 minggu)',
         ['Furniture ruang keluarga & kamar', 'Taman & landscape', 'Pagar & carport',
          'Estimasi biaya: Rp15-30jt'],
         None),
    ]

    for title, items, img_name in stages:
        # Prevent orphan: if < 65mm left, start stage on new page
        if pdf.get_y() > pdf.h - pdf.b_margin - 50:
            pdf.add_page()
        pdf.bold(title)
        pdf.bullet(items)
        if img_name:
            ipath = os.path.join(IMG_DIR, img_name)
            pdf.img_centered(ipath, w=85, caption='')

    # Timeline summary
    pdf.bold('Estimasi Total Waktu:')
    pdf.tbl(
        ['Tipe Rumah', 'Luas', 'Waktu'],
        [
            ['1 Lantai', '36-72m2', '4-6 bulan'],
            ['2 Lantai', '72-120m2', '7-12 bulan'],
            ['Mewah', '200m2+', '12-18 bulan'],
        ],
        [50, 50, 50]
    )
    pdf.tip('Cuaca hujan bisa menambah 20-30% waktu konstruksi. Siapkan buffer waktu dan biaya.')

    img5 = os.path.join(IMG_DIR, 'diagram-sirkulasi.png')
    pdf.img_centered(img5, w=130, caption='Sirkulasi udara dan pencahayaan alami')

    # ===========================
    # BAB 7: STANDAR
    # ===========================
    pdf.add_page()
    pdf.section_title('7', 'Standar & Referensi', 'Tabel referensi cepat')

    pdf.bold('A. Dimensi Ruang Minimal')
    pdf.tbl(
        ['Ruang', 'Min', 'Ideal', 'Catatan'],
        [
            ['Kamar Utama', '3x3m', '3.5x4.5m', '+lemari 60cm'],
            ['Kamar Anak', '2.5x2.5m', '3x3.5m', '+meja belajar'],
            ['R. Keluarga', '3.5x4m', '4x6m', 'Gabung rmh makan'],
            ['Dapur', '2x2.5m', '2.5x4m', '+dapur kotor'],
            ['KM', '1.5x1.5m', '2x2.5m', 'Waterproofing!'],
            ['Carport', '2.5x5m', '3x6m', '1 mobil'],
        ],
        [40, 30, 30, 50]
    )

    pdf.bold('B. Standar Kelistrikan')
    pdf.body('Daya listrik minimal 2.200 VA (untuk rumah 36m2), rekomendasi 4.400-5.500 VA. Stop kontak setiap 3m.')
    pdf.tip('Kamar 4x5x3m: PK = (4x5x3x200)/4500 = 2.67 -> cukup AC 1/2 PK')

    pdf.bold('C. Spesifikasi Atap')
    pdf.tbl(
        ['Jenis Atap', 'Kemiringan', 'Reng', 'Awet', 'Harga/m2'],
        [
            ['Genteng Tanah', '30-40', '26-28 cm', '30-50 th', 'Rp120-180rb'],
            ['Genteng Metal', '15-25', '35-40 cm', '15-25 th', 'Rp80-130rb'],
            ['Spandek', '10-20', '50-60 cm', '20-30 th', 'Rp60-100rb'],
        ],
        [40, 25, 25, 20, 35]
    )

    # ===========================
    # STUDI KASUS
    # ===========================
    # Let section_title() handle orphan check automatically
    pdf.section_title('', 'STUDI KASUS', 'Contoh proyek nyata BerkahKarya')

    cases = [
        ('STUDI KASUS 1: Rumah 1 Lantai — Pagerwojo, Jombang', '2025-2026',
         '',
         'Luas: 167 m2 (14x25m)\n5 KT, 2 KM, R. Keluarga, Dapur, Carport, Taman\nAnggaran Rp413 Juta | Selesai',
         'Lahan di perdesaan dengan akses material terbatas. Biaya pengiriman material harus diperhitungkan dengan cermat.',
         'Material lokal (bata ringan AAC, granit tile 60x60, genteng beton flat). RAB detail 24 item — tidak ada biaya mendadak. Desain optimasi pencahayaan alami.',
         'Tepat waktu & sesuai anggaran Rp413 Juta. RAB transparan per item pekerjaan. Pemilik sangat puas.'),
        ('STUDI KASUS 2: Rumah 2 Lantai Modern', 'Jakarta Selatan, 2024',
         'rumah-tampak-depan.jpg',
         'Luas: 150m2 (10x15m), Bangunan: 200m2\n3 KT, 2 KM, R. Keluarga, Dapur, Carport, Rooftop\nAnggaran Rp1.2 Miliar | 8 bulan',
         'Lahan sempit 10x15m dengan GSB 5m. Membutuhkan desain yang memaksimalkan ruang.',
         'Desain 2 lantai dengan void tangga untuk ilusi luas. Pondasi footplate. Material lokal berkualitas.',
         'Tepat waktu (8 bulan). Sesuai anggaran Rp1.2 Miliar. Klien sangat puas.'),
        ('STUDI KASUS 3: Rumah Tua jadi Cafe & Co-Working', 'Bandung, 2025',
         'cafe-interior.jpg',
         'Bangunan 250m2, usia 40 tahun\nRenovasi total\nCafe lantai 1 + Co-Working lantai 2\nAnggaran Rp350 Juta | 4 bulan',
         'Bangunan tua 40 tahun dengan struktur lemah. Butuh retrofit tanpa mengubah estetika.',
         'Retrofit struktur dengan baja WF. Ekspos bata merah. Plafon 4m + skylight. Meja co-working custom.',
         'Kapasitas 60 orang. Omzet Rp3 juta/hari. Review positif di Google Maps.'),
        ('STUDI KASUS 4: Hotel Butik 12 Kamar', 'Yogyakarta, 2024',
         'hotel-interior.jpg',
         '600m2, 3 lantai, 12 kamar + lobby + rooftop\nAnggaran Rp2.8 Miliar | 10 bulan',
         'Integrasi konsep tradisional Jawa dengan kenyamanan modern. Budget ketat untuk kualitas bintang 3+.',
         'Batu alam lokal, kayu jati daur ulang, pencahayaan hangat. Kolam renang rooftop minimalis.',
         'Occupancy 75% di tahun pertama. Rating 4.7/5 di Booking.com.'),
        ('STUDI KASUS 5: Interior Kantor Modern', 'Jakarta, 2025',
         'kantor-interior.jpg',
         '400m2, 60 staf\nOpen plan + 3 meeting room\nAnggaran Rp500 Juta | 6 minggu',
         'Deadline ketat 6 minggu. Area operasional 60 staf tidak boleh terganggu.',
         'Partisi kaca tempered untuk privasi + cahaya. Panel akustik. AC VRV untuk efisiensi energi.',
         'Tepat waktu (6 minggu). Produktivitas staf naik 25%.'),
    ]

    for title, subtitle, img_name, data, challenge, solution, result in cases:
        # Check if we need a new page
        if pdf.get_y() > 200:
            pdf.add_page()
        pdf.bold(title)
        # Subtitle - reset x explicitly
        pdf.set_x(pdf.l_margin)
        pdf.set_font(pdf.F, 'I', 8)
        pdf.set_text_color(100)
        pdf.cell(0, 4, subtitle, new_x='LMARGIN', new_y='NEXT')
        pdf.set_text_color(50)
        pdf.set_font(pdf.F, '', 8)
        pdf.ln(1)

        ipath = os.path.join(IMG_DIR, img_name) if img_name else None
        if ipath and os.path.exists(ipath):
            # Data text on left, image on right — ensure x-reset
            pdf.set_x(pdf.l_margin)
            pdf.set_font(pdf.F, '', 7.5)
            pdf.set_text_color(50)
            pdf.multi_cell(W-LM-RM-55, 4, data)
            y_after_text = pdf.get_y()
            pdf.image(ipath, x=W-RM-50, w=50)
            pdf.set_y(max(pdf.get_y(), y_after_text))
            pdf.set_x(pdf.l_margin)
            pdf.ln(1)
        else:
            pdf.body(data)

        # Tantangan
        pdf.set_x(pdf.l_margin)
        pdf.set_font(pdf.F, 'B', 7.5)
        pdf.set_text_color(180, 120, 20)
        pdf.cell(15, 4, 'Tantangan:')
        pdf.set_font(pdf.F, '', 7.5)
        pdf.set_text_color(50)
        pdf.multi_cell(W-LM-RM-15, 4, challenge)
        pdf.ln(0.5)

        # Solusi
        pdf.set_x(pdf.l_margin)
        pdf.set_font(pdf.F, 'B', 7.5)
        pdf.set_text_color(180, 120, 20)
        pdf.cell(12, 4, 'Solusi:')
        pdf.set_font(pdf.F, '', 7.5)
        pdf.set_text_color(50)
        pdf.multi_cell(W-LM-RM-12, 4, solution)
        pdf.ln(0.5)

        # Hasil
        pdf.set_x(pdf.l_margin)
        pdf.set_font(pdf.F, 'B', 7.5)
        pdf.set_text_color(180, 120, 20)
        pdf.cell(10, 4, 'Hasil:')
        pdf.set_font(pdf.F, '', 7.5)
        pdf.set_text_color(50)
        pdf.multi_cell(W-LM-RM-10, 4, result)
        pdf.ln(4)

    # ===========================
    # CLOSING CTA
    # ===========================
    pdf.add_page()
    pdf.ln(30)
    pdf.set_draw_color(180, 120, 20)
    pdf.set_line_width(1)
    pdf.line(LM+30, pdf.get_y(), W-RM-30, pdf.get_y())
    pdf.ln(10)

    pdf.set_font(pdf.F, 'B', 18)
    pdf.set_text_color(180, 120, 20)
    pdf.cell(0, 10, 'SIAP MEMBANGUN RUMAH IMPIAN?', align='C', new_x='LMARGIN', new_y='NEXT')
    pdf.ln(5)

    pdf.set_font(pdf.F, '', 11)
    pdf.set_text_color(80)
    pdf.cell(0, 7, 'Konsultasi GRATIS dengan Tim Arsitek & Engineer', align='C', new_x='LMARGIN', new_y='NEXT')
    pdf.ln(3)
    pdf.set_font(pdf.F, 'I', 9)
    pdf.set_text_color(180, 120, 20)
    pdf.cell(0, 6, 'Tanpa Biaya & Tanpa Kewajiban', align='C', new_x='LMARGIN', new_y='NEXT')
    pdf.ln(8)

    # Offer items
    offers = [
        'Analisa Kebutuhan Lahan',
        'Rekomendasi Konsep Desain',
        'Gambaran 3D Ruangan',
        'Estimasi Budget Awal',
        'Panduan Tahapan Proyek',
    ]
    pdf.set_font(pdf.F, '', 10)
    pdf.set_text_color(50)
    for o in offers:
        pdf.cell(5, 7, chr(10003))
        pdf.cell(0, 7, o, new_x='LMARGIN', new_y='NEXT')
    pdf.ln(10)

    pdf.set_draw_color(180, 120, 20)
    pdf.set_line_width(0.5)
    pdf.line(LM+40, pdf.get_y(), W-RM-40, pdf.get_y())
    pdf.ln(8)

    pdf.set_font(pdf.F, 'B', 12)
    pdf.set_text_color(30)
    pdf.cell(0, 7, 'Hubungi Kami Sekarang!', align='C', new_x='LMARGIN', new_y='NEXT')
    pdf.ln(3)
    pdf.set_font(pdf.F, '', 10)
    pdf.set_text_color(180, 120, 20)
    pdf.cell(0, 6, 'WA: 0858-0062-0035', align='C', new_x='LMARGIN', new_y='NEXT')
    pdf.cell(0, 6, 'www.berkahkarya.org', align='C', new_x='LMARGIN', new_y='NEXT')
    pdf.ln(15)

    pdf.set_font(pdf.F, 'I', 7)
    pdf.set_text_color(130)
    pdf.cell(0, 4, '(c) 2025 BerkahKarya Kontraktor - All Rights Reserved', align='C', new_x='LMARGIN', new_y='NEXT')

    # Save
    pdf.output(OUT)
    sz = os.path.getsize(OUT)
    print(f"OK: {OUT} ({sz/1024:.0f} KB, {pdf.pages_count} pages)")


if __name__ == '__main__':
    generate()
