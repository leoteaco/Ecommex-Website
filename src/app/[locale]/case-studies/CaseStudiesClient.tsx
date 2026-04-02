'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { HeroSection } from '@/components/HeroSection';
import { CTASection } from '@/components/CTASection';
import { Check } from 'lucide-react';

export function CaseStudiesClient() {
  const t = useTranslations('caseStudies');

  return (
    <>
      <HeroSection
        headline={t('hero.headline')}
        subtext={t('hero.subtext')}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-8">
          <div className="space-y-8">
            {[0, 1, 2].map((i) => {
              const results: string[] = [];
              for (let r = 0; r < 6; r++) {
                try {
                  results.push(t(`cases.${i}.results.${r}`));
                } catch {
                  break;
                }
              }

              return (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
                >
                  <div className="grid md:grid-cols-3">
                    {/* Image placeholder */}
                    <div className="bg-gradient-to-br from-navy-dark to-navy flex items-center justify-center min-h-[200px] md:min-h-0">
                      <span className="text-sm text-gray-text">
                        {/* TODO: Add case study images */}
                      </span>
                    </div>
                    <div className="md:col-span-2 p-8">
                      <span className="inline-block rounded-full bg-teal/10 px-3 py-1 text-xs font-medium text-teal mb-4">
                        {t(`cases.${i}.industry`)}
                      </span>
                      <h3 className="font-display text-2xl font-bold text-navy-dark">
                        {t(`cases.${i}.title`)}
                      </h3>
                      <div className="mt-6 grid gap-6 sm:grid-cols-3">
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-navy/40 mb-2">
                            Challenge
                          </h4>
                          <p className="text-sm text-gray-text leading-relaxed">
                            {t(`cases.${i}.challenge`)}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-teal mb-2">
                            Solution
                          </h4>
                          <p className="text-sm text-gray-text leading-relaxed">
                            {t(`cases.${i}.solution`)}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-navy/40 mb-2">
                            Results
                          </h4>
                          {/* TODO: Add real metrics */}
                          <ul className="space-y-1.5">
                            {results.map((result, ri) => (
                              <li key={ri} className="flex items-start gap-2 text-sm text-gray-text">
                                <Check className="h-4 w-4 mt-0.5 text-teal shrink-0" />
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        headline={t('cta.headline')}
        cta={t('cta.button')}
        ctaHref="/contact"
      />
    </>
  );
}
