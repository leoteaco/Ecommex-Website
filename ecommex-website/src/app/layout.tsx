import { routing } from '@/i18n/routing';
import { redirect } from 'next/navigation';

// Root layout required by Next.js App Router.
// All rendering happens in [locale]/layout.tsx — this just ensures
// bare "/" requests get redirected to the default locale.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
