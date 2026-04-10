import { setRequestLocale } from 'next-intl/server';
import { EnviosClient } from './EnviosClient';

export default async function EnviosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <EnviosClient />;
}
