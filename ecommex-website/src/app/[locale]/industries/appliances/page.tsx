import { setRequestLocale } from 'next-intl/server';
import { AppliancesClient } from './AppliancesClient';

export default async function AppliancesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AppliancesClient />;
}
