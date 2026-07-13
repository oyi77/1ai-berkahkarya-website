#!/usr/bin/env python3
"""Generate BerkahKarya promotional video using PIL + edge-tts + moviepy."""

import asyncio
import edge_tts
import tempfile
from pathlib import Path
from moviepy.audio.io.AudioFileClip import AudioFileClip
from moviepy.video.VideoClip import ImageClip
from PIL import Image, ImageDraw, ImageFont
from moviepy.video.compositing.concatenate import concatenate_videoclips

OUT = Path.home() / ".paseo" / "worktrees" / "0jnwqf5g" / "helpless-bedbug" / "berkahkarya-intro.mp4"
TMP = Path(tempfile.mkdtemp(prefix="bk_video_"))

# ── Colour palette (matching website) ──────────────────────────
BG_DARK   = (4, 8, 22)      # surface background
BG_CARD   = (11, 17, 34)    # glass card bg
ACCENT    = (139, 92, 246)  # violet accent
ACCENT2   = (6, 182, 212)   # teal accent
WARM      = (245, 158, 11)  # gold/warm
WHITE     = (255, 255, 255)
WHITE_70  = (255, 255, 255, 179)
WHITE_50  = (255, 255, 255, 128)
WHITE_20  = (255, 255, 255, 51)

W, H = 1920, 1080
FPS = 24

# ── Scene data ─────────────────────────────────────────────────
SCENES = [
    {"text": "AI is evolving.\nIs your business\nkeeping up?", "sub": "", "duration": 5.0, "accent": ACCENT},
    {"text": "Meet BerkahKarya", "sub": "Your Autonomous AI Workforce", "duration": 5.0, "accent": ACCENT2},
    {"text": "Content Creation\nMarket Intelligence\n24/7 Automation", "sub": "Everything you need to scale", "duration": 5.0, "accent": ACCENT},
    {"text": "Zero Friction.\nInfinite Scale.", "sub": "Let AI handle the heavy lifting", "duration": 5.0, "accent": WARM},
    {"text": "BerkahKarya", "sub": "Let AI do the work.", "duration": 5.0, "accent": ACCENT2},
]

# ── Helper: find a system font ─────────────────────────────────
def _find_font(weight="Regular", size=48):
    """Find a good sans font path."""
    candidates = list(Path("/usr/share/fonts").rglob(f"*Sora*{weight}*")) if weight != "Regular" else []
    if not candidates:
        candidates = list(Path("/usr/share/fonts").rglob("*Sora*")) 
    if not candidates:
        candidates = list(Path("/usr/share/fonts").rglob("*DM*Sans*"))
    if not candidates:
        candidates = list(Path("/usr/share/fonts").rglob("*DejaVu*Sans*"))
    if not candidates:
        # fallback
        for d in ["/usr/share/fonts/truetype", "/usr/local/share/fonts"]:
            p = Path(d)
            if p.exists():
                candidates = list(p.rglob("*.ttf"))
    if candidates:
        return str(candidates[0])
    return None


def _create_glass_card(draw, x, y, w, h, alpha=0.65):
    """Draw a glass card rectangle."""
    overlay = Image.new("RGBA", (w, h), (11, 17, 34, int(255 * alpha)))
    draw.bitmap((x, y), overlay)


