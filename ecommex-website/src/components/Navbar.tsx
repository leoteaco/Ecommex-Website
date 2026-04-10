'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Warehouse,
  Globe,
  Package,
  Truck,
  RotateCcw,
  Cpu,
  Heart,
  Sparkles,
  Shirt,
  UtensilsCrossed,
  Home,
} from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';

const navLinks = [
  { href: '/services' as const, key: 'services', dropdown: true },
  { href: '/industries' as const, key: 'industries', dropdown: true },
];

const serviceItems = [
  { href: '/services/almacenamiento' as const, key: 'warehousing', icon: Warehouse },
  { href: '/services/importacion' as const, key: 'import', icon: Globe },
  { href: '/services/fulfillment' as const, key: 'fulfillment', icon: Package },
  { href: '/services/envios' as const, key: 'shipping', icon: Truck },
  { href: '/services/devoluciones' as const, key: 'returns', icon: RotateCcw },
  { href: '/services/tecnologia' as const, key: 'technology', icon: Cpu },
];

const industryItems = [
  { href: '/industries/supplements' as const, key: 'supplements', icon: Heart },
  { key: 'beauty', icon: Sparkles },
  { key: 'fashion', icon: Shirt },
  { key: 'electronics', icon: Cpu },
  { key: 'food', icon: UtensilsCrossed },
  { key: 'home', icon: Home },
] as const;

export function Navbar() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
  }, [pathname]);

  const handleDropdownEnter = (key: string) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setOpenDropdown(key);
  };
  const handleDropdownLeave = () => {
    closeTimeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const renderDropdown = (linkKey: string) => {
    const isServices = linkKey === 'services';
    const items = isServices ? serviceItems : industryItems;
    const dropdownKey = isServices ? 'servicesDropdown' : 'industriesDropdown';

    return (
      <AnimatePresence>
        {openDropdown === linkKey && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute top-full left-0 mt-3 w-[560px] rounded-2xl border border-white/10 bg-navy-dark shadow-2xl overflow-hidden"
          >
            <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-teal/10 blur-3xl" />

            <div className="relative p-5">
              <div className="text-[10px] font-semibold tracking-wider text-teal/70 uppercase mb-3 px-2">
                {t(`${dropdownKey}.label`)}
              </div>
              <div className="grid grid-cols-2 gap-1">
                {items.map((item) => {
                  const Icon = item.icon;
                  const hasHref = 'href' in item;
                  const itemActive = hasHref && pathname === item.href;

                  const content = (
                    <>
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                          itemActive
                            ? 'bg-teal border-teal text-white'
                            : 'bg-teal/10 border-teal/20 text-teal group-hover:bg-teal group-hover:text-white group-hover:border-teal'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div
                          className={`text-sm font-semibold leading-tight ${
                            itemActive ? 'text-teal' : 'text-white'
                          }`}
                        >
                          {t(`${dropdownKey}.items.${item.key}.title`)}
                        </div>
                        <div className="mt-0.5 text-xs text-white/50 leading-snug">
                          {t(`${dropdownKey}.items.${item.key}.description`)}
                        </div>
                      </div>
                    </>
                  );

                  if (hasHref) {
                    return (
                      <Link
                        key={item.key}
                        href={(item as { href: '/industries/supplements' }).href}
                        className={`group flex items-start gap-3 rounded-xl p-3 transition-colors ${
                          itemActive ? 'bg-teal/10' : 'hover:bg-white/5'
                        }`}
                      >
                        {content}
                      </Link>
                    );
                  }

                  return (
                    <div
                      key={item.key}
                      className="group flex items-start gap-3 rounded-xl p-3 opacity-60 cursor-default"
                    >
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>

            <Link
              href={isServices ? '/services' : '/industries'}
              className="relative flex items-center justify-between gap-2 border-t border-white/10 bg-white/[0.02] px-5 py-3.5 text-sm font-medium text-teal hover:bg-white/5 transition-colors"
            >
              <span>{t(`${dropdownKey}.viewAll`)}</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  const renderMobileDropdown = (linkKey: string) => {
    const isServices = linkKey === 'services';
    const items = isServices ? serviceItems : industryItems;
    const dropdownKey = isServices ? 'servicesDropdown' : 'industriesDropdown';
    const hubHref = isServices ? '/services' : '/industries';

    return (
      <div className="ml-4 mt-1 space-y-1 border-l border-gray-200 pl-3">
        <Link
          href={hubHref}
          className="block rounded-lg px-3 py-2 text-sm font-medium text-teal hover:bg-gray-50"
        >
          {t(`${dropdownKey}.viewAll`)}
        </Link>
        {items.map((item) => {
          const Icon = item.icon;
          const hasHref = 'href' in item;

          if (hasHref) {
            return (
              <Link
                key={item.key}
                href={(item as { href: '/industries/supplements' }).href}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-navy/70 hover:bg-gray-50 hover:text-navy-dark"
              >
                <Icon className="h-4 w-4 text-teal" />
                <span>{t(`${dropdownKey}.items.${item.key}.title`)}</span>
              </Link>
            );
          }

          return (
            <div
              key={item.key}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-navy/30 cursor-default"
            >
              <Icon className="h-4 w-4 text-teal/40" />
              <span>{t(`${dropdownKey}.items.${item.key}.title`)}</span>
            </div>
          );
        })}
      </div>
    );
  };

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
          {navLinks.map((link) => {
            if (link.dropdown) {
              const isActive =
                pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <div
                  key={link.key}
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(link.key)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-teal'
                        : scrolled
                        ? 'text-navy/70 hover:text-navy-dark'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {t(`links.${link.key}`)}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        openDropdown === link.key ? 'rotate-180' : ''
                      }`}
                    />
                  </Link>
                  {renderDropdown(link.key)}
                </div>
              );
            }

            return (
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
            );
          })}
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
            {navLinks.map((link) => {
              if (link.dropdown) {
                const isActive =
                  pathname === link.href || pathname.startsWith(`${link.href}/`);
                const isExpanded = mobileExpanded === link.key;
                return (
                  <div key={link.key}>
                    <button
                      type="button"
                      onClick={() => setMobileExpanded(isExpanded ? null : link.key)}
                      className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                        isActive
                          ? 'text-teal bg-teal/5'
                          : 'text-navy/70 hover:text-navy-dark hover:bg-gray-50'
                      }`}
                    >
                      <span>{t(`links.${link.key}`)}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isExpanded && renderMobileDropdown(link.key)}
                  </div>
                );
              }

              return (
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
              );
            })}
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
