/**
 * יוצר גרסאות WebP (responsive למודעות + אופטימיזציה לשחמט/ביקורות).
 * הרצה: node scripts/optimize-images.mjs
 */
import { mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const widthsAds = [320, 640, 960];

/** slug → קובץ מקור ב-public (שמות מקור כמו בקוד) */
const adSources = [
  ['boutique-magurim', 'מגורי בוטיק.png'],
  ['genesis-bike', 'genesis_bike.jfif'],
  ['rega-news', 'רגע ניוס.jpeg'],
  ['larnaka-2502', 'לרנקה 2502.png'],
  ['cruise-post', 'פו2סט קרוז.jpg'],
  ['atem-haltem', 'אתם החלטתם.png'],
  ['chofesh-reviva', 'חופשת רכיבה במגוון יעדים.jpg'],
  ['ready-rook', 'מוכן לחשוב כמו תוקף.png'],
  ['gil-p2ost', 'gil p2ost.jpg'],
  ['tsvi-yehezkeli', 'צבי יחזקאלי.jpeg.jpeg'],
  ['deal-kosher-place', 'מבצע כולל מקום כשר.jpg2.jpg'],
  ['sharon-gal-follow', 'שרון גל הזמנה לעקוב.png'],
  ['photography-rolling', 'מסע צילום מתגלגל.jpg'],
  ['post-tzuna', 'פוסט תזונה.jpg'],
];

const chessAssets = [
  { file: 'chess-hero-bg.png', maxWidth: 1920 },
  { file: 'chess-knight.png', maxWidth: 840 },
  { file: 'chess-king.png', maxWidth: 900 },
  { file: 'chess-queen.png', maxWidth: 520 },
  { file: 'chess-rook-blue.png', maxWidth: 560 },
  { file: 'ads-bg.png', maxWidth: 1600 },
  { file: 'review_screenshot.png', maxWidth: 800 },
  { file: 'review_screenshot2.png', maxWidth: 800 },
  { file: 'review_screenshot3.png', maxWidth: 800 },
];

async function toWebp(srcPath, destPath, { maxWidth, quality = 82 }) {
  const img = sharp(srcPath);
  const meta = await img.metadata();
  const w = meta.width && meta.width > maxWidth ? maxWidth : undefined;
  await img
    .resize(w ? { width: w, withoutEnlargement: true } : undefined)
    .webp({ quality })
    .toFile(destPath);
}

async function adsResponsive() {
  const outDir = join(root, 'public', 'img', 'ads');
  mkdirSync(outDir, { recursive: true });

  for (const [slug, filename] of adSources) {
    const src = join(root, 'public', filename);
    if (!existsSync(src)) {
      console.warn('[optimize-images] missing source, skip:', filename);
      continue;
    }
    for (const w of widthsAds) {
      const dest = join(outDir, `${slug}-${w}.webp`);
      await sharp(src)
        .resize({ width: w, height: w, fit: 'cover', position: 'attention' })
        .webp({ quality: 80 })
        .toFile(dest);
      console.log('wrote', dest);
    }
  }
}

async function chessAndBundled() {
  const assetsDir = join(root, 'src', 'assets');
  for (const { file, maxWidth } of chessAssets) {
    const src = join(assetsDir, file);
    if (!existsSync(src)) {
      console.warn('[optimize-images] missing:', src);
      continue;
    }
    const base = file.replace(/\.[^.]+$/, '');
    const dest = join(assetsDir, `${base}.webp`);
    await toWebp(src, dest, { maxWidth });
    console.log('wrote', dest);
  }
}

async function blogCovers() {
  const blogDir = join(root, 'public', 'blog');
  if (!existsSync(blogDir)) return;
  const { readdirSync } = await import('fs');
  const files = readdirSync(blogDir).filter((f) => /\.(png|jpe?g|jfif)$/i.test(f));
  for (const f of files) {
    const src = join(blogDir, f);
    const base = f.replace(/\.[^.]+$/, '');
    const dest = join(blogDir, `${base}.webp`);
    await toWebp(src, dest, { maxWidth: 1200 });
    console.log('wrote', dest);
  }
}

async function publicWebpCompanion() {
  const files = ['וובינר השקעות.png', 'מימון עסקי.png', 'סייבר.png', 'ספורט.png', 'next_move.png'];
  for (const f of files) {
    const src = join(root, 'public', f);
    if (!existsSync(src)) {
      console.warn('[optimize-images] skip companion:', f);
      continue;
    }
    const dest = join(root, 'public', f.replace(/\.[^.]+$/, '.webp'));
    await toWebp(src, dest, { maxWidth: 1400 });
    console.log('wrote', dest);
  }
}

async function main() {
  await chessAndBundled();
  await adsResponsive();
  await blogCovers();
  await publicWebpCompanion();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
