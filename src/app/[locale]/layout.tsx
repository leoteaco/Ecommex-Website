import type { Metadata } from 'next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Space_Grotesk, DM_Sans } from 'next/font/google';
import { routing } from '@/i18n/routing';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import '../globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';

  return {
    title: {
      default: isEn
        ? 'Ecommex — Your Gateway to Mexico\'s E-Commerce Market'
        : 'Ecommex — Tu Puerta de Entrada al Mercado de E-Commerce en México',
      template: isEn ? '%s | Ecommex' : '%s | Ecommex',
    },
    description: isEn
      ? 'End-to-end fulfillment for international brands entering Mexico. Import, warehouse, fulfill, deliver — we handle everything.'
      : 'Fulfillment integral para marcas que quieren conquistar el mercado mexicano. Importación, almacenaje, fulfillment, envío — nosotros nos encargamos de todo.',
    openGraph: {
      type: 'website',
      locale: isEn ? 'en_US' : 'es_MX',
      siteName: 'Ecommex',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
