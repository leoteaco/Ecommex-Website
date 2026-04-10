import { setRequestLocale } from 'next-intl/server';
import { AlmacenamientoClient } from './AlmacenamientoClient';

export default async function AlmacenamientoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AlmacenamientoClient />;
}
