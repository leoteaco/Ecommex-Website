'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import { HeroKpi } from '@/components/HeroKpi';
import {
  Cpu,
  Monitor,
  Plug,
  Code,
  BarChart3,
  Bell,
  MessagesSquare,
  Settings,
  Database,
  FlaskConical,
  Rocket,
  Warehouse,
  Package,
  Truck,
  RotateCcw,
  ArrowRight,
  Plus,
  Phone,
  Mail,
  MapPin,
  Clock,
} from 'lucide-react';

const includedIcons = [Cpu, Monitor, Plug, Code, BarChart3, Bell];
const processIcons = [MessagesSquare, Settings, Database, FlaskConical, Rocket];
// Icons for the "Servicios complementarios" related cards. Order must match
// services.tecnologia.related.items in the i18n JSON.
const relatedIcons = [Warehouse, Package, Truck, RotateCcw];

// Temporary placeholder images for the "Why Ecommex" section. Swap with real photos
// (e.g. /services/tecnologia/why-0.jpg) once the photo shoot is delivered.
const whyEcommexImages = [
  '/services/import.jpg',
  '/services/fulfillment.jpg',
  '/services/warehouse.jpg',
];

export function TecnologiaClient() {
  const t = useTranslations('services.tecnologia');
  const tHome = useTranslations('home.cta');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* Hero — IDENTICAL section classes to the home hero. The lg:min-h-[820px] is critical:
          home's natural content height at 2xl is ~815px (3-line headline pushes it). For min-h
          to dominate over content (and force both heroes to render at the same height), the
          floor must exceed home's content. 820 = 815 + 5px safety margin. Without this floor,
          home renders content-driven (815) and service min-h-driven, leaving a ~42px mismatch. */}
      <section className="relative overflow-hidden bg-navy-dark flex flex-col min-h-[clamp(500px,70svh,800px)] lg:min-h-[840px]">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-teal/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-navy/40 rounded-full blur-3xl" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-teal/3 rounded-full blur-3xl" />
        </div>

        {/* Service image — absolute positioned, fills right half of hero (mirrors home's MexicoMap)
            Top offset clears the fixed navbar; bleeds to bottom of hero section.
            Fade-in with subtle scale-down to feel like the image settles into focus. */}
        <motion.div
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block absolute top-20 bottom-0 right-0 w-[58%] xl:w-[60%]"
        >
          {/* TODO: replace with /services/tecnologia/hero.jpg when photo is ready */}
          <img
            src="/services/import.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Left-edge gradient — heavy navy under the copy area, then quickly clears so the
              right ~55% of the image shows the racks at full opacity */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark from-5% via-navy-dark/30 via-35% to-transparent to-55% pointer-events-none" />
          {/* Top soft fade so the image melts into the navbar area instead of a hard line */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-navy-dark/80 to-transparent pointer-events-none" />
          {/* Bottom soft fade so the image melts into the KPI bar */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-navy-dark to-transparent pointer-events-none" />
        </motion.div>

        <div className="relative flex-1 w-full mx-auto max-w-7xl px-6 pt-24 pb-8 md:pt-32 md:pb-12 lg:pt-36 lg:pb-16 xl:pt-40 xl:pb-20 2xl:pt-44 2xl:pb-24 lg:px-8">
          {/* Copy — left side only, image is behind on the right */}
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
              <span className="text-xs font-medium tracking-wide text-teal uppercase">
                {t('hero.eyebrow')}
              </span>
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
                href="/contact"
                className="inline-flex items-center rounded-lg border-2 border-white/20 px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:border-white/40 hover:bg-white/5"
              >
                {t('hero.ctaSecondary')}
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* KPI bar — inside hero, pinned to bottom (same pattern as home).
            border-y so the bar reads as a self-contained strip even without a TrustBar below it. */}
        <div className="relative z-10 border-y border-white/5 bg-navy-dark/80 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-6 py-5 lg:py-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
              {[0, 1, 2, 3, 4].map((i) => (
                <HeroKpi
                  key={i}
                  value={t(`hero.stats.${i}.value`)}
                  display={t(`hero.stats.${i}.display`)}
                  label={t(`hero.stats.${i}.label`)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
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
              {t('whatsIncluded.headline')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-lg text-[#9BA5B5] leading-relaxed"
            >
              {t('whatsIncluded.subhead')}
            </motion.p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2, 3, 4, 5].map((i) => {
              const Icon = includedIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="group relative rounded-2xl border border-white/10 bg-navy p-6 lg:p-7 transition-all hover:border-teal/30 hover:bg-navy/80"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal/15 border border-teal/30 transition-colors group-hover:bg-teal group-hover:border-teal">
                    <Icon className="h-5 w-5 text-teal transition-colors group-hover:text-white" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white leading-tight">
                    {t(`whatsIncluded.items.${i}.title`)}
                  </h3>
                  <p className="mt-2 text-sm text-[#9BA5B5] leading-relaxed">
                    {t(`whatsIncluded.items.${i}.description`)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process — animated horizontal timeline */}
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
              {t('process.headline')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-lg text-[#9BA5B5] leading-relaxed"
            >
              {t('process.subhead')}
            </motion.p>
          </div>

          <div className="relative">
            {/* Background line — desktop horizontal */}
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-white/10" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.6, delay: 0.3, ease: 'easeInOut' }}
              className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-teal origin-left shadow-[0_0_12px_rgba(27,188,176,0.6)]"
            />

            {/* Mobile vertical line */}
            <div className="md:hidden absolute top-0 bottom-0 left-6 w-0.5 bg-white/10" />
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1.6, delay: 0.3, ease: 'easeInOut' }}
              className="md:hidden absolute top-0 bottom-0 left-6 w-0.5 bg-teal origin-top shadow-[0_0_12px_rgba(27,188,176,0.6)]"
            />

            <div className="grid gap-10 md:grid-cols-5 md:gap-4">
              {[0, 1, 2, 3, 4].map((i) => {
                const Icon = processIcons[i];
                const stepDelay = 0.3 + (i / 4) * 1.4;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.4, delay: stepDelay }}
                    className="relative flex md:flex-col items-start md:items-center text-left md:text-center gap-4 md:gap-0 pl-16 md:pl-0"
                  >
                    {/* Mobile node dot */}
                    <div className="md:hidden absolute left-[18px] top-6 w-3 h-3 rounded-full bg-teal border-2 border-navy-dark" />

                    {/* Icon circle */}
                    <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-navy border border-teal/30 shadow-lg shadow-teal/10">
                      <Icon className="h-6 w-6 text-teal" />
                    </div>

                    <div className="md:mt-5">
                      <p className="text-[10px] font-semibold text-teal/50 uppercase tracking-wider">
                        {String(i + 1).padStart(2, '0')}
                      </p>
                      <h3 className="font-display text-base font-bold text-white mt-1">
                        {t(`process.steps.${i}.title`)}
                      </h3>
                      <p className="text-xs text-[#9BA5B5] mt-1.5 max-w-[180px] md:mx-auto leading-relaxed">
                        {t(`process.steps.${i}.description`)}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Ecommex — alternating image/text rows */}
      <section className="bg-navy-dark">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-display text-3xl font-bold text-white sm:text-4xl"
            >
              {t('whyEcommex.headline')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-lg text-[#9BA5B5] leading-relaxed"
            >
              {t('whyEcommex.subhead')}
            </motion.p>
          </div>

          <div className="space-y-16 lg:space-y-0">
            {[0, 1, 2].map((i) => {
              const imageRight = i % 2 === 1;
              return (
                <div
                  key={i}
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center ${
                    i > 0 ? 'lg:pt-20 lg:mt-20 lg:border-t lg:border-white/5' : ''
                  }`}
                >
                  {/* Image — temporary stock photo, swap for real shoot later.
                      Mobile: always first (top). Desktop: alternates left/right per row. */}
                  <motion.div
                    initial={{ opacity: 0, x: imageRight ? 32 : -32 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className={`relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-navy ${
                      imageRight ? 'lg:order-2' : ''
                    }`}
                  >
                    <img
                      src={whyEcommexImages[i]}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    {/* Subtle dark vignette so the image blends with the dark theme */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 via-transparent to-transparent pointer-events-none" />
                  </motion.div>

                  {/* Text */}
                  <motion.div
                    initial={{ opacity: 0, x: imageRight ? -32 : 32 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className={imageRight ? 'lg:order-1' : ''}
                  >
                    <div className="inline-flex items-center rounded-full border border-teal/20 bg-teal/5 px-3 py-1 mb-4">
                      <span className="text-[10px] font-semibold tracking-wider text-teal uppercase">
                        {t(`whyEcommex.items.${i}.tag`)}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight">
                      {t(`whyEcommex.items.${i}.title`)}
                    </h3>
                    <p className="mt-4 text-base lg:text-lg text-[#9BA5B5] leading-relaxed">
                      {t(`whyEcommex.items.${i}.description`)}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pull quote with full-bleed image */}
      <section className="relative bg-navy-dark">
        <div className="relative h-[480px] md:h-[520px] overflow-hidden">
          {/* TODO: replace with /services/tecnologia/secondary.jpg when photo is ready */}
          <img
            src="/services/import.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Dark overlay for legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/85 to-navy-dark/50" />

          <div className="relative h-full mx-auto max-w-7xl px-6 lg:px-8 flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="text-6xl lg:text-7xl text-teal/30 font-display leading-none mb-4">
                &ldquo;
              </div>
              <p className="font-display text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight">
                {t('pullquote.text')}
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-12 w-1 bg-teal" />
                <div>
                  <div className="font-bold text-white">{t('pullquote.name')}</div>
                  <div className="text-sm text-[#9BA5B5]">
                    {t('pullquote.role')} · {t('pullquote.company')}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ — single-open accordion. Plus icon rotates 45deg to become an X when open. */}
      <section className="bg-navy-dark">
        <div className="mx-auto max-w-[760px] px-6 py-20 md:py-28 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-display text-3xl font-bold text-white sm:text-4xl"
            >
              {t('faq.headline')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-lg text-[#9BA5B5] leading-relaxed"
            >
              {t('faq.subhead')}
            </motion.p>
          </div>

          <div className="border-t border-white/10">
            {[0, 1, 2, 3, 4, 5].map((i) => {
              const isOpen = openFaq === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="border-b border-white/10"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-center justify-between gap-6 py-5 text-left lg:py-6"
                  >
                    <span className="font-display text-base font-bold text-white transition-colors group-hover:text-teal lg:text-lg">
                      {t(`faq.items.${i}.question`)}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-teal/30 bg-teal/5 text-teal transition-colors group-hover:border-teal group-hover:bg-teal group-hover:text-white"
                      aria-hidden="true"
                    >
                      <Plus className="h-4 w-4" />
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 pr-14 text-base leading-relaxed text-[#9BA5B5] lg:pb-6">
                          {t(`faq.items.${i}.answer`)}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="bg-navy-dark">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-8">
          <div className="max-w-3xl mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-display text-3xl font-bold text-white sm:text-4xl"
            >
              {t('related.headline')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-3 text-lg text-[#9BA5B5] leading-relaxed"
            >
              {t('related.subhead')}
            </motion.p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {[0, 1, 2, 3].map((i) => {
              const slug = t(`related.items.${i}.href`);
              const href = `/services/${slug}` as '/services/fulfillment';
              const Icon = relatedIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="h-full"
                >
                  <Link
                    href={href}
                    className="group relative block h-full overflow-hidden rounded-2xl border border-white/10 bg-navy p-6 transition-all hover:border-teal/30 hover:bg-navy/80 lg:p-7"
                  >
                    <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-teal/10 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />

                    {/* Top row: icon (left) + arrow (right) — both anchored to the top so cards
                        feel balanced even when descriptions are 1 vs 2 lines */}
                    <div className="relative mb-5 flex items-center justify-between">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-teal/30 bg-teal/15 transition-colors group-hover:border-teal group-hover:bg-teal">
                        <Icon className="h-5 w-5 text-teal transition-colors group-hover:text-white" />
                      </div>
                      <ArrowRight className="h-5 w-5 text-teal transition-transform group-hover:translate-x-1" />
                    </div>

                    {/* Title + description */}
                    <h3 className="relative font-display text-xl font-bold leading-tight text-white lg:text-2xl">
                      {t(`related.items.${i}.title`)}
                    </h3>
                    <p className="relative mt-2 text-sm leading-relaxed text-[#9BA5B5]">
                      {t(`related.items.${i}.description`)}
                    </p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA — form + contact (same pattern as home) */}
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
              {tHome('headline')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-lg text-[#9BA5B5] leading-relaxed"
            >
              {tHome('subtext')}
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
                <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-teal/10 blur-3xl" />

                <form className="relative space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        {tHome('form.name.label')}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={tHome('form.name.placeholder')}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 transition-colors focus:border-teal/60 focus:outline-none focus:ring-1 focus:ring-teal/60"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        {tHome('form.company.label')}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={tHome('form.company.placeholder')}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 transition-colors focus:border-teal/60 focus:outline-none focus:ring-1 focus:ring-teal/60"
                      />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        {tHome('form.email.label')}
                      </label>
                      <input
                        type="email"
                        required
                        placeholder={tHome('form.email.placeholder')}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 transition-colors focus:border-teal/60 focus:outline-none focus:ring-1 focus:ring-teal/60"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        {tHome('form.phone.label')}
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder={tHome('form.phone.placeholder')}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 transition-colors focus:border-teal/60 focus:outline-none focus:ring-1 focus:ring-teal/60"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      {tHome('form.message.label')}
                    </label>
                    <textarea
                      rows={4}
                      placeholder={tHome('form.message.placeholder')}
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 transition-colors focus:border-teal/60 focus:outline-none focus:ring-1 focus:ring-teal/60"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-teal px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-teal-dark shadow-lg shadow-teal/20"
                  >
                    {tHome('form.button')}
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
                <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-teal/10 blur-3xl" />

                <div className="relative">
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-white">
                    {tHome('contact.headline')}
                  </h3>
                  <p className="mt-2 text-sm text-[#9BA5B5] leading-relaxed">
                    {tHome('contact.subtext')}
                  </p>
                </div>

                <a
                  href="https://wa.me/529999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mt-6 inline-flex items-center justify-center gap-3 rounded-xl bg-[#25D366] px-6 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-[#1eb558] shadow-lg shadow-[#25D366]/20"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  {tHome('contact.whatsapp')}
                </a>

                <div className="relative my-6 flex items-center gap-4">
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="text-xs text-white/40 uppercase tracking-wider">o</span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>

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
                        {tHome('contact.phoneLabel')}
                      </div>
                      <div className="text-sm font-medium text-white group-hover:text-teal transition-colors">
                        {tHome('contact.phoneValue')}
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
                        {tHome('contact.emailLabel')}
                      </div>
                      <div className="text-sm font-medium text-white group-hover:text-teal transition-colors break-all">
                        {tHome('contact.emailValue')}
                      </div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-2 -m-2">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/15 border border-teal/30">
                      <MapPin className="h-4 w-4 text-teal" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-medium text-white/40 uppercase tracking-wider">
                        {tHome('contact.locationLabel')}
                      </div>
                      <div className="text-sm font-medium text-white">
                        {tHome('contact.locationValue')}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative mt-auto pt-6">
                  <div className="flex items-center gap-2 text-xs text-white/50">
                    <Clock className="h-3.5 w-3.5 text-teal" />
                    <span>{tHome('contact.response')}</span>
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
