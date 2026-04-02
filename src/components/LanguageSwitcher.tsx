'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: 'en' | 'es') => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center rounded-lg border border-gray-200 text-sm font-medium overflow-hidden">
      <button
        onClick={() => switchLocale('en')}
        className={`px-3 py-1.5 transition-colors ${
          locale === 'en'
            ? 'bg-teal text-white'
            : 'text-gray-text hover:text-navy-dark'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => switchLocale('es')}
        className={`px-3 py-1.5 transition-colors ${
          locale === 'es'
            ? 'bg-teal text-white'
            : 'text-gray-text hover:text-navy-dark'
        }`}
      >
        ES
      </button>
    </div>
  );
}
