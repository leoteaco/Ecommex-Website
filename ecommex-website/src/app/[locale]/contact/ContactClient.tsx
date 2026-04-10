'use client';

import { useTranslations } from 'next-intl';
import { HeroSection } from '@/components/HeroSection';
import { ContactForm } from '@/components/ContactForm';
import { SectionWrapper } from '@/components/SectionWrapper';

export function ContactClient() {
  const t = useTranslations('contact');

  return (
    <>
      <HeroSection
        headline={t('hero.headline')}
        subtext={t('hero.subtext')}
      />

      <SectionWrapper>
        <ContactForm />
      </SectionWrapper>
    </>
  );
}
