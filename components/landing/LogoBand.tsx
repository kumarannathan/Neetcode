import { LogoLoop } from '@/components/ui/LogoLoop';
import { partnerLogos } from '@/lib/mock-data';

export function LogoBand() {
  return (
    <section className="container-shell pb-16 pt-4 sm:pb-20 sm:pt-6">
       <p className="mt-4 text-center text-sm font-medium text-white/50" style={{ paddingBottom: '3%', marginTop: '-4%' }}>
        Trusted by engineers at top companies
      </p>
      <div>
        <LogoLoop logos={partnerLogos} speedSeconds={26} ariaLabel="Trusted by engineers who work with leading companies" />
      </div>

    </section>
  );
}
