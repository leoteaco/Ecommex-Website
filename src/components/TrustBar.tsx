'use client';

interface TrustBarProps {
  headline: string;
  brands: string[];
}

export function TrustBar({ headline, brands }: TrustBarProps) {
  const duplicated = [...brands, ...brands];

  return (
    <section className="bg-gray-50 py-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-gray-text mb-8">
          {headline}
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10" />
        <div className="flex animate-scroll-x">
          {duplicated.map((brand, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-8 flex h-12 items-center justify-center rounded-lg bg-white border border-gray-200 px-8"
            >
              <span className="text-sm font-medium text-gray-text whitespace-nowrap">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
