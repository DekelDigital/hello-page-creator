import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blogPosts';
import adsBg from '../assets/ads-bg.png';
import chessHeroBg from '../assets/chess-hero-bg.png';
import chessKing from '../assets/chess-king.png';
import chessKnight from '../assets/chess-knight.png';
import chessQueen from '../assets/chess-queen.png';
import chessRookBlue from '../assets/chess-rook-blue.png';
import reviewImg1 from '../assets/review_screenshot.png';
import reviewImg2 from '../assets/review_screenshot2.png';
import reviewImg3 from '../assets/review_screenshot3.png';

const publicImages = [
  '/logo.png',
  '/next_move.png',
  '/tiktok_logo.png',
  '/meta_logo.png',
  '/google ads logo.png',
  '/מגורי בוטיק.png',
  '/genesis_bike.jfif',
  '/רגע ניוס.jpeg',
  '/לרנקה 2502.png',
  '/פו2סט קרוז.jpg',
  '/אתם החלטתם.png',
  '/חופשת רכיבה במגוון יעדים.jpg',
  '/מוכן לחשוב כמו תוקף.png',
  '/gil p2ost.jpg',
  '/צבי יחזקאלי.jpeg.jpeg',
  '/מבצע כולל מקום כשר.jpg2.jpg',
  '/שרון גל הזמנה לעקוב.png',
  '/מסע צילום מתגלגל.jpg',
  '/פוסט תזונה.jpg',
  '/וובינר השקעות.png',
  '/מימון עסקי.png',
  '/סייבר.png',
  '/ספורט.png',
  ...blogPosts.map((post) => post.coverImage),
];

const importedImages = [
  adsBg,
  chessHeroBg,
  chessKing,
  chessKnight,
  chessQueen,
  chessRookBlue,
  reviewImg1,
  reviewImg2,
  reviewImg3,
];

const imageUrls = Array.from(new Set([...publicImages, ...importedImages]));
const priorityImages = Array.from(new Set(['/logo.png', '/next_move.png', chessHeroBg, ...blogPosts.slice(0, 6).map((post) => post.coverImage)]));

export default function ImagePerformanceManager() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const warmImage = (src: string) =>
      new Promise<void>((resolve) => {
        const img = new Image();
        img.decoding = 'async';
        img.loading = 'eager';
        img.src = src;

        if (img.complete) {
          resolve();
          return;
        }

        img.onload = () => resolve();
        img.onerror = () => resolve();
      });

    const cacheImages = async () => {
      if ('caches' in window) {
        try {
          const cache = await window.caches.open('dekel-digital-images-v1');
          await Promise.all(
            imageUrls.map(async (url) => {
              try {
                const cached = await cache.match(url);
                if (!cached) {
                  await cache.add(url);
                }
              } catch {
                // Ignore individual cache failures
              }
            })
          );
          return;
        } catch {
          // Fallback to regular browser cache warming below
        }
      }

      await Promise.all(
        imageUrls.map(async (url) => {
          try {
            await fetch(url, { cache: 'force-cache' });
          } catch {
            // Ignore individual fetch failures
          }
        })
      );
    };

    void Promise.all(priorityImages.map(warmImage));

    let timeoutId: number | undefined;
    let idleId: number | undefined;

    const scheduleCache = () => {
      if ('requestIdleCallback' in window) {
        idleId = window.requestIdleCallback(() => {
          void cacheImages();
        });
        return;
      }

      timeoutId = window.setTimeout(() => {
        void cacheImages();
      }, 800);
    };

    scheduleCache();

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
      if (idleId && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleId);
      }
    };
  }, []);

  return (
    <Helmet>
      {priorityImages.map((url) => (
        <link key={url} rel="preload" as="image" href={url} />
      ))}
    </Helmet>
  );
}
