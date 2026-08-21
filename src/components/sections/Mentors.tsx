import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, ArrowUpRight, Sparkles } from "lucide-react";
import { mentors as staticMentors } from "@/data";
import { usePublicMentors } from "@/services/usePublicContent";
import { resolveBackendMediaUrl } from "@/lib/media";

export function Mentors() {
  const { data: mentors } = usePublicMentors(staticMentors);

  return (
    <section id="mentors" className="relative isolate overflow-hidden bg-[#FAF7F2] py-16 md:py-24">
      {/* Background Subtle Texture */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#F3E5D8_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />
      
      <div className="site-container-wide relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#EA580C] shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#EA580C]" />
            Advisory Council
          </div>
          
          <h2
            className="text-balance font-display font-black leading-[1.08] tracking-tight text-3xl sm:text-4xl md:text-5xl text-slate-900"
          >
            Guiding the Next{" "}
            <span className="bg-gradient-to-r from-[#EA580C] to-[#FF7A00] bg-clip-text text-transparent">
              Generation of Innovators
            </span>
          </h2>
          
          <p className="mt-4 text-balance text-base leading-relaxed md:text-lg text-slate-600">
            Industry veterans, growth architects, and seasoned operators committed to mentoring founders and accelerating category-defining startups.
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {(mentors ?? staticMentors).map((mentor: any, index: number) => (
            <MentorCard key={mentor.name || index} mentor={mentor} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MentorCard({
  mentor,
  index,
}: {
  mentor: any;
  index: number;
}) {
  const [imgError, setImgError] = useState(false);
  const imageUrl = resolveBackendMediaUrl(mentor.image);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-300 hover:shadow-[0_20px_40px_-12px_rgba(234,88,12,0.12)]"
    >
      <div>
        {/* Portrait Media Frame */}
        <div className="relative aspect-[4/3.8] w-full overflow-hidden rounded-2xl border border-orange-100/60 bg-gradient-to-b from-[#FFF7F2] via-[#FAF1E8] to-[#F5ECE2] flex items-end justify-center pt-3">
          {imageUrl && !imgError ? (
            <img
              src={imageUrl}
              alt={mentor.name}
              loading="eager"
              decoding="async"
              onError={() => setImgError(true)}
              className="h-[94%] w-auto max-w-[90%] object-contain object-bottom transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_8px_16px_rgba(0,0,0,0.08)]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center font-display text-4xl font-extrabold text-[#EA580C]/30">
              {mentor.name?.charAt(0) || "M"}
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="mt-4">
          <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-slate-900 leading-snug transition-colors group-hover:text-[#EA580C]">
            {mentor.name}
          </h3>

          <p className="mt-1 text-sm font-medium text-slate-600 leading-relaxed">
            {mentor.title}
          </p>
        </div>
      </div>

      {/* Card Action */}
      {mentor.linkedIn && (
        <div className="mt-5 pt-3.5 border-t border-slate-100">
          <a
            href={mentor.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-50 border border-slate-200/80 px-3 py-2.5 text-xs font-bold text-slate-700 transition-all duration-300 group-hover:bg-[#0A66C2] group-hover:border-[#0A66C2] group-hover:text-white group-hover:shadow-md"
          >
            <Linkedin className="h-3.5 w-3.5 fill-current" />
            <span>Connect on LinkedIn</span>
            <ArrowUpRight className="h-3.5 w-3.5 opacity-70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
          </a>
        </div>
      )}
    </motion.div>
  );
}
