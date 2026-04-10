import { setRequestLocale } from 'next-intl/server';
import { ResourcesClient } from './ResourcesClient';

export default async function ResourcesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ResourcesClient />;
}
