'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ExternalLink } from 'lucide-react';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="font-display text-2xl font-bold tracking-tight">
              Ecommex
            </span>
            <p className="mt-1 text-sm text-teal font-medium">
              e-business logistics
            </p>
            <p className="mt-4 text-sm text-gray-text leading-relaxed">
              {t('description')}
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-gray-text transition-colors hover:bg-teal hover:text-white"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-gray-text">
              {t('columns.company.title')}
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/why-mexico" className="text-sm text-white/70 hover:text-teal transition-colors">
                  {t('columns.company.links.about')}
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-teal transition-colors">
                  {t('columns.company.links.careers')}
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/70 hover:text-teal transition-colors">
                  {t('columns.company.links.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-gray-text">
              {t('columns.services.title')}
            </h4>
            <ul className="mt-4 space-y-3">
              {['import', 'warehousing', 'fulfillment', 'shipping', 'returns'].map((key) => (
                <li key={key}>
                  <Link href="/services" className="text-sm text-white/70 hover:text-teal transition-colors">
                    {t(`columns.services.links.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-gray-text">
              {t('columns.resources.title')}
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/resources" className="text-sm text-white/70 hover:text-teal transition-colors">
                  {t('columns.resources.links.guides')}
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-sm text-white/70 hover:text-teal transition-colors">
                  {t('columns.resources.links.caseStudies')}
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-sm text-white/70 hover:text-teal transition-colors">
                  {t('columns.resources.links.blog')}
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-sm text-white/70 hover:text-teal transition-colors">
                  {t('columns.resources.links.faq')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-gray-text">
            {t('location')}
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-text">
            <span>
              &copy; {new Date().getFullYear()} {t('copyright')}
            </span>
            <a href="#" className="hover:text-teal transition-colors">
              {t('columns.legal.links.privacy')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
