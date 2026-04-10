import { setRequestLocale } from 'next-intl/server';
import { CaseStudiesClient } from './CaseStudiesClient';

export default async function CaseStudiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CaseStudiesClient />;
}
