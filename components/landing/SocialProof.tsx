import Image from 'next/image';
import { CompanyLogo } from '@/components/ui/CompanyLogo';
import { PixelCard } from '@/components/ui/PixelCard';
import { testimonials } from '@/lib/mock-data';

const companyTextClass: Record<string, string> = {
  Google: 'text-[#8ab4ff]',
  Microsoft: 'text-[#9fd2ff]',
  Amazon: 'text-[#ffbe6b]',
  OpenAI: 'text-[#f1f5ff]',
  Anthropic: 'text-[#e8c29f]',
  Meta: 'text-[#a8b6ff]',
  Netflix: 'text-[#ff6b76]',
};

const testimonialImages = [
  '/testimonials/amog.png',
  '/testimonials/rodrigo.png',
  '/testimonials/aiswarya.png',
];

export function SocialProof() {
  return (
    <section className="container-shell pb-20 pt-8 sm:pt-12">
      <div className="grid gap-4 xl:grid-cols-3">
        {testimonials.slice(0, 3).map((item, index) => (
          <PixelCard key={item.name} variant={index === 1 ? 'blue' : index === 2 ? 'pink' : 'default'} className="min-h-[14rem]">
            <div className="flex h-full flex-col p-5">
              <div className="flex items-start gap-3">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/10">
                    <Image
                      src={testimonialImages[index]}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{item.name}</div>
                    <div className="mt-1 flex items-center gap-2">
                      <CompanyLogo
                        name={item.company as Parameters<typeof CompanyLogo>[0]['name']}
                        className="h-3.5 w-auto opacity-90"
                      />
                      <div className={`text-sm font-medium ${companyTextClass[item.company] ?? 'text-white/60'}`}>
                        {item.company}
                      </div>
                    </div>
                  </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-white/72">{item.quote}</p>
            </div>
          </PixelCard>
        ))}
      </div>
    </section>
  );
}