def draw_scene(scene, output_path: Path):
    """Render one scene as a 1920x1080 PNG."""
    img = Image.new("RGBA", (W, H), BG_DARK)
    draw = ImageDraw.Draw(img)

    # ── subtle grid pattern ───────────────────────────────────
    for x in range(0, W, 80):
        draw.line([(x, 0), (x, H)], fill=(255, 255, 255, 6), width=1)
    for y in range(0, H, 80):
        draw.line([(0, y), (W, y)], fill=(255, 255, 255, 6), width=1)

    # ── glowing accent line at top ────────────────────────────
    c = scene["accent"]
    for i in range(3):
        alpha = 30 - i * 8
        draw.rectangle([400 + i * 40, 0, 600 - i * 40, 3], fill=(*c, max(alpha, 5)))

    # ── glass card behind text ────────────────────────────────
    card_h = 400 if "\n" in scene["text"] else 200
    card_w = 1000
    card_x = (W - card_w) // 2
    card_y = (H - card_h) // 2 - 30
    overlay = Image.new("RGBA", (card_w, card_h), (11, 17, 34, 180))
    # rounded corners via alpha mask
    mask = Image.new("L", (card_w, card_h), 0)
    mask_draw = ImageDraw.Draw(mask)
    r = 20
    mask_draw.rounded_rectangle([0, 0, card_w, card_h], radius=r, fill=255)
    overlay.putalpha(mask)
    img.alpha_composite(overlay, (card_x, card_y))
    # glass border
    draw.rounded_rectangle(
        [card_x, card_y, card_x + card_w, card_y + card_h],
        radius=r, outline=(255, 255, 255, 25), width=1
    )

    # ── main title text ───────────────────────────────────────
    font_path = _find_font("Bold", 72) or _find_font("Regular", 72)
    title_lines = scene["text"].split("\n")
    line_h = 90
    total_text_h = len(title_lines) * line_h
    start_y = card_y + (card_h - total_text_h) // 2 - 20

    for i, line in enumerate(title_lines):
        font = ImageFont.truetype(font_path or "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 72)
        bbox = draw.textbbox((0, 0), line, font=font)
        tw = bbox[2] - bbox[0]
        tx = (W - tw) // 2
        ty = start_y + i * line_h
        # subtle glow behind text
        for g in range(5, 0, -1):
            glow_alpha = 8 // g
            draw.text((tx, ty), line, font=font, fill=(*c, max(glow_alpha, 2)))
        draw.text((tx, ty), line, font=font, fill=WHITE)

    # ── subtitle ──────────────────────────────────────────────
    if scene["sub"]:
        font_s = ImageFont.truetype(font_path or "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 32)
        bbox_s = draw.textbbox((0, 0), scene["sub"], font=font_s)
        sw = bbox_s[2] - bbox_s[0]
        sx = (W - sw) // 2
        sy = card_y + card_h - 70
        draw.text((sx, sy), scene["sub"], font=font_s, fill=WHITE_70)

    # ── brand mark bottom-right ───────────────────────────────
    font_sm = ImageFont.truetype(font_path or "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 20)
    draw.text((W - 220, H - 40), "berkahkarya.org", font=font_sm, fill=WHITE_50)

    img.save(str(output_path), "PNG")
    return str(output_path)


# ── Generate all scene images ──────────────────────────────────
def gen_images():
    """Generate 5 scene images, return list of paths."""
    paths = []
    for i, s in enumerate(SCENES):
        p = TMP / f"scene_{i:02d}.png"
        draw_scene(s, p)
        paths.append(str(p))
        print(f"  Scene {i+1}: {p}")
    return paths


# ── Generate voiceover ─────────────────────────────────────────
async def gen_voiceover():
    """Generate voiceover audio using edge-tts."""
    script_lines = [
        "AI is evolving. Is your business keeping up?",
        "Meet BerkahKarya. Your autonomous AI workforce.",
        "From content creation to market intelligence. Twenty-four seven automation.",
        "Zero friction. Infinite scale. Let AI handle the heavy lifting.",
        "BerkahKarya. Let AI do the work.",
    ]
    full_script = " ... ".join(script_lines)
    out_path = str(TMP / "narration.mp3")

    communicate = edge_tts.Communicate(
        full_script,
        voice="en-US-ChristopherNeural",
        rate="+5%",
        pitch="-5Hz",
    )
    await communicate.save(out_path)
    print(f"  Narration: {out_path}")
    return out_path


# ── Assemble video ─────────────────────────────────────────────
def assemble(scene_paths: list[str], audio_path: str, output: Path):
    """Combine scene images + audio into final MP4."""
    audio = AudioFileClip(audio_path)

    clips = []
    for i, sp in enumerate(scene_paths):
        dur = SCENES[i]["duration"]
        clip = ImageClip(sp, duration=dur).set_position("center").set_duration(dur)
        clips.append(clip)

    video = concatenate_videoclips(clips, method="compose")

    # Trim audio to match video length

    if audio.duration > video.duration:
        audio = audio.subclip(0, video.duration)

    video = video.set_audio(audio).set_fps(FPS)
    video.write_videofile(
        str(output),
        codec="libx264",
        audio_codec="aac",
        fps=FPS,
        preset="medium",
        bitrate="4000k",
        threads=4,
        logger="bar",
    )
    print(f"\n✅ Video saved: {output}")
    video.close()
    audio.close()


# ── Entry point ────────────────────────────────────────────────
async def main():
    print("🎬 BerkahKarya Intro Video Generator\n")
    print("Step 1: Generating scene images...")
    scenes = gen_images()
    print("Step 2: Generating narration...")
    audio = await gen_voiceover()
    print("Step 3: Assembling video...")
    assemble(scenes, audio, OUT)
    print(f"Done! File size: {OUT.stat().st_size / 1024 / 1024:.1f} MB")


if __name__ == "__main__":
    asyncio.run(main())
