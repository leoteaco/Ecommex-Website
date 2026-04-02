'use client';

import { useTranslations } from 'next-intl';
import { HeroSection } from '@/components/HeroSection';
import { BlogCard } from '@/components/BlogCard';
import { SectionWrapper } from '@/components/SectionWrapper';

export function ResourcesClient() {
  const t = useTranslations('resources');

  return (
    <>
      <HeroSection
        headline={t('hero.headline')}
        subtext={t('hero.subtext')}
      />

      {/* Featured */}
      <SectionWrapper>
        <div className="grid gap-8 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <BlogCard
              key={i}
              title={t(`featured.${i}.title`)}
              excerpt={t(`featured.${i}.excerpt`)}
              date=""
              readTime=""
              category={t(`featured.${i}.type`)}
              featured
              index={i}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* Articles grid */}
      <SectionWrapper variant="gray">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <BlogCard
              key={i}
              title={t(`articles.${i}.title`)}
              excerpt={t(`articles.${i}.excerpt`)}
              date={t(`articles.${i}.date`)}
              readTime={t(`articles.${i}.readTime`)}
              category={t(`articles.${i}.category`)}
              index={i}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* Newsletter */}
      <section className="bg-teal">
        <div className="mx-auto max-w-2xl px-6 py-16 text-center lg:px-8">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            {t('newsletter.headline')}
          </h2>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
          >
            <input
              type="email"
              placeholder={t('newsletter.placeholder')}
              className="rounded-lg border-0 px-5 py-3 text-navy-dark placeholder:text-gray-text/50 focus:outline-none focus:ring-2 focus:ring-white/50 sm:w-80"
            />
            <button
              type="submit"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-teal transition-colors hover:bg-gray-100"
            >
              {t('newsletter.button')}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
