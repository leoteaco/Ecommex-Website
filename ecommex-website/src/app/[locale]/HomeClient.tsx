'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import { HeroKpi } from '@/components/HeroKpi';
import {
  Globe,
  Warehouse,
  Package,
  Truck,
  ArrowRight,
  Shield,
  Cpu,
  Zap,
  Award,
  Headphones,
  Phone,
  Mail,
  MapPin,
  Clock,
} from 'lucide-react';
import { TrustBar } from '@/components/TrustBar';
import { SectionWrapper } from '@/components/SectionWrapper';
import { MexicoMap } from '@/components/MexicoMap';
import {
  NoLocalPresenceIcon,
  CustomsAlertIcon,
  MultiChannelHubIcon,
  LastMileTruckIcon,
} from '@/components/PainPointIcons';

const serviceImages = [
  '/services/import.jpg',
  '/services/warehouse.jpg',
  '/services/fulfillment.jpg',
  '/services/shipping.jpg',
];

export function HomeClient() {
  const t = useTranslations('home');
  const [activeTab, setActiveTab] = useState(0);

  const painPoints = [
    { icon: NoLocalPresenceIcon, key: '0' },
    { icon: CustomsAlertIcon, key: '1' },
    { icon: MultiChannelHubIcon, key: '2' },
    { icon: LastMileTruckIcon, key: '3' },
  ];

  const differentiatorIcons = [Zap, Award, Cpu, Headphones];
  const differentiatorImages = [
    '/why/adapt.jpg',
    '/why/expertise.jpg',
    '/why/tech.jpg',
    '/why/support.jpg',
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-dark flex flex-col min-h-[clamp(500px,70svh,800px)] lg:min-h-[840px]">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-teal/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-navy/40 rounded-full blur-3xl" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-teal/3 rounded-full blur-3xl" />
        </div>

        {/* Map — absolute positioned, fills right half of hero */}
        <div className="hidden lg:block absolute top-12 -bottom-4 right-0 w-[58%] xl:w-[60%] pr-4 xl:pr-6">
          <MexicoMap className="absolute inset-0 w-full h-full object-contain" style="full" />
        </div>

        <div className="relative flex-1 w-full mx-auto max-w-7xl px-6 pt-24 pb-8 md:pt-32 md:pb-12 lg:pt-36 lg:pb-16 xl:pt-40 xl:pb-20 2xl:pt-44 2xl:pb-24 lg:px-8">
          {/* Copy — left side only, map is behind on the right */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 lg:max-w-[45%] xl:max-w-[42%]"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-3 inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/5 px-4 py-1.5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
              <span className="text-xs font-medium tracking-wide text-teal uppercase">{t('hero.eyebrow')}</span>
            </motion.div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-5xl lg:leading-tight xl:text-5xl xl:leading-snug 2xl:text-6xl 2xl:leading-tight">
              {t('hero.headline')}
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-3 text-lg leading-relaxed text-gray-text lg:text-base xl:mt-4 xl:text-lg 2xl:text-xl"
            >
              {t('hero.subheadline')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-5 flex flex-wrap gap-4 xl:mt-6"
            >
              <a
                href="#cotizar"
                className="inline-flex items-center rounded-lg bg-teal px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:bg-teal-dark shadow-lg shadow-teal/20"
              >
                {t('hero.cta')}
              </a>
              <Link
                href="/services"
                className="inline-flex items-center rounded-lg border-2 border-white/20 px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:border-white/40 hover:bg-white/5"
              >
                {t('hero.ctaSecondary')}
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* KPI bar — inside hero, pinned to bottom */}
        <div className="relative z-10 border-t border-white/5 bg-navy-dark/80 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-6 py-5 lg:py-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
              {[
                { value: '50000+', display: '50K+', label: 'Órdenes mensuales' },
                { value: '99.9%', display: '99.9%', label: 'Precisión de pedidos' },
                { value: '<12h', display: '<12h', label: 'Tiempo de proceso' },
                { value: '60+', display: '60+', label: 'Clientes activos' },
                { value: '12000+', display: '12,000+', label: 'Posiciones en almacén' },
              ].map((kpi) => (
                <HeroKpi key={kpi.display} value={kpi.value} display={kpi.display} label={kpi.label} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <TrustBar
        headline={t('trustBar.headline')}
        brands={[
          'Cliente 1', 'Cliente 2', 'Cliente 3', 'Cliente 4',
          'Cliente 5', 'Cliente 6', 'Cliente 7', 'Cliente 8',
        ]}
      />

      {/* What is Ecommex — intro + animated timeline */}
      <section className="bg-navy-dark">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-display text-3xl font-bold text-white sm:text-4xl"
            >
              {t('whatIsEcommex.headline')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-lg leading-relaxed text-[#9BA5B5]"
            >
              {t('whatIsEcommex.description')}
            </motion.p>
          </div>

          {/* Timeline */}
          <div className="mt-16 relative">
            {/* Background line (subtle) — desktop horizontal */}
            <div className="hidden md:block absolute top-8 left-[8%] right-[8%] h-0.5 bg-white/10" />
            {/* Animated fill line (teal) — grows left to right on scroll */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.8, delay: 0.3, ease: 'easeInOut' }}
              className="hidden md:block absolute top-8 left-[8%] right-[8%] h-0.5 bg-teal origin-left shadow-[0_0_12px_rgba(27,188,176,0.6)]"
            />

            {/* Mobile vertical lines */}
            <div className="md:hidden absolute top-0 bottom-0 left-6 w-0.5 bg-white/10" />
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1.8, delay: 0.3, ease: 'easeInOut' }}
              className="md:hidden absolute top-0 bottom-0 left-6 w-0.5 bg-teal origin-top shadow-[0_0_12px_rgba(27,188,176,0.6)]"
            />

            <div className="grid gap-10 md:grid-cols-6 md:gap-0">
              {[
                { icon: Globe, step: '01' },
                { icon: Shield, step: '02' },
                { icon: Warehouse, step: '03' },
                { icon: Package, step: '04' },
                { icon: Truck, step: '05' },
                { icon: Zap, step: '06' },
              ].map((item, i) => {
                const Icon = item.icon;
                const stepDelay = 0.3 + (i / 5) * 1.8;
                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.4, delay: stepDelay }}
                    className="relative flex md:flex-col items-start md:items-center text-left md:text-center gap-4 md:gap-0 pl-16 md:pl-0"
                  >
                    {/* Node dot on mobile line */}
                    <div className="md:hidden absolute left-[18px] top-6 w-3 h-3 rounded-full bg-teal border-2 border-navy-dark" />

                    {/* Icon circle */}
                    <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-navy border border-teal/30 shadow-lg shadow-teal/10">
                      <Icon className="h-7 w-7 text-teal" />
                    </div>

                    <div className="md:mt-4">
                      <p className="text-[10px] font-semibold text-teal/50 uppercase tracking-wider">{t(`whatIsEcommex.steps.${i}.step`)}</p>
                      <h3 className="font-display text-sm font-bold text-white mt-1">
                        {t(`whatIsEcommex.steps.${i}.title`)}
                      </h3>
                      <p className="text-xs text-[#9BA5B5] mt-1 max-w-[180px] md:mx-auto leading-relaxed">
                        {t(`whatIsEcommex.steps.${i}.description`)}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services overview — image card grid */}
      <section className="bg-navy-dark">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-display text-3xl font-bold text-white sm:text-4xl"
            >
              {t('services.headline')}
            </motion.h2>
          </div>

          {/* Mobile: horizontal scroll snap */}
          <div className="md:hidden -mx-6 px-6 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-none">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="snap-start shrink-0 w-[72%]"
              >
                <Link
                  href="/services"
                  className="group relative block aspect-[3/5] overflow-hidden rounded-2xl border border-white/5"
                >
                  <img
                    src={serviceImages[i]}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Bottom gradient for legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-navy-dark via-navy-dark/80 to-transparent" />
                  {/* Hover teal tint */}
                  <div className="absolute inset-0 bg-teal/0 transition-colors duration-300 group-hover:bg-teal/10" />
                  {/* Title */}
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="flex items-end justify-between gap-2">
                      <h3 className="font-display text-xl font-bold text-white leading-tight">
                        {t(`services.steps.${i}.title`)}
                      </h3>
                      <ArrowRight className="h-5 w-5 text-teal shrink-0 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Desktop: 4-col grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  href="/services"
                  className="group relative block aspect-[3/5] overflow-hidden rounded-2xl border border-white/5 transition-colors hover:border-teal/30"
                >
                  <img
                    src={serviceImages[i]}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Bottom gradient for legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-navy-dark via-navy-dark/80 to-transparent" />
                  {/* Hover teal tint */}
                  <div className="absolute inset-0 bg-teal/0 transition-colors duration-300 group-hover:bg-teal/10" />
                  {/* Title */}
                  <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6">
                    <div className="flex items-end justify-between gap-2">
                      <h3 className="font-display text-xl lg:text-2xl font-bold text-white leading-tight">
                        {t(`services.steps.${i}.title`)}
                      </h3>
                      <ArrowRight className="h-5 w-5 text-teal shrink-0 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="bg-navy-dark">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-display text-3xl font-bold text-white sm:text-4xl"
            >
              {t('painPoints.headline')}
            </motion.h2>
          </div>

          {/* 4 rows stacked vertically */}
          <div className="mt-16 max-w-5xl mx-auto space-y-4">
            {painPoints.map((item, i) => {
              const Icon = item.icon;
              const number = String(i + 1).padStart(2, '0');
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group flex items-center gap-6 md:gap-10 rounded-2xl bg-navy border border-white/5 p-6 md:p-8 lg:p-10 transition-colors hover:border-teal/30"
                >
                  {/* Text column */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-teal tracking-wider mb-2">
                      {number}
                    </p>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-white leading-snug">
                      {t(`painPoints.items.${i}.title`)}
                    </h3>
                    <p className="mt-2 text-base text-[#9BA5B5] leading-relaxed">
                      {t(`painPoints.items.${i}.description`)}
                    </p>
                  </div>

                  {/* Custom SVG icon — hidden on mobile */}
                  <div className="hidden sm:flex shrink-0 items-center justify-center">
                    <Icon className="h-20 w-20 md:h-24 md:w-24 text-teal/80 transition-colors group-hover:text-teal" />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Why Ecommex — interactive tabs */}
      <section className="bg-navy-dark">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-display text-3xl font-bold text-white sm:text-4xl"
            >
              {t('differentiators.headline')}
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 lg:h-[700px]">
            {/* Tab list */}
            <div className="lg:col-span-5 flex flex-col gap-3 lg:h-full">
              {[0, 1, 2, 3].map((i) => {
                const Icon = differentiatorIcons[i];
                const isActive = activeTab === i;
                return (
                  <motion.button
                    key={i}
                    type="button"
                    onClick={() => setActiveTab(i)}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className={`group relative flex items-center gap-4 rounded-2xl border p-5 lg:p-6 text-left transition-all duration-300 lg:flex-1 ${
                      isActive
                        ? 'border-teal/40 bg-teal/10 shadow-lg shadow-teal/5'
                        : 'border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]'
                    }`}
                  >
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                        isActive ? 'bg-teal text-white' : 'bg-white/5 text-teal/70 group-hover:text-teal'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className={`text-[10px] font-semibold tracking-wider mb-1 transition-colors duration-300 ${
                          isActive ? 'text-teal' : 'text-white/40'
                        }`}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </p>
                      <h3
                        className={`font-display text-base lg:text-lg font-bold leading-tight transition-colors duration-300 ${
                          isActive ? 'text-white' : 'text-white/70 group-hover:text-white/90'
                        }`}
                      >
                        {t(`differentiators.items.${i}.title`)}
                      </h3>
                    </div>
                    {isActive && (
                      <motion.div
                        layoutId="activeTabDot"
                        className="h-2 w-2 shrink-0 rounded-full bg-teal shadow-[0_0_12px_rgba(27,188,176,0.8)]"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Content panel */}
            <div className="lg:col-span-7 lg:h-full">
              <div className="relative h-full min-h-[520px] lg:min-h-0 overflow-hidden rounded-3xl border border-white/10 bg-navy flex flex-col">
                {/* Image — top */}
                <div className="relative h-[280px] md:h-[300px] lg:h-[300px] shrink-0 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={`img-${activeTab}`}
                      src={differentiatorImages[activeTab]}
                      alt=""
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </AnimatePresence>
                  {/* Bottom blend — extended fade for more visual impact */}
                  <div className="absolute inset-x-0 bottom-0 h-[180px] bg-gradient-to-t from-navy via-navy/75 to-transparent pointer-events-none" />
                </div>

                {/* Text — bottom */}
                <div className="relative flex-1 min-h-0 overflow-hidden p-8 lg:p-10 xl:p-12 flex flex-col justify-center">
                  {/* Decorative blob */}
                  <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-teal/10 blur-3xl" />

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`text-${activeTab}`}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="relative"
                    >
                      {(() => {
                        const Icon = differentiatorIcons[activeTab];
                        return (
                          <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-teal/30 bg-teal/15">
                            <Icon className="h-6 w-6 text-teal" />
                          </div>
                        );
                      })()}

                      <h3 className="font-display text-2xl lg:text-3xl font-bold text-white leading-tight">
                        {t(`differentiators.items.${activeTab}.title`)}
                      </h3>
                      <p className="mt-4 text-base lg:text-lg text-[#9BA5B5] leading-relaxed max-w-2xl">
                        {t(`differentiators.items.${activeTab}.description`)}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — form + contact */}
      <section id="cotizar" className="bg-navy-dark scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-display text-3xl font-bold text-white sm:text-4xl"
            >
              {t('cta.headline')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-lg text-[#9BA5B5] leading-relaxed"
            >
              {t('cta.subtext')}
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Form card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7"
            >
              <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-navy p-6 sm:p-8 lg:p-10">
                {/* Decorative blob */}
                <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-teal/10 blur-3xl" />

                <form
                  className="relative space-y-5"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        {t('cta.form.name.label')}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={t('cta.form.name.placeholder')}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 transition-colors focus:border-teal/60 focus:outline-none focus:ring-1 focus:ring-teal/60"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        {t('cta.form.company.label')}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={t('cta.form.company.placeholder')}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 transition-colors focus:border-teal/60 focus:outline-none focus:ring-1 focus:ring-teal/60"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        {t('cta.form.email.label')}
                      </label>
                      <input
                        type="email"
                        required
                        placeholder={t('cta.form.email.placeholder')}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 transition-colors focus:border-teal/60 focus:outline-none focus:ring-1 focus:ring-teal/60"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        {t('cta.form.phone.label')}
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder={t('cta.form.phone.placeholder')}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 transition-colors focus:border-teal/60 focus:outline-none focus:ring-1 focus:ring-teal/60"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      {t('cta.form.message.label')}
                    </label>
                    <textarea
                      rows={4}
                      placeholder={t('cta.form.message.placeholder')}
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 transition-colors focus:border-teal/60 focus:outline-none focus:ring-1 focus:ring-teal/60"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-teal px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-teal-dark shadow-lg shadow-teal/20"
                  >
                    {t('cta.form.button')}
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-navy p-6 sm:p-8 lg:p-10 flex flex-col">
                {/* Decorative blob */}
                <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-teal/10 blur-3xl" />

                <div className="relative">
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-white">
                    {t('cta.contact.headline')}
                  </h3>
                  <p className="mt-2 text-sm text-[#9BA5B5] leading-relaxed">
                    {t('cta.contact.subtext')}
                  </p>
                </div>

                {/* WhatsApp button */}
                <a
                  href="https://wa.me/529999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mt-6 inline-flex items-center justify-center gap-3 rounded-xl bg-[#25D366] px-6 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-[#1eb558] shadow-lg shadow-[#25D366]/20"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  {t('cta.contact.whatsapp')}
                </a>

                {/* Divider */}
                <div className="relative my-6 flex items-center gap-4">
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="text-xs text-white/40 uppercase tracking-wider">
                    o
                  </span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>

                {/* Contact details */}
                <div className="relative space-y-4">
                  <a
                    href="tel:+529999999999"
                    className="group flex items-start gap-4 rounded-xl border border-transparent p-2 -m-2 transition-colors hover:border-white/10 hover:bg-white/[0.02]"
                  >
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/15 border border-teal/30">
                      <Phone className="h-4 w-4 text-teal" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-medium text-white/40 uppercase tracking-wider">
                        {t('cta.contact.phoneLabel')}
                      </div>
                      <div className="text-sm font-medium text-white group-hover:text-teal transition-colors">
                        {t('cta.contact.phoneValue')}
                      </div>
                    </div>
                  </a>

                  <a
                    href="mailto:contacto@ecommex.mx"
                    className="group flex items-start gap-4 rounded-xl border border-transparent p-2 -m-2 transition-colors hover:border-white/10 hover:bg-white/[0.02]"
                  >
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/15 border border-teal/30">
                      <Mail className="h-4 w-4 text-teal" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-medium text-white/40 uppercase tracking-wider">
                        {t('cta.contact.emailLabel')}
                      </div>
                      <div className="text-sm font-medium text-white group-hover:text-teal transition-colors break-all">
                        {t('cta.contact.emailValue')}
                      </div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-2 -m-2">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/15 border border-teal/30">
                      <MapPin className="h-4 w-4 text-teal" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-medium text-white/40 uppercase tracking-wider">
                        {t('cta.contact.locationLabel')}
                      </div>
                      <div className="text-sm font-medium text-white">
                        {t('cta.contact.locationValue')}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Response time footer */}
                <div className="relative mt-auto pt-6">
                  <div className="flex items-center gap-2 text-xs text-white/50">
                    <Clock className="h-3.5 w-3.5 text-teal" />
                    <span>{t('cta.contact.response')}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
