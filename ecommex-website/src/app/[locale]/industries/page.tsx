import { setRequestLocale } from 'next-intl/server';
import { IndustriesClient } from './IndustriesClient';

export default async function IndustriesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <IndustriesClient />;
}
