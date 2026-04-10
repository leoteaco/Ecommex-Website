'use client';

import { useTranslations } from 'next-intl';
import { HeroSection } from '@/components/HeroSection';
import { ServiceCard } from '@/components/ServiceCard';
import { CTASection } from '@/components/CTASection';
import {
  Globe,
  Warehouse,
  Package,
  Truck,
  RotateCcw,
  Monitor,
} from 'lucide-react';

const icons = [Globe, Warehouse, Package, Truck, RotateCcw, Monitor];

export function ServicesClient() {
  const t = useTranslations('services');

  return (
    <>
      <HeroSection
        headline={t('hero.headline')}
        subtext={t('hero.subtext')}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {icons.map((Icon, i) => {
              const bullets: string[] = [];
              for (let b = 0; b < 6; b++) {
                try {
                  bullets.push(t(`items.${i}.bullets.${b}`));
                } catch {
                  break;
                }
              }
              return (
                <ServiceCard
                  key={i}
                  icon={<Icon className="h-6 w-6" />}
                  title={t(`items.${i}.title`)}
                  description={t(`items.${i}.description`)}
                  bullets={bullets}
                  index={i}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Integrations strip */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-gray-text mb-6">
            Integrated with your sales channels
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Amazon', 'Mercado Libre', 'Shopify', 'TikTok Shop', 'Liverpool', 'Walmart', 'Temu', 'WooCommerce'].map(
              (name) => (
                <div
                  key={name}
                  className="rounded-lg border border-gray-200 bg-white px-6 py-3"
                >
                  <span className="text-sm font-medium text-gray-text">{name}</span>
                </div>
              )
            )}
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
