import { setRequestLocale } from 'next-intl/server';
import { HowItWorksClient } from './HowItWorksClient';

export default async function HowItWorksPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <HowItWorksClient />;
}
