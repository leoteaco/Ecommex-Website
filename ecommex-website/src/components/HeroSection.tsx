'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface HeroSectionProps {
  headline: string;
  subtext?: string;
  cta?: ReactNode;
  variant?: 'dark' | 'light';
  children?: ReactNode;
}

export function HeroSection({
  headline,
  subtext,
  cta,
  variant = 'dark',
  children,
}: HeroSectionProps) {
  const isDark = variant === 'dark';

  return (
    <section
      className={`relative overflow-hidden ${
        isDark ? 'bg-navy-dark' : 'bg-gray-50'
      }`}
    >
      {isDark && (
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-navy/30 rounded-full blur-3xl" />
        </div>
      )}

      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 md:pt-40 md:pb-28 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <h1
            className={`font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl ${
              isDark ? 'text-white' : 'text-navy-dark'
            }`}
          >
            {headline}
          </h1>
          {subtext && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              className={`mt-6 text-lg leading-relaxed sm:text-xl ${
                isDark ? 'text-gray-text' : 'text-navy/70'
              }`}
            >
              {subtext}
            </motion.p>
          )}
          {cta && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
              className="mt-10 flex flex-wrap gap-4"
            >
              {cta}
            </motion.div>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
