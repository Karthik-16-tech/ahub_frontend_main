import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Rocket,
  TrendingUp,
  Users,
  Building2,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui-ahub/SectionHeading";
import { usePublicIncubators } from "@/services/usePublicContent";
import { resolveLegacyAsset } from "@/lib/assets";

type StatItem = {
  value: string;
  label: string;
  Icon: LucideIcon;
};

type Incubator = {
  name: string;
  tagline: string;
  short: string;
  long: string;
  blurb: string;
  url?: string;
  image: string;
  card: string;
  stats: [StatItem, StatItem, StatItem];
};

const incubators: Incubator[] = [
  {
    name: "āHub",
    tagline: "Andhra University's Flagship Innovation Centre",
    short:
      "A state-of-the-art NIDHI iTBI facility at the Andhra University Incubation Council, built to turn research-led ideas into investable, market-ready ventures.",
    long:
      "Modern infrastructure, dedicated incubation bays, and structured mentorship connect founders with capital, corporates, and academic expertise—supporting deep tech, health, and enterprise innovation from day one.",
    blurb:
      "Workshops, demo days, and investor connects help teams move from prototype to product–market fit inside a high-trust institutional environment.",
    url: "/ecosystem/infrastructure",
    image: "https://dtfhihp4ovn79.cloudfront.net/incubators/ahub.jpg",
    card: "https://dtfhihp4ovn79.cloudfront.net/incubators/au+element+ahub.jpg",
    stats: [
      { value: "120+", label: "Startups", Icon: Rocket },
      { value: "80+", label: "Mentors", Icon: Users },
      { value: "₹50Cr+", label: "Funding", Icon: TrendingUp },
    ],
  },
  {
    name: "AU Element āHub",
    tagline: "Deep-Tech & Materials Innovation",
    short:
      "A specialised incubation hub for founders working across materials science, chemistry, and elemental technologies—bridging lab research with commercial outcomes.",
    long:
      "AU Element āHub provides domain labs, technical advisory, and industry linkages so teams can validate IP, run structured pilots, and build defensible products with academic rigour.",
    blurb:
      "Founders access expert mentors, shared R&D infrastructure, and partner networks tailored to science-led, high-impact ventures.",
    image: "https://dtfhihp4ovn79.cloudfront.net/incubators/au+element+ahub.jpg",
    card: "https://dtfhihp4ovn79.cloudfront.net/incubators/marine+ahub.jpg",
    url: "/ecosystem/infrastructure",
    stats: [
      { value: "40+", label: "Ventures", Icon: Rocket },
      { value: "25+", label: "Labs", Icon: Users },
      { value: "15+", label: "Partners", Icon: TrendingUp },
    ],
  },
  {
    name: "Marine āHub",
    tagline: "Advancing the Blue Economy",
    short:
      "Hosted at the Department of Marine Living Resources, Andhra University, Marine āHub nurtures innovation in aquaculture, marine biotechnology, and sustainable ocean industries.",
    long:
      "Entrepreneurs gain access to specialised research facilities, field expertise, and academic mentorship to develop solutions for fisheries, coastal livelihoods, and the growing blue-economy sector.",
    blurb:
      "From lab validation to market pilots, Marine āHub connects science-driven founders with the resources needed to scale responsible, impact-focused marine ventures.",
    image: "https://dtfhihp4ovn79.cloudfront.net/incubators/marine+ahub.jpg",
    card: "https://dtfhihp4ovn79.cloudfront.net/incubators/nasscom+ahub.jpg",
    url: "/ecosystem/infrastructure",
    stats: [
      { value: "30+", label: "Ventures", Icon: Rocket },
      { value: "12+", label: "Research Labs", Icon: Users },
      { value: "20+", label: "Industry Ties", Icon: TrendingUp },
    ],
  },
  {
    name: "NASSCOM āHub",
    tagline: "Digital & AI Startup Acceleration",
    short:
      "An industry-aligned incubator in partnership with NASSCOM, focused on scalable software, AI, and digital products built for India and global markets.",
    long:
      "Startups receive structured go-to-market support, enterprise connects, and technology mentorship—helping teams refine products, win pilots, and prepare for institutional funding.",
    blurb:
      "NASSCOM āHub links founders to ecosystem programs, corporate innovation tracks, and a national network of operators and investors.",
    image: "https://dtfhihp4ovn79.cloudfront.net/incubators/nasscom+ahub.jpg",
    card: "https://dtfhihp4ovn79.cloudfront.net/incubators/ahub.jpg",
    url: "/ecosystem/infrastructure",
    stats: [
      { value: "50+", label: "Tech Startups", Icon: Rocket },
      { value: "100+", label: "Mentors", Icon: Users },
      { value: "35+", label: "Enterprise Pilots", Icon: TrendingUp },
    ],
  },
  {
    name: "DigiFAC",
    tagline: "Digital Fabrication & Advanced Manufacturing Hub",
    short:
      "A state-of-the-art digital fabrication facility equipping innovators with rapid prototyping, 3D printing, CNC machining, and industrial design tools.",
    long:
      "DigiFAC empowers hardware and IoT startups to design, test, and iterate physical product prototypes with precision engineering infrastructure and technical expert support.",
    blurb:
      "Access cutting-edge digital fabrication machinery, CAD/CAM software, and prototyping specialists to accelerate product development from concept to manufacturing.",
    image: "https://ahub-image.s3.eu-north-1.amazonaws.com/incubators/didgifac.jpg",
    card: "https://ahub-image.s3.eu-north-1.amazonaws.com/incubators/didgifac.jpg",
    url: "/ecosystem/infrastructure",
    stats: [
      { value: "35+", label: "Prototypes", Icon: Rocket },
      { value: "20+", label: "Labs & Machines", Icon: Building2 },
      { value: "15+", label: "Industry Partners", Icon: TrendingUp },
    ],
  },
];

