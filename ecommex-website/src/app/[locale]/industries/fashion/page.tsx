import { setRequestLocale } from 'next-intl/server';
import { FashionClient } from './FashionClient';

export default async function FashionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <FashionClient />;
}
