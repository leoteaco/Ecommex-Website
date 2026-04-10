'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { HeroSection } from '@/components/HeroSection';
import { SectionWrapper } from '@/components/SectionWrapper';
import { CTASection } from '@/components/CTASection';
import { Link } from '@/i18n/navigation';
import { Check, Rocket, TrendingUp, Building2 } from 'lucide-react';

const tierIcons = [Rocket, TrendingUp, Building2];

export function PricingClient() {
  const t = useTranslations('pricing');
  const [submitted, setSubmitted] = useState(false);

  const included = Array.from({ length: 8 }, (_, i) => t(`philosophy.included.${i}`));

  return (
    <>
      <HeroSection
        headline={t('hero.headline')}
        subtext={t('hero.subtext')}
      />

      {/* Philosophy */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-navy-dark sm:text-4xl">
            {t('philosophy.headline')}
          </h2>
          <p className="mt-4 text-gray-text text-lg leading-relaxed">
            {t('philosophy.description')}
          </p>
        </div>
        <div className="mt-12 max-w-2xl mx-auto">
          <h3 className="font-display text-xl font-bold text-navy-dark text-center mb-6">
            {t('philosophy.includedHeadline')}
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {included.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <Check className="h-5 w-5 text-teal shrink-0" />
                <span className="text-navy/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Tiers */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {tierIcons.map((Icon, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`rounded-2xl border bg-white p-8 text-center transition-all hover:shadow-lg ${
                  i === 1
                    ? 'border-teal shadow-lg shadow-teal/10 ring-1 ring-teal/20'
                    : 'border-gray-200 hover:shadow-teal/5'
                }`}
              >
                {i === 1 && (
                  <span className="inline-block rounded-full bg-teal px-3 py-1 text-xs font-semibold text-white mb-4">
                    Most Popular
                  </span>
                )}
                <Icon className="mx-auto h-10 w-10 text-teal mb-4" />
                <h3 className="font-display text-2xl font-bold text-navy-dark">
                  {t(`tiers.${i}.name`)}
                </h3>
                <p className="mt-2 text-gray-text">
                  {t(`tiers.${i}.description`)}
                </p>
                <Link
                  href="/contact"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all ${
                    i === 1
                      ? 'bg-teal text-white hover:bg-teal-dark shadow-sm shadow-teal/20'
                      : 'border-2 border-navy-dark/10 text-navy-dark hover:border-teal hover:text-teal'
                  }`}
                >
                  {t(`tiers.${i}.cta`)}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator placeholder */}
      {/* TODO: Build real calculator or connect to form */}
      <SectionWrapper>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-center font-display text-3xl font-bold text-navy-dark sm:text-4xl mb-8">
            {t('calculator.headline')}
          </h2>
          {!submitted ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-4 rounded-2xl border border-gray-200 bg-white p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-navy-dark mb-1.5">
                    {t('calculator.fields.orders.label')}
                  </label>
                  <input
                    type="number"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-navy-dark focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                    placeholder={t('calculator.fields.orders.placeholder')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-dark mb-1.5">
                    {t('calculator.fields.skus.label')}
                  </label>
                  <input
                    type="number"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-navy-dark focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                    placeholder={t('calculator.fields.skus.placeholder')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-dark mb-1.5">
                    {t('calculator.fields.avgItems.label')}
                  </label>
                  <input
                    type="number"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-navy-dark focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                    placeholder={t('calculator.fields.avgItems.placeholder')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-dark mb-1.5">
                    {t('calculator.fields.avgWeight.label')}
                  </label>
                  <input
                    type="number"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-navy-dark focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                    placeholder={t('calculator.fields.avgWeight.placeholder')}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-teal px-6 py-3.5 font-semibold text-white transition-all hover:bg-teal-dark shadow-sm shadow-teal/20"
              >
                {t('calculator.button')}
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl border border-teal/30 bg-teal/5 p-8 text-center"
            >
              <p className="text-lg font-semibold text-navy-dark">
                {t('calculator.response')}
              </p>
            </motion.div>
          )}
        </div>
      </SectionWrapper>

      <CTASection
        headline={t('cta.headline')}
        cta={t('cta.button')}
        ctaHref="/contact"
      />
    </>
  );
}
