'use client';

import { useTranslations } from 'next-intl';
import { HeroSection } from '@/components/HeroSection';
import { IndustryCard } from '@/components/IndustryCard';
import {
  Heart,
  Sparkles,
  Shirt,
  Cpu,
  UtensilsCrossed,
  Home,
} from 'lucide-react';

const icons = [Heart, Sparkles, Shirt, Cpu, UtensilsCrossed, Home];

export function IndustriesClient() {
  const t = useTranslations('industries');

  return (
    <>
      <HeroSection
        headline={t('hero.headline')}
        subtext={t('hero.subtext')}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {icons.map((Icon, i) => (
              <IndustryCard
                key={i}
                icon={<Icon className="h-6 w-6" />}
                title={t(`items.${i}.title`)}
                description={t(`items.${i}.description`)}
                pain={t(`items.${i}.pain`)}
                cta={t(`items.${i}.cta`)}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
