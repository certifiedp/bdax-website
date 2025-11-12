'use client';

import Link from 'next/link';
import Image from 'next/image';
import { footerContent } from '@/data/content';
import { designConfig } from '@/lib/config';
import bdaxWebsiteLogo from '@/app/bdax-website-logo.png';
import { Linkedin, Twitter, Instagram, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialIcons = {
    linkedin: Linkedin,
    twitter: Twitter,
    instagram: Instagram,
  };

  return (
    <footer className={`${designConfig.colors.background.main} relative`}>
      {/* Main Footer Section */}
      <div className={`${designConfig.colors.background.darker} shadow-[0px_-10px_4px_0px_rgba(0,0,0,0.25)] ${designConfig.spacing.section.md} relative`}>
        <div className={designConfig.spacing.container}>
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-12">
            {/* Left - Combined UC Berkeley + BDAX logo image */}
            <div className="flex flex-col items-start gap-4">
              <Image
                src={bdaxWebsiteLogo}
                alt="UC Berkeley BDAX"
                width={260}
                height={120}
                className="object-contain w-[220px] md:w-[260px] h-auto"
                priority
              />
              <div className="sr-only">
                {/* Hidden accessible text equivalents */}
                <span>UC Berkeley BDAX</span>
              </div>
              <p className={`${designConfig.typography.body.xs} ${designConfig.colors.text.primary} whitespace-pre-line`}>
                {footerContent.copyright}
              </p>
            </div>

            {/* Right - Navigation and Contact */}
            <div className="flex justify-end gap-16">
              {/* BDAX Links */}
              <div>
                <h3 className={`${designConfig.typography.body.sm} ${designConfig.colors.text.primary} font-medium mb-6`}>
                  {footerContent.navigation.bdax.title}
                </h3>
                <ul className="space-y-4">
                  {footerContent.navigation.bdax.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className={`${designConfig.typography.body.sm} ${designConfig.colors.text.secondary} hover:text-white underline transition-colors`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Links */}
              <div>
                <h3 className={`${designConfig.typography.body.sm} ${designConfig.colors.text.primary} font-medium mb-6`}>
                  {footerContent.navigation.contact.title}
                </h3>
                <ul className="space-y-4">
                  {footerContent.navigation.contact.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className={`${designConfig.typography.body.sm} ${designConfig.colors.text.secondary} hover:text-white underline transition-colors`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className={`border-t ${designConfig.colors.border.light} my-12`} />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className={`${designConfig.typography.body.base} ${designConfig.colors.text.primary}`}>
                {footerContent.stayConnected}
              </span>
              <div className="flex gap-3">
                {footerContent.social.map((social) => {
                  const Icon = socialIcons[social.icon as keyof typeof socialIcons];
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      className={`${designConfig.colors.text.primary} hover:opacity-70 transition-opacity`}
                      aria-label={social.name}
                    >
                      <Icon size={22} />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className={`flex items-center gap-2 ${designConfig.typography.body.base} ${designConfig.colors.text.primary} hover:opacity-70 transition-opacity`}
            >
              {footerContent.backToTop}
              <ArrowUp size={20} className="rotate-0" />
            </button>

            {/* Apply Button */}
            <Button 
              className={`${designConfig.colors.accent.primary} hover:opacity-90 hover:scale-105 px-8 py-4 rounded-[5px] text-[15px] font-medium ${designConfig.colors.text.primary} transition-all`}
            >
              {footerContent.cta.label} <span className="ml-1">→</span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

