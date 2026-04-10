'use client';

import { useTranslations } from 'next-intl';
import { Mail, MapPin, Clock } from 'lucide-react';

export function ContactForm() {
  const t = useTranslations('contact');

  const volumeOptions = Array.from({ length: 6 }, (_, i) => t(`form.monthlyVolume.options.${i}`));
  const productOptions = Array.from({ length: 7 }, (_, i) => t(`form.products.options.${i}`));
  const channelOptions = Array.from({ length: 8 }, (_, i) => t(`form.channels.options.${i}`));

  return (
    <div className="grid gap-12 lg:grid-cols-5">
      {/* Form */}
      <div className="lg:col-span-3">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-navy-dark mb-1.5">
                {t('form.companyName.label')}
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-navy-dark placeholder:text-gray-text/50 transition-colors focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                placeholder={t('form.companyName.placeholder')}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-dark mb-1.5">
                {t('form.yourName.label')}
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-navy-dark placeholder:text-gray-text/50 transition-colors focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                placeholder={t('form.yourName.placeholder')}
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-navy-dark mb-1.5">
                {t('form.email.label')}
              </label>
              <input
                type="email"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-navy-dark placeholder:text-gray-text/50 transition-colors focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                placeholder={t('form.email.placeholder')}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-dark mb-1.5">
                {t('form.website.label')}
              </label>
              <input
                type="url"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-navy-dark placeholder:text-gray-text/50 transition-colors focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                placeholder={t('form.website.placeholder')}
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-navy-dark mb-1.5">
                {t('form.monthlyVolume.label')}
              </label>
              <select className="w-full rounded-lg border border-gray-200 px-4 py-3 text-navy-dark transition-colors focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal bg-white">
                <option value="">{t('form.monthlyVolume.placeholder')}</option>
                {volumeOptions.map((opt, i) => (
                  <option key={i} value={i}>{opt}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-dark mb-1.5">
                {t('form.products.label')}
              </label>
              <select className="w-full rounded-lg border border-gray-200 px-4 py-3 text-navy-dark transition-colors focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal bg-white">
                <option value="">{t('form.products.placeholder')}</option>
                {productOptions.map((opt, i) => (
                  <option key={i} value={i}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-navy-dark mb-3">
              {t('form.channels.label')}
            </label>
            <div className="flex flex-wrap gap-3">
              {channelOptions.map((channel, i) => (
                <label
                  key={i}
                  className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm cursor-pointer transition-colors hover:border-teal/50 has-[:checked]:border-teal has-[:checked]:bg-teal/5"
                >
                  <input type="checkbox" className="accent-teal" />
                  <span>{channel}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-navy-dark mb-1.5">
              {t('form.message.label')}
            </label>
            <textarea
              rows={4}
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-navy-dark placeholder:text-gray-text/50 transition-colors focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal resize-none"
              placeholder={t('form.message.placeholder')}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-teal px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-teal-dark shadow-lg shadow-teal/20 sm:w-auto"
          >
            {t('form.button')}
          </button>
        </form>
      </div>

      {/* Info */}
      <div className="lg:col-span-2">
        <div className="rounded-2xl bg-navy-dark p-8 text-white">
          <h3 className="font-display text-xl font-bold">
            {t('hero.headline')}
          </h3>
          <div className="mt-8 space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="h-5 w-5 mt-0.5 text-teal" />
              <div>
                <div className="text-sm text-gray-text">Email</div>
                <div className="font-medium">{t('info.email')}</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 mt-0.5 text-teal" />
              <div>
                <div className="text-sm text-gray-text">Location</div>
                <div className="font-medium">{t('info.location')}</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="h-5 w-5 mt-0.5 text-teal" />
              <div>
                <div className="text-sm text-gray-text">Response time</div>
                <div className="font-medium">{t('info.responseTime')}</div>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="mt-8 h-48 rounded-lg bg-navy/50 flex items-center justify-center">
            <span className="text-sm text-gray-text">
              {t('info.mapPlaceholder')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
