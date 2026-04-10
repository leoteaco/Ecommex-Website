'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import { HeroKpi } from '@/components/HeroKpi';
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Plus,
  Truck,
  Warehouse,
  Package,
  Cpu,
} from 'lucide-react';

const relatedIcons = [Truck, Warehouse, Package, Cpu];

const solutionImages = [
  '/services/import.jpg',
  '/services/warehouse.jpg',
  '/services/fulfillment.jpg',
  '/why/tech.jpg',
];

export function SupplementsClient() {
  const t = useTranslations('industries.supplements');
  const tHome = useTranslations('home.cta');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* Hero — variante B (imagen). Replica exacta del patrón canónico.
          lg:min-h-[840px] = piso para igualar home. flex flex-col + flex-1
          distribuye espacio sobrante en el copy wrapper, KPI bar pinneado al fondo. */}
      <section
        className="relative overflow-hidden flex flex-col min-h-[clamp(500px,70svh,800px)] lg:min-h-[840px]"
        style={{
          backgroundImage: 'url(/industries/supplements/hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
        }}
      >
        {/* Navbar mask — covers image behind the fixed navbar area */}
        <div className="absolute inset-x-0 top-0 h-20 bg-navy-dark z-[2] pointer-events-none" />

        {/* Gradient overlay — single div, covers entire section */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to right, rgba(30,42,69,0.97) 40%, rgba(30,42,69,0.15) 100%)' }}
        />

        {/* Blobs decorativos — above gradient */}
        <div className="absolute inset-0 z-[1]">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-teal/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-navy/40 rounded-full blur-3xl" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-teal/3 rounded-full blur-3xl" />
        </div>

        <div className="relative flex-1 w-full mx-auto max-w-7xl px-6 pt-24 pb-8 md:pt-32 md:pb-12 lg:pt-36 lg:pb-16 xl:pt-40 xl:pb-20 2xl:pt-44 2xl:pb-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 lg:max-w-[55%] xl:max-w-[50%]"
          >
            {/* Eyebrow chip with pulsing dot */}
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

            <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-4xl lg:leading-tight xl:text-[2.75rem] xl:leading-snug 2xl:text-5xl 2xl:leading-tight">
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

        {/* KPI bar — pinned to bottom, 5 KPIs with animated counter */}
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

      {/* Pain Points — editorial 3-col with large numbers + stat line */}
      <section className="bg-navy-dark">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-8">
          <div className="max-w-3xl mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-display text-3xl font-bold text-white sm:text-4xl"
            >
              {t('painPoints.headline')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-lg text-[#9BA5B5] leading-relaxed"
            >
              {t('painPoints.subhead')}
            </motion.p>
          </div>

          <div className="grid gap-x-12 gap-y-14 md:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <span className="font-display text-5xl font-bold text-teal/30 leading-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-white leading-tight">
                  {t(`painPoints.items.${i}.title`)}
                </h3>
                <p className="mt-2 text-sm font-semibold text-teal">
                  {t(`painPoints.items.${i}.stat`)}
                </p>
                <p className="mt-3 text-base text-[#9BA5B5] leading-relaxed">
                  {t(`painPoints.items.${i}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions — alternating image/text rows (pattern from Almacenamiento whyEcommex) */}
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
              {t('solutions.headline')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-lg text-[#9BA5B5] leading-relaxed"
            >
              {t('solutions.subhead')}
            </motion.p>
          </div>

          <div className="space-y-16 lg:space-y-0">
            {[0, 1, 2, 3].map((i) => {
              const imageRight = i % 2 === 1;
              return (
                <div
                  key={i}
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center ${
                    i > 0 ? 'lg:pt-20 lg:mt-20 lg:border-t lg:border-white/5' : ''
                  }`}
                >
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
                      src={solutionImages[i]}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 via-transparent to-transparent pointer-events-none" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: imageRight ? -32 : 32 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className={imageRight ? 'lg:order-1' : ''}
                  >
                    <div className="inline-flex items-center rounded-full border border-teal/20 bg-teal/5 px-3 py-1 mb-4">
                      <span className="text-[10px] font-semibold tracking-wider text-teal uppercase">
                        {t(`solutions.items.${i}.tag`)}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight">
                      {t(`solutions.items.${i}.title`)}
                    </h3>
                    <p className="mt-4 text-base lg:text-lg text-[#9BA5B5] leading-relaxed">
                      {t(`solutions.items.${i}.description`)}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ — single-open accordion with Plus→X rotation */}
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

      {/* Related services — 2x2 grid with links */}
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

                    <div className="relative mb-5 flex items-center justify-between">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-teal/30 bg-teal/15 transition-colors group-hover:border-teal group-hover:bg-teal">
                        <Icon className="h-5 w-5 text-teal transition-colors group-hover:text-white" />
                      </div>
                      <ArrowRight className="h-5 w-5 text-teal transition-transform group-hover:translate-x-1" />
                    </div>

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

      {/* CTA — form + contact card. Anchor #cotizar. Uses home.cta.* namespace (shared). */}
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
            {/* Form card — col-7 */}
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

            {/* Contact card — col-5 */}
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
