import { usePublicDistinguishedVisitors } from "@/services/usePublicContent";
import { resolveLegacyAsset } from "@/lib/assets";

export function DistinguishedVisitors() {
  const visitorsFallback = [
    {
      name: "B. V. R. Mohan Reddy",
      role: "Founder Chairman",
      org: "Cyient",
      image: "https://dtfhihp4ovn79.cloudfront.net/visitors/bvr+mohan+reddy.jpeg",
    },
    {
      name: "Mats Viberg",
      role: "Vice Chancellor",
      org: "Blekinge Institute of Technology",
      image: "https://dtfhihp4ovn79.cloudfront.net/visitors/mats+viberg.jpeg",
    },
    {
      name: "Malcolm Byrne",
      role: "Senator",
      org: "Senate of Ireland",
      image: "https://dtfhihp4ovn79.cloudfront.net/visitors/malcolm+Byrne.jpg",
    },
    {
      name: "Dr Lawrence Jones",
      role: "Programme Director",
      org: "Wageningen University",
      image: "https://dtfhihp4ovn79.cloudfront.net/visitors/dr+lawrence+jones.jpeg",
    },
    {
      name: "N. R. Narayana Murthy",
      role: "Founder & Former CEO",
      org: "Infosys",
      image: "https://dtfhihp4ovn79.cloudfront.net/visitors/naryana+murthy.png",
    },
    {
      name: "Rishi Mehta",
      role: "Global Leader",
      org: "Tech & Innovation",
      image: "https://dtfhihp4ovn79.cloudfront.net/visitors/rishi+mehta.jpg",
    },
    {
      name: "Carmelo Rosa",
      role: "Director",
      org: "US FDA",
      image: "https://dtfhihp4ovn79.cloudfront.net/visitors/carmelo+rosa.jpg",
    },
  ];

  const { data: visitors } = usePublicDistinguishedVisitors(visitorsFallback);
  const safeVisitors = Array.isArray(visitors) && visitors.length > 0 ? visitors : visitorsFallback;
  const loop = [...safeVisitors, ...safeVisitors];

  return (
    <section
      data-animate
      id="distinguished-visitors"
      className="relative isolate overflow-hidden py-10 text-foreground md:py-14"
    >
      <div className="site-container-wide text-center">
        {/* Eyebrow */}
        <div className="mb-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#F59E42]">
          <span className="h-px w-8 bg-[#F59E42]" />
          OUR DISTINGUISHED VISITORS
          <span className="h-px w-8 bg-[#F59E42]" />
        </div>

        {/* Title — two lines */}
        <h2 className="font-display text-3xl md:text-4xl lg:text-[3rem] font-bold leading-[1.1] tracking-tight">
          <span className="text-foreground">Visionaries</span>
          <br />
          <span className="text-[#F59E42]">Driving</span>{" "}
          <span className="text-foreground">Innovation</span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base text-muted-foreground">
          Leaders from policy, capital, and craft who have walked the floor, met the founders, and shared their counsel.
        </p>
      </div>

      {/* Constrained Marquee Container with custom border styling and hover pause */}
      <div className="marquee-container relative mt-10 overflow-hidden group/marquee">
        <div
          className="flex w-max gap-5 px-6 md:px-10 animate-marquee items-center group-hover/marquee:[animation-play-state:paused]"
          style={{ willChange: "transform" }}
        >
          {loop.map((v, i) => (
            <article
              key={i}
              className="group/card flex w-[clamp(240px,38vw,320px)] shrink-0 flex-col overflow-hidden rounded-[24px] border border-[color:color-mix(in_oklch,var(--primary)_8%,transparent)] bg-[color:color-mix(in_oklch,var(--card)_96%,white)] shadow-[0_18px_48px_-30px_rgba(90,30,44,0.28)] transition-all duration-500 hover:-translate-y-[6px] hover:shadow-[0_28px_60px_-24px_rgba(90,30,44,0.36)] flex-shrink-0"
              style={{ willChange: "transform" }}
            >
              <div className="flex items-start gap-4 p-5">
                <img
                  src={v.image}
                  alt={v.name}
                  loading="lazy"
                  decoding="async"
                  width={112}
                  height={112}
                  draggable={false}
                  className="h-28 w-28 shrink-0 rounded-full object-cover ring-2 ring-orange-200"
                />

                <div className="min-w-0 flex-1 pt-0.5">
                  <div className="inline-flex items-center rounded-full border border-[color:color-mix(in_oklch,var(--primary)_10%,transparent)] bg-[color-mix(in_oklch,var(--background)_90%,white)] px-2 py-0.5 text-[0.55rem] font-semibold uppercase tracking-[0.15em] text-primary/85 leading-none">
                    Visitor
                  </div>

                  <h3 className="mt-2.5 text-[1.05rem] font-bold leading-tight text-foreground truncate">
                    {v.name}
                  </h3>
                  <p className="mt-0.5 text-[0.8rem] leading-snug text-muted-foreground truncate">{v.role}</p>
                  <p className="text-[0.8rem] leading-snug text-muted-foreground/90 truncate">{v.org}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
