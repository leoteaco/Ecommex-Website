'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { IndustryCard } from '@/components/IndustryCard';
import {
  Heart,
  Sparkles,
  Shirt,
  Wrench,
  Stethoscope,
  Refrigerator,
} from 'lucide-react';

const industries = [
  { icon: Heart, href: '/industries/supplements' as const },
  { icon: Sparkles, href: '/industries/beauty' as const },
  { icon: Shirt, href: '/industries/fashion' as const },
  { icon: Wrench, href: '/industries/automotive' as const },
  { icon: Stethoscope, href: '/industries/medical' as const },
  { icon: Refrigerator, href: '/industries/appliances' as const },
];

export function IndustriesClient() {
  const t = useTranslations('industries');

  return (
    <>
      {/* Hero — variante A (hub, sin imagen). Patrón canónico:
          lg:min-h-[840px] = piso obligatorio. flex flex-col + flex-1 para que
          el espacio sobrante quede en el copy wrapper, no después de la sección. */}
      <section className="relative overflow-hidden bg-navy-dark flex flex-col min-h-[clamp(500px,70svh,800px)] lg:min-h-[840px]">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-teal/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-navy/40 rounded-full blur-3xl" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-teal/3 rounded-full blur-3xl" />
        </div>

        <div className="relative flex-1 w-full mx-auto max-w-7xl px-6 pt-24 pb-8 md:pt-32 md:pb-12 lg:pt-36 lg:pb-16 xl:pt-40 xl:pb-20 2xl:pt-44 2xl:pb-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 max-w-3xl"
          >
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
              className="mt-3 text-lg leading-relaxed text-gray-text lg:text-base xl:mt-4 xl:text-lg 2xl:text-xl max-w-2xl"
            >
              {t('hero.subtext')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-5 flex flex-wrap gap-4 xl:mt-6"
            >
              <a
                href="#industrias"
                className="inline-flex items-center rounded-lg bg-teal px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:bg-teal-dark shadow-lg shadow-teal/20"
              >
                {t('hero.cta')}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="industrias" className="bg-white scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map(({ icon: Icon, href }, i) => (
              <IndustryCard
                key={i}
                icon={<Icon className="h-6 w-6" />}
                title={t(`items.${i}.title`)}
                description={t(`items.${i}.description`)}
                pain={t(`items.${i}.pain`)}
                cta={t(`items.${i}.cta`)}
                href={href}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
