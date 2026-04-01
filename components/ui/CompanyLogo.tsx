'use client';

type CompanyName =
  | 'Google'
  | 'Meta'
  | 'Amazon'
  | 'Microsoft'
  | 'Netflix'
  | 'OpenAI'
  | 'Anthropic';

export function CompanyLogo({
  name,
  className = '',
}: {
  name: CompanyName;
  className?: string;
}) {
  const baseClassName = `h-7 w-auto ${className}`;

  switch (name) {
    case 'Google':
      return (
        <svg viewBox="0 0 64 64" className={baseClassName} aria-label="Google logo" role="img">
          <path d="M32 13a19 19 0 0 1 13.4 5.4" fill="none" stroke="#4285F4" strokeWidth="8" strokeLinecap="round" />
          <path d="M45.4 18.4A19 19 0 0 1 51 32" fill="none" stroke="#4285F4" strokeWidth="8" strokeLinecap="round" />
          <path d="M17.6 20A19 19 0 0 1 32 13" fill="none" stroke="#EA4335" strokeWidth="8" strokeLinecap="round" />
          <path d="M15 32c0-4.5 1.6-8.7 4.2-12" fill="none" stroke="#FBBC05" strokeWidth="8" strokeLinecap="round" />
          <path d="M19.2 44A19 19 0 0 1 15 32" fill="none" stroke="#FBBC05" strokeWidth="8" strokeLinecap="round" />
          <path d="M32 51a19 19 0 0 1-12.8-4.9" fill="none" stroke="#34A853" strokeWidth="8" strokeLinecap="round" />
          <path d="M32 51c10.5 0 16.8-7.3 18.5-17" fill="none" stroke="#4285F4" strokeWidth="8" strokeLinecap="round" />
          <path d="M50.5 34H34" fill="none" stroke="#4285F4" strokeWidth="8" strokeLinecap="round" />
        </svg>
      );

    case 'Meta':
      return (
        <svg viewBox="0 0 64 32" className={baseClassName} aria-label="Meta logo" role="img">
          <path
            d="M6 21c3.4-10.2 7-15.3 10.9-15.3 5 0 8.7 7.8 15.1 18.5C38.4 13.5 42 5.7 47.1 5.7 51 5.7 54.6 10.8 58 21"
            fill="none"
            stroke="#7C8CFF"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'Amazon':
      return (
        <svg viewBox="0 0 64 40" className={baseClassName} aria-label="Amazon logo" role="img">
          <text x="18" y="22" fill="#F7F7FB" fontSize="22" fontWeight="700" fontFamily="Arial, sans-serif">
            a
          </text>
          <path d="M16 28c8 5 22 5.8 31-1.2" fill="none" stroke="#FF9900" strokeWidth="3.5" strokeLinecap="round" />
          <path d="m43 24 4 2.5-3 4" fill="none" stroke="#FF9900" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'Microsoft':
      return (
        <svg viewBox="0 0 48 48" className={baseClassName} aria-label="Microsoft logo" role="img">
          <rect x="4" y="4" width="18" height="18" rx="2.5" fill="#F25022" />
          <rect x="26" y="4" width="18" height="18" rx="2.5" fill="#7FBA00" />
          <rect x="4" y="26" width="18" height="18" rx="2.5" fill="#00A4EF" />
          <rect x="26" y="26" width="18" height="18" rx="2.5" fill="#FFB900" />
        </svg>
      );

    case 'Netflix':
      return (
        <svg viewBox="0 0 48 48" className={baseClassName} aria-label="Netflix logo" role="img">
          <path d="M12 6h7v36h-7z" fill="#B1060F" />
          <path d="M29 6h7v36h-7z" fill="#E50914" />
          <path d="M19 6h8l9 36h-8z" fill="#7A0008" />
        </svg>
      );

    case 'OpenAI':
      return (
        <svg viewBox="0 0 48 48" className={baseClassName} aria-label="OpenAI logo" role="img">
          <g fill="none" stroke="#F1F5FF" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M24 6c4 0 7 2.2 8.9 5.5l-4.7 2.7A5.9 5.9 0 0 0 24 12" />
            <path d="M37.9 14c2 3.4 1.9 7.2.2 10.4l-4.7-2.7a5.9 5.9 0 0 0-.1-6.8" />
            <path d="M38.1 34c-2 3.4-5.2 5.2-8.8 5.3v-5.4a5.9 5.9 0 0 0 4.2-2.5" />
            <path d="M24 42c-4 0-7.1-2-9.1-5.2l4.7-2.8A5.9 5.9 0 0 0 24 36" />
            <path d="M10 34c-2-3.4-2-7.3-.2-10.5l4.7 2.7a5.9 5.9 0 0 0 .1 6.8" />
            <path d="M10 14c2-3.3 5.2-5.2 8.9-5.3v5.4a5.9 5.9 0 0 0-4.3 2.6" />
          </g>
        </svg>
      );

    case 'Anthropic':
      return (
        <svg viewBox="0 0 48 48" className={baseClassName} aria-label="Anthropic logo" role="img">
          <g fill="#D7965B">
            <rect x="22" y="5" width="4" height="14" rx="2" />
            <rect x="22" y="29" width="4" height="14" rx="2" />
            <rect x="29" y="22" width="14" height="4" rx="2" />
            <rect x="5" y="22" width="14" height="4" rx="2" />
            <rect x="28.5" y="10" width="4" height="14" rx="2" transform="rotate(45 30.5 17)" />
            <rect x="15.5" y="24" width="4" height="14" rx="2" transform="rotate(45 17.5 31)" />
            <rect x="24" y="28.5" width="14" height="4" rx="2" transform="rotate(45 31 30.5)" />
            <rect x="10" y="15.5" width="14" height="4" rx="2" transform="rotate(45 17 17.5)" />
          </g>
        </svg>
      );
  }
}
