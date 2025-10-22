import Link from 'next/link';
import { navigationLinks } from '@/data/content';
import { Button } from '@/components/ui/button';
import { designConfig } from '@/lib/config';
import { Logo } from '@/components/ui/logo';

export function Header() {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${designConfig.colors.background.dark} ${designConfig.colors.border.light} border-b backdrop-blur-sm`}>
      <div className={`${designConfig.spacing.container} py-4 md:py-5`}>
        <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <Logo size={40} showText={true} />
              </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            {navigationLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`${designConfig.typography.body.xs} ${designConfig.colors.text.primary} font-medium hover:opacity-70 transition-opacity`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Button className={`${designConfig.colors.accent.primary} hover:opacity-90 rounded-[25px] px-7 py-2.5 ${designConfig.colors.text.primary} text-[15px] font-medium transition-all hover:scale-105`}>
            Apply
          </Button>
        </div>
      </div>
    </header>
  );
}

