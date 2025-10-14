import Link from 'next/link';
import { navigationLinks } from '@/data/content';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#d4d4d8] border-b border-gray-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-xl font-bold tracking-tight">BDAX</div>
            <svg width="20" height="20" viewBox="0 0 20 20" className="mt-0.5">
              <path d="M10 0 L0 20 L20 20 Z" fill="#fbbf24" />
            </svg>
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
          <Button className="bg-black hover:bg-gray-900 rounded-full px-8 py-2">Apply</Button>
        </div>
      </div>
    </header>
  );
}

