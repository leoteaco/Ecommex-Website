import { setRequestLocale } from 'next-intl/server';
import { MedicalClient } from './MedicalClient';

export default async function MedicalPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <MedicalClient />;
}
