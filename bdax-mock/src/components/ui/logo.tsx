import { designConfig } from '@/lib/config';

interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className = '', size = 20 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" className={className}>
      <path d="M10 0 L0 20 L20 20 Z" fill="currentColor" />
    </svg>
  );
}

