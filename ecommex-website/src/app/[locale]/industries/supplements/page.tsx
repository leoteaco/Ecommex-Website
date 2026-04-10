import { setRequestLocale } from 'next-intl/server';
import { SupplementsClient } from './SupplementsClient';

export default async function SupplementsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <SupplementsClient />;
}
