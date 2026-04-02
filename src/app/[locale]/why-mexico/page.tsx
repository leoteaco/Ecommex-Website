import { setRequestLocale } from 'next-intl/server';
import { WhyMexicoClient } from './WhyMexicoClient';

export default async function WhyMexicoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <WhyMexicoClient />;
}
