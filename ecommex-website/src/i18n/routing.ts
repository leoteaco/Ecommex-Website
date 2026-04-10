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
    '/services/almacenamiento': {
      en: '/services/warehousing',
      es: '/servicios/almacenamiento',
    },
    '/services/importacion': {
      en: '/services/import',
      es: '/servicios/importacion',
    },
    '/services/fulfillment': {
      en: '/services/fulfillment',
      es: '/servicios/fulfillment',
    },
    '/services/envios': {
      en: '/services/shipping',
      es: '/servicios/envios',
    },
    '/services/devoluciones': {
      en: '/services/returns',
      es: '/servicios/devoluciones',
    },
    '/services/tecnologia': {
      en: '/services/technology',
      es: '/servicios/tecnologia',
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
