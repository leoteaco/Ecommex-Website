import { setRequestLocale } from 'next-intl/server';
import { TecnologiaClient } from './TecnologiaClient';

export default async function TecnologiaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <TecnologiaClient />;
}