export function IncubatorsShowcase() {
  const { data: incubatorsData } = usePublicIncubators(incubators);
  const [i, setI] = useState(0);

  const c = incubatorsData[i];

  const next = () => setI((x) => (x + 1) % incubatorsData.length);
  const prev = () => setI((x) => (x - 1 + incubatorsData.length) % incubatorsData.length);

  return (
    <section className="py-10 md:py-14">
      <div className="site-container-wide">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="What's Next"
            title="Incubators"
            subtitle="Specialised incubation centres across Andhra University and industry partnerships—each built for a distinct founder journey."
          />
        </div>
      </div>

      <div className="site-container-wide mt-6">
        <div className="mx-auto rounded-[2rem] bg-white p-5 shadow-2xl">
          <div
            className="grid gap-5 rounded-[1.5rem] p-5 md:grid-cols-2"
            style={{ background: "linear-gradient(135deg, #F59E42 0%, #F97316 50%, #EA580C 100%)" }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={c.image}
                src={c.image}
                alt={c.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full rounded-[1.25rem] object-cover h-48 sm:h-56 md:h-64"
              />
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-white flex flex-col justify-center"
              >
                {/* Header with building icon on the left */}
                <div className="flex items-center gap-4.5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white shadow-md border border-white/10">
                    <Building2 className="h-9 w-9 text-[#F97316]" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl font-extrabold leading-tight tracking-tight text-white">{c.name}</h3>
                    <p className="mt-0.5 text-sm md:text-base font-semibold text-white/90">{c.tagline}</p>
                  </div>
                </div>
                {/* Orange accent line */}
                <div className="h-1.5 w-14 bg-orange-600 rounded-full mt-4 mb-2" />

                <p className="mt-4 text-[13.5px] md:text-sm leading-relaxed text-white/95">{c.short}</p>
                <p className="mt-2.5 text-[13px] md:text-[13.5px] leading-relaxed text-white/80">{c.long}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
            <div
              className="rounded-[1.5rem] p-5 flex flex-col justify-between"
              style={{ background: "linear-gradient(135deg, #F59E42 0%, #F97316 50%, #EA580C 100%)", border: "2px solid #F59E42" }}
            >
              <p className="text-sm font-medium text-white">
                {c.blurb}
              </p>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {c.stats.map((stat: StatItem, statIdx: number) => {
                  const Icon = stat.Icon ?? [Rocket, Users, TrendingUp][statIdx] ?? Rocket;
                  return (
                    <motion.div
                      key={`${c.name}-${stat.label}-${statIdx}`}
                      whileHover={{ y: -3, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white/95 backdrop-blur-md p-3.5 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.08)] border border-white/60 transition-all duration-300 hover:shadow-[0_15px_30px_-5px_rgba(249,115,22,0.25)] hover:border-orange-200"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-orange-50 border border-orange-100/60 shadow-xs transition-colors group-hover:bg-[#F97316]">
                          <Icon className="h-4 w-4 text-[#F97316] transition-colors group-hover:text-white" strokeWidth={2.2} />
                        </div>
                        <div className="h-1.5 w-1.5 rounded-full bg-orange-400/40 group-hover:bg-[#F97316] transition-colors" />
                      </div>

                      <div className="mt-3">
                        <div className="font-display text-lg sm:text-xl font-[900] tracking-tight text-slate-900 leading-tight">
                          {stat.value}
                        </div>
                        <div className="text-[11px] font-bold text-slate-600 tracking-wide mt-0.5 truncate">
                          {stat.label}
                        </div>
                      </div>

                      <div className="mt-2 h-1 w-5 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 group-hover:w-8 transition-all duration-300" />
                    </motion.div>
                  );
                })}
              </div>
              <div>
                {c.url && (c.url.startsWith("http://") || c.url.startsWith("https://")) ? (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-sm font-bold text-neutral-900 transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm"
                  >
                    Visit <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : (
                  <Link
                    to={c.url || "/ecosystem/infrastructure"}
                    className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-sm font-bold text-neutral-900 transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm"
                  >
                    Visit <ArrowUpRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </div>

            <div className="relative flex min-h-[220px] items-center justify-center px-8 py-4">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous incubator"
                className="absolute left-2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-neutral-600 shadow-md transition-all duration-200 hover:bg-white hover:text-[#F97316] hover:scale-110 active:scale-95"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="overflow-hidden rounded-[1.25rem] shadow-xl w-full max-w-[280px] aspect-[4/3] bg-neutral-100">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={c.card}
                    src={c.card}
                    alt={c.name}
                    loading="lazy"
                    decoding="async"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="h-full w-full object-cover select-none"
                    draggable={false}
                  />
                </AnimatePresence>
              </div>

              <button
                type="button"
                onClick={next}
                aria-label="Next incubator"
                className="absolute right-2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-neutral-600 shadow-md transition-all duration-200 hover:bg-white hover:text-[#F97316] hover:scale-110 active:scale-95"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
