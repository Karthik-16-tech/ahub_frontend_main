import { SectionHeading } from "@/components/ui-ahub/SectionHeading";
import { usePublicMeshNetwork } from "@/services/usePublicContent";

const partnerFallback = [
  "https://dtfhihp4ovn79.cloudfront.net/Partners/rosys.jpg",
  "https://dtfhihp4ovn79.cloudfront.net/Partners/sandlogic.jpg",
  "https://dtfhihp4ovn79.cloudfront.net/Partners/avanti.png",
  "https://dtfhihp4ovn79.cloudfront.net/Partners/gait_solutions.png",
  "https://dtfhihp4ovn79.cloudfront.net/Partners/icompass.png",
  "https://dtfhihp4ovn79.cloudfront.net/Partners/digifac.png",
];

export function MeshNetwork() {
  const { data: partnerLogosData } = usePublicMeshNetwork(partnerFallback);
  const safeLogos = Array.isArray(partnerLogosData) && partnerLogosData.length > 0
    ? partnerLogosData.filter((url): url is string => typeof url === "string" && url.trim().length > 0)
    : partnerFallback;
  const row1 = safeLogos.length > 0 ? safeLogos : partnerFallback;
  const row2 = [...row1].reverse();

  const loop1 = [...row1, ...row1];
  const loop2 = [...row2, ...row2];

  return (
    <section id="mesh-network" className="relative overflow-hidden py-16 md:py-24">
      
      <div className="site-container-wide">
        <SectionHeading eyebrow="Connected" title="Mesh Network" subtitle="A thriving ecosystem of partners, institutions, and industry leaders." align="center" />

        <div className="marquee-container relative -mx-20 mt-14">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />

          <div className="group/marquee overflow-hidden py-4">
            <div className="flex w-max animate-marquee items-center">
              {loop1.map((logo, i) => (
                <div
                  key={i}
                  className="mx-4 flex h-[80px] w-[150px] shrink-0 items-center justify-center rounded-2xl bg-white px-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={logo}
                    alt="Partner Logo"
                    loading="lazy"
                    decoding="async"
                    width={130}
                    height={64}
                    className="max-h-[64px] max-w-[130px] object-contain"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="marquee-container relative -mx-20 mt-8">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />

          <div className="group/marquee overflow-hidden py-4">
            <div className="flex w-max animate-marquee-slow items-center" style={{ animationDirection: "reverse" }}>
              {loop2.map((logo, i) => (
                <div
                  key={i}
                  className="mx-4 flex h-[80px] w-[150px] shrink-0 items-center justify-center rounded-2xl bg-white px-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={logo}
                    alt="Partner Logo"
                    loading="lazy"
                    decoding="async"
                    width={130}
                    height={64}
                    className="max-h-[64px] max-w-[130px] object-contain"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
