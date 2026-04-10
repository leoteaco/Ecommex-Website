import { setRequestLocale } from 'next-intl/server';
import { AutomotiveClient } from './AutomotiveClient';

export default async function AutomotivePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AutomotiveClient />;
}
