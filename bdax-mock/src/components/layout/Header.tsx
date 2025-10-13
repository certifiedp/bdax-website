import Link from 'next/link';
import { navigationLinks } from '@/data/content';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-100/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="text-2xl font-bold tracking-tight">BDAX</div>
            <div className="w-7 h-7 bg-yellow-400 clip-triangle" />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-base font-normal hover:opacity-70 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Button className="bg-gray-800 hover:bg-gray-900 rounded-full px-8">Apply</Button>
        </div>
      </div>
    </header>
  );
}

