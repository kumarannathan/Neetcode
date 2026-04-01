import type { SVGProps } from 'react';

type GlyphName =
  | 'home'
  | 'code'
  | 'roadmap'
  | 'layers'
  | 'play'
  | 'bookmark'
  | 'settings'
  | 'streak'
  | 'spark'
  | 'arrow'
  | 'user'
  | 'search'
  | 'menu'
  | 'close';

type GlyphProps = SVGProps<SVGSVGElement> & {
  name: GlyphName;
};

export function Glyph({ name, className, ...props }: GlyphProps) {
  const shared = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
    ...props,
  };

  switch (name) {
    case 'home':
      return <svg {...shared}><path d="M3 10.5 12 3l9 7.5" /><path d="M5.5 9.5V20h13V9.5" /></svg>;
    case 'code':
      return <svg {...shared}><path d="m8 8-4 4 4 4" /><path d="m16 8 4 4-4 4" /><path d="m13.5 4-3 16" /></svg>;
    case 'roadmap':
      return <svg {...shared}><path d="M5 18c5-10 9 4 14-6" /><path d="M7 7h4v4H7z" /><path d="M14 13h4v4h-4z" /></svg>;
    case 'layers':
      return <svg {...shared}><path d="m12 4 8 4-8 4-8-4 8-4Z" /><path d="m4 12 8 4 8-4" /><path d="m4 16 8 4 8-4" /></svg>;
    case 'play':
      return <svg {...shared}><circle cx="12" cy="12" r="8.5" /><path d="m10 8.8 5.4 3.2-5.4 3.2V8.8Z" /></svg>;
    case 'bookmark':
      return <svg {...shared}><path d="M7 4h10v16l-5-3-5 3V4Z" /></svg>;
    case 'settings':
      return <svg {...shared}><path d="M12 8.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 1 0 12 8.5z" /><path d="M19.4 15a1 1 0 0 0 .2 1.1l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1 1 0 0 0-1.1-.2 1 1 0 0 0-.6.9V20a2 2 0 1 1-4 0v-.2a1 1 0 0 0-.6-.9 1 1 0 0 0-1.1.2l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1 1 0 0 0 .2-1.1 1 1 0 0 0-.9-.6H4a2 2 0 1 1 0-4h.2a1 1 0 0 0 .9-.6 1 1 0 0 0-.2-1.1l-.1-.1a2 2 0 0 1 2.8-2.8l.1.1a1 1 0 0 0 1.1.2 1 1 0 0 0 .6-.9V4a2 2 0 1 1 4 0v.2a1 1 0 0 0 .6.9 1 1 0 0 0 1.1-.2l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1 1 0 0 0-.2 1.1 1 1 0 0 0 .9.6H20a2 2 0 1 1 0 4h-.2a1 1 0 0 0-.9.6Z" /></svg>;
    case 'streak':
      return <svg {...shared}><path d="M12.7 3C8.8 8 16.2 9.5 10 15c-2.3 2-2 6 2 6 4 0 6-4 6-7 0-4.8-3.8-7.4-5.3-11Z" /></svg>;
    case 'spark':
      return <svg {...shared}><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" /></svg>;
    case 'arrow':
      return <svg {...shared}><path d="M5 12h14" /><path d="m13 5 7 7-7 7" /></svg>;
    case 'user':
      return <svg {...shared}><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" /><path d="M4 20c1.8-3.3 5-5 8-5s6.2 1.7 8 5" /></svg>;
    case 'search':
      return <svg {...shared}><circle cx="11" cy="11" r="6.5" /><path d="m20 20-3.5-3.5" /></svg>;
    case 'menu':
      return <svg {...shared}><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></svg>;
    case 'close':
      return <svg {...shared}><path d="m6 6 12 12" /><path d="m18 6-12 12" /></svg>;
    default:
      return null;
  }
}
