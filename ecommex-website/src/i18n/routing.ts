import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'es'] as const,
  defaultLocale: 'en',
  localePrefix: 'always',
  pathnames: {
    '/': '/',
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
    '/industries': {
      en: '/industries',
      es: '/industrias',
    },
    '/industries/supplements': {
      en: '/industries/supplements',
      es: '/industrias/suplementos',
    },
    '/industries/fashion': {
      en: '/industries/fashion',
      es: '/industrias/moda',
    },
    '/industries/automotive': {
      en: '/industries/automotive',
      es: '/industrias/automotriz',
    },
    '/industries/medical': {
      en: '/industries/medical',
      es: '/industrias/equipo-medico',
    },
    '/industries/appliances': {
      en: '/industries/appliances',
      es: '/industrias/electrodomesticos',
    },
    '/industries/beauty': {
      en: '/industries/beauty',
      es: '/industrias/belleza',
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
