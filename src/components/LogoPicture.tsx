import type { ImgHTMLAttributes } from 'react';

const WEBP_SRCSET = '/logo-192.webp 192w, /logo-256.webp 256w';

const SIZES = {
  header: '(max-width: 768px) 80px, 96px',
  footer: '112px',
  blog: '(max-width: 768px) 80px, 96px',
} as const;

export type LogoPictureVariant = keyof typeof SIZES;

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  variant: LogoPictureVariant;
};

/**
 * WebP רספונסיבי + PNG גיבוי — פחות משקל מ-logo.png בודד במובייל.
 */
export function LogoPicture({ variant, alt, className, width, height, decoding = 'async', ...rest }: Props) {
  return (
    <picture>
      <source type="image/webp" srcSet={WEBP_SRCSET} sizes={SIZES[variant]} />
      <img src="/logo.png" alt={alt} className={className} width={width} height={height} decoding={decoding} {...rest} />
    </picture>
  );
}
