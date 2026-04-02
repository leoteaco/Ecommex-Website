'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { Menu, X } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';

const navLinks = [
  { href: '/why-mexico' as const, key: 'whyMexico' },
  { href: '/services' as const, key: 'services' },
  { href: '/how-it-works' as const, key: 'howItWorks' },
  { href: '/industries' as const, key: 'industries' },
  { href: '/case-studies' as const, key: 'caseStudies' },
  { href: '/resources' as const, key: 'resources' },
];

export function Navbar() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span
            className={`font-display text-2xl font-bold tracking-tight transition-colors ${
              scrolled ? 'text-navy-dark' : 'text-white'
            }`}
          >
            Ecommex
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex lg:items-center lg:gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                pathname === link.href
                  ? 'text-teal'
                  : scrolled
                  ? 'text-navy/70 hover:text-navy-dark'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {t(`links.${link.key}`)}
            </Link>
          ))}
        </div>

        {/* Desktop right */}
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <LanguageSwitcher />
          <Link
            href="/contact"
            className="rounded-lg bg-teal px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-teal-dark shadow-sm shadow-teal/20"
          >
            {t('cta')}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-navy-dark' : 'text-white'
          }`}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-teal bg-teal/5'
                    : 'text-navy/70 hover:text-navy-dark hover:bg-gray-50'
                }`}
              >
                {t(`links.${link.key}`)}
              </Link>
            ))}
            <div className="pt-4 pb-2 flex items-center justify-between border-t border-gray-100">
              <LanguageSwitcher />
              <Link
                href="/contact"
                className="rounded-lg bg-teal px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-dark"
              >
                {t('cta')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
