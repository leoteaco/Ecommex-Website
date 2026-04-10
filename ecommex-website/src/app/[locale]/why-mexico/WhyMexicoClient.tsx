'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { HeroSection } from '@/components/HeroSection';
import { SectionWrapper } from '@/components/SectionWrapper';
import { CTASection } from '@/components/CTASection';
import {
  TrendingUp,
  Globe,
  Users,
  ShoppingCart,
  BarChart3,
  AlertTriangle,
  FileText,
  DollarSign,
  Truck,
  Store,
  Heart,
  CheckCircle,
} from 'lucide-react';

const statIcons = [ShoppingCart, Globe, Users, TrendingUp, BarChart3];
const challengeIcons = [AlertTriangle, DollarSign, Truck, Store, Heart];

export function WhyMexicoClient() {
  const t = useTranslations('whyMexico');

  return (
    <>
      <HeroSection
        headline={t('hero.headline')}
        subtext={t('hero.subtext')}
      >
        {/* Chart placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-8"
        >
          <div className="flex items-end gap-3 h-32">
            {[30, 45, 55, 65, 80, 95, 100].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="flex-1 rounded-t bg-teal/60"
              />
            ))}
          </div>
          <p className="mt-4 text-xs text-gray-text text-center">
            {/* TODO: Add real sources - AMVO, Statista */}
            Mexico E-Commerce Growth 2019-2026
          </p>
        </motion.div>
      </HeroSection>

      {/* Market Opportunity */}
      <SectionWrapper>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy-dark sm:text-4xl">
            {t('marketOpportunity.headline')}
          </h2>
        </div>
        {/* TODO: Add real sources - AMVO, Statista */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {statIcons.map((Icon, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 text-center transition-all hover:border-teal/30 hover:shadow-lg hover:shadow-teal/5"
            >
              <Icon className="mx-auto h-8 w-8 text-teal mb-3" />
              <div className="font-display text-2xl font-bold text-navy-dark">
                {t(`marketOpportunity.stats.${i}.value`)}
              </div>
              <p className="mt-1 text-sm text-gray-text">
                {t(`marketOpportunity.stats.${i}.label`)}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Challenges */}
      <SectionWrapper variant="gray">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy-dark sm:text-4xl">
            {t('challenges.headline')}
          </h2>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {challengeIcons.map((Icon, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-gray-200 bg-white p-6"
            >
              <Icon className="h-8 w-8 text-navy/60 mb-4" />
              <h3 className="font-display text-lg font-bold text-navy-dark">
                {t(`challenges.items.${i}.title`)}
              </h3>
              <p className="mt-2 text-sm text-gray-text leading-relaxed">
                {t(`challenges.items.${i}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Solutions */}
      <SectionWrapper>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy-dark sm:text-4xl">
            {t('solutions.headline')}
          </h2>
        </div>
        <div className="mt-16 space-y-6">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="grid gap-6 rounded-2xl border border-gray-200 bg-white p-6 md:grid-cols-2 md:p-8"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-navy/40">
                  Challenge
                </span>
                <p className="mt-2 text-navy/70">
                  {t(`solutions.items.${i}.challenge`)}
                </p>
              </div>
              <div className="border-t pt-4 md:border-t-0 md:border-l md:pl-6 md:pt-0 border-gray-200">
                <span className="text-xs font-semibold uppercase tracking-wider text-teal">
                  Our Solution
                </span>
                <p className="mt-2 flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 shrink-0 mt-0.5 text-teal" />
                  <span className="text-navy-dark font-medium">
                    {t(`solutions.items.${i}.solution`)}
                  </span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <CTASection
        headline={t('cta.headline')}
        cta={t('cta.button')}
        ctaHref="/contact"
        variant="teal"
      />
    </>
  );
}
