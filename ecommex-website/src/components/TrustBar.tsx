'use client';

interface TrustBarProps {
  headline: string;
  brands: string[];
  // TODO: When client logos are ready, pass them here and set logoMode to true
  // logos?: { name: string; src: string }[];
  // logoMode?: boolean;
}

export function TrustBar({ headline, brands }: TrustBarProps) {
  const duplicated = [...brands, ...brands];

  return (
    <section className="bg-navy-dark py-20 overflow-hidden border-y border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-[#9BA5B5] mb-12">
          {headline}
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-navy-dark to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-navy-dark to-transparent z-10" />
        <div className="flex animate-scroll-x">
          {duplicated.map((brand, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-8 flex h-16 items-center justify-center rounded-lg bg-white/[0.04] border border-white/10 backdrop-blur-sm px-10"
            >
              {/* Replace span with <Image> when logos are available */}
              <span className="text-sm font-medium text-[#9BA5B5] whitespace-nowrap">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
