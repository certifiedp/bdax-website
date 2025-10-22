import Image from 'next/image';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export function Logo({ className = '', size = 40, showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image
        src="/assets/bdaxLogo.png"
        alt="BDAX Logo"
        width={size}
        height={size * 1.5}
        className="object-contain"
        priority
      />
      {showText && (
        <span className="text-white text-xl font-medium tracking-tight">
          BDAX
        </span>
      )}
    </div>
  );
}

