import { setRequestLocale } from 'next-intl/server';
import { FulfillmentClient } from './FulfillmentClient';

export default async function FulfillmentPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <FulfillmentClient />;
}
