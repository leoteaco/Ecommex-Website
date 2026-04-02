import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'es'] as const,
  defaultLocale: 'en',
  localePrefix: 'always',
  pathnames: {
    '/': '/',
    '/why-mexico': {
      en: '/why-mexico',
      es: '/por-que-mexico',
    },
    '/services': {
      en: '/services',
      es: '/servicios',
    },
    '/how-it-works': {
      en: '/how-it-works',
      es: '/como-funciona',
    },
    '/industries': {
      en: '/industries',
      es: '/industrias',
    },
    '/case-studies': {
      en: '/case-studies',
      es: '/casos-de-exito',
    },
    '/resources': {
      en: '/resources',
      es: '/recursos',
    },
    '/pricing': {
      en: '/pricing',
      es: '/precios',
    },
    '/contact': {
      en: '/contact',
      es: '/contacto',
    },
  },
});

export type AppPathnames = keyof typeof routing.pathnames;
