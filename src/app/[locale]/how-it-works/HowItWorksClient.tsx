'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { HeroSection } from '@/components/HeroSection';
import { ProcessStep } from '@/components/ProcessStep';
import { FAQAccordion } from '@/components/FAQAccordion';
import { SectionWrapper } from '@/components/SectionWrapper';
import { CTASection } from '@/components/CTASection';
import { Link } from '@/i18n/navigation';

export function HowItWorksClient() {
  const t = useTranslations('howItWorks');

  const faqItems = Array.from({ length: 6 }, (_, i) => ({
    question: t(`faq.items.${i}.question`),
    answer: t(`faq.items.${i}.answer`),
  }));

  return (
    <>
      <HeroSection
        headline={t('hero.headline')}
        subtext={t('hero.subtext')}
        cta={
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-teal px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:bg-teal-dark shadow-lg shadow-teal/20"
          >
            {t('cta.button')}
          </Link>
        }
      />

      {/* Process Steps */}
      <SectionWrapper>
        <div className="max-w-2xl mx-auto">
          {Array.from({ length: 6 }, (_, i) => (
            <ProcessStep
              key={i}
              number={i + 1}
              title={t(`steps.${i}.title`)}
              description={t(`steps.${i}.description`)}
              isLast={i === 5}
              index={i}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* Timeline */}
      <section className="bg-navy-dark">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24 lg:px-8">
          <h2 className="text-center font-display text-2xl font-bold text-white sm:text-3xl mb-12">
            {t('timeline.headline')}
          </h2>
          <div className="relative">
            {/* Progress bar */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className="h-full bg-teal"
              />
            </div>
            <div className="grid gap-8 md:grid-cols-4">
              {Array.from({ length: 4 }, (_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                  className="text-center"
                >
                  <div className="relative mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal text-white font-display font-bold">
                    {t(`timeline.weeks.${i}.week`)}
                  </div>
                  <p className="text-sm text-gray-text">
                    {t(`timeline.weeks.${i}.milestone`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center font-display text-3xl font-bold text-navy-dark sm:text-4xl mb-12">
            {t('faq.headline')}
          </h2>
          <FAQAccordion items={faqItems} />
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
