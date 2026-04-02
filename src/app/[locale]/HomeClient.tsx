'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import {
  Globe,
  Warehouse,
  Package,
  Truck,
  RotateCcw,
  ArrowRight,
  Shield,
  Cpu,
  Zap,
} from 'lucide-react';
import { TrustBar } from '@/components/TrustBar';
import { SectionWrapper } from '@/components/SectionWrapper';
import { StatCounter } from '@/components/StatCounter';
import { TestimonialCard } from '@/components/TestimonialCard';
import { CTASection } from '@/components/CTASection';

const serviceIcons = [Globe, Warehouse, Package, Truck, RotateCcw];

export function HomeClient() {
  const t = useTranslations('home');

  const painPoints = [
    { icon: Shield, key: '0' },
    { icon: Truck, key: '1' },
    { icon: Package, key: '2' },
    { icon: Globe, key: '3' },
  ];

  const differentiatorIcons = [Zap, Globe, Cpu];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-dark">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-teal/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-navy/40 rounded-full blur-3xl" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-teal/3 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-36 pb-24 md:pt-44 md:pb-32 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-tight">
              {t('hero.headline')}
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 text-lg leading-relaxed text-gray-text sm:text-xl"
            >
              {t('hero.subheadline')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg bg-teal px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:bg-teal-dark shadow-lg shadow-teal/20"
              >
                {t('hero.cta')}
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center rounded-lg border-2 border-white/20 px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:border-white/40 hover:bg-white/5"
              >
                {t('hero.ctaSecondary')}
              </Link>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 text-sm text-gray-text"
          >
            {t('hero.trustLine')}
          </motion.p>
        </div>
      </section>

      {/* Trust bar */}
      <TrustBar
        headline={t('trustBar.headline')}
        brands={[
          'Amazon', 'Shopify', 'Mercado Libre', 'TikTok Shop',
          'Liverpool', 'Walmart', 'Temu', 'WooCommerce',
        ]}
      />

      {/* Pain points */}
      <SectionWrapper>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy-dark sm:text-4xl">
            {t('painPoints.headline')}
          </h2>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-teal/30 hover:shadow-lg hover:shadow-teal/5"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy-dark/5 text-navy">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-navy-dark">
                  {t(`painPoints.items.${i}.title`)}
                </h3>
                <p className="mt-2 text-sm text-gray-text leading-relaxed">
                  {t(`painPoints.items.${i}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-lg font-semibold text-teal"
        >
          {t('painPoints.transition')}
        </motion.p>
      </SectionWrapper>

      {/* Services overview */}
      <SectionWrapper variant="gray">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy-dark sm:text-4xl">
            {t('services.headline')}
          </h2>
        </div>
        <div className="mt-16 flex flex-col items-center md:flex-row md:justify-between gap-4">
          {[0, 1, 2, 3, 4].map((i) => {
            const Icon = serviceIcons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-4 md:flex-col md:text-center"
              >
                <Link
                  href="/services"
                  className="group flex flex-col items-center gap-3"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-gray-200 text-teal transition-all group-hover:bg-teal group-hover:text-white group-hover:shadow-lg group-hover:shadow-teal/20">
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="text-sm font-semibold text-navy-dark group-hover:text-teal transition-colors">
                    {t(`services.steps.${i}.title`)}
                  </span>
                </Link>
                {i < 4 && (
                  <ArrowRight className="hidden md:block h-5 w-5 text-gray-300 -mt-6" />
                )}
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Stats / KPIs */}
      {/* TODO: Replace with real KPIs */}
      <section className="bg-navy-dark">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[0, 1, 2, 3].map((i) => (
              <StatCounter
                key={i}
                value={t(`stats.items.${i}.value`)}
                label={t(`stats.items.${i}.label`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How we're different */}
      <SectionWrapper>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy-dark sm:text-4xl">
            {t('differentiators.headline')}
          </h2>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {differentiatorIcons.map((Icon, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="rounded-2xl border border-gray-200 bg-white p-8 text-center transition-all hover:border-teal/30 hover:shadow-lg hover:shadow-teal/5"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal/10 text-teal">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy-dark">
                {t(`differentiators.items.${i}.title`)}
              </h3>
              <p className="mt-3 text-gray-text leading-relaxed">
                {t(`differentiators.items.${i}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      {/* TODO: Add real testimonials */}
      <SectionWrapper variant="gray">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy-dark sm:text-4xl">
            {t('testimonials.headline')}
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {[0, 1].map((i) => (
            <TestimonialCard
              key={i}
              quote={t(`testimonials.items.${i}.quote`)}
              name={t(`testimonials.items.${i}.name`)}
              company={t(`testimonials.items.${i}.company`)}
              role={t(`testimonials.items.${i}.role`)}
              index={i}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <CTASection
        headline={t('cta.headline')}
        subtext={t('cta.subtext')}
        cta={t('cta.cta')}
        ctaHref="/contact"
        ctaSecondary={t('cta.ctaSecondary')}
        ctaSecondaryHref="/resources"
      />
    </>
  );
}
