import Link from 'next/link';
import { navigationLinks } from '@/data/content';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { designConfig } from '@/lib/config';

export function Header() {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${designConfig.colors.background.main} border-b border-gray-300`}>
      <div className={`${designConfig.spacing.container} py-4`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-xl font-bold tracking-tight">BDAX</div>
            <Logo size={20} className="mt-0.5 text-yellow-400" />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`${designConfig.typography.body.base} font-normal hover:opacity-70 transition-opacity`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Button className={`${designConfig.colors.background.black} hover:bg-gray-900 ${designConfig.border.radius.full} px-8 py-2`}>
            Apply
          </Button>
        </div>
      </div>
    </header>
  );
}

