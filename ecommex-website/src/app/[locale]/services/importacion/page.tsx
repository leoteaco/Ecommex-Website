import { setRequestLocale } from 'next-intl/server';
import { ImportacionClient } from './ImportacionClient';

export default async function ImportacionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ImportacionClient />;
}
