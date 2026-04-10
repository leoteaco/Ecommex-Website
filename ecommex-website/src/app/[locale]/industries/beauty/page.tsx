import { setRequestLocale } from 'next-intl/server';
import { BeautyClient } from './BeautyClient';

export default async function BeautyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <BeautyClient />;
}
