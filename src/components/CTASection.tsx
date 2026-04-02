'use client';

import { motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';

interface CTASectionProps {
  headline: string;
  subtext?: string;
  cta: string;
  ctaHref?: string;
  ctaSecondary?: string;
  ctaSecondaryHref?: string;
  variant?: 'teal' | 'dark';
}

export function CTASection({
  headline,
  subtext,
  cta,
  ctaHref = '/contact',
  ctaSecondary,
  ctaSecondaryHref = '/resources',
  variant = 'teal',
}: CTASectionProps) {
  const isTeal = variant === 'teal';

  return (
    <section className={isTeal ? 'bg-teal' : 'bg-navy-dark'}>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto max-w-4xl px-6 py-20 md:py-28 lg:px-8 text-center"
      >
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          {headline}
        </h2>
        {subtext && (
          <p className="mt-4 text-lg text-white/80">{subtext}</p>
        )}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href={ctaHref as '/contact'}
            className={`inline-flex items-center rounded-lg px-8 py-3.5 text-base font-semibold transition-all duration-200 ${
              isTeal
                ? 'bg-white text-teal hover:bg-gray-100 shadow-lg shadow-black/10'
                : 'bg-teal text-white hover:bg-teal-dark'
            }`}
          >
            {cta}
          </Link>
          {ctaSecondary && (
            <Link
              href={ctaSecondaryHref as '/resources'}
              className="inline-flex items-center rounded-lg border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:border-white/60 hover:bg-white/10"
            >
              {ctaSecondary}
            </Link>
          )}
        </div>
      </motion.div>
    </section>
  );
}
