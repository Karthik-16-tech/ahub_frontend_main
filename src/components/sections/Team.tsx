import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Users, Sparkles, Linkedin } from "lucide-react";
import { team, teamGroupPhoto, teamPageData } from "@/data";
import { usePublicTeam, usePublicTeamPage } from "@/services/usePublicContent";
import { resolveBackendMediaUrl } from "@/lib/media";

export function Team() {
  const { data: teamData } = usePublicTeam(team);
  const { data: meta } = usePublicTeamPage(teamPageData);

  const pageMeta = meta ?? teamPageData;
  const groupPhotoUrl = resolveBackendMediaUrl(pageMeta.groupPhoto || teamGroupPhoto);

  return (
    <section id="team" className="relative isolate overflow-hidden bg-[#FAF7F2] py-16 md:py-24">
      {/* Background Texture */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#F3E5D8_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />

      <div className="site-container-wide relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#EA580C] shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#EA580C]" />
            Core Team
          </div>
          
          <h2
            className="text-balance font-display font-black leading-[1.08] tracking-tight text-3xl sm:text-4xl md:text-5xl text-slate-900"
          >
            Dedicated Operators{" "}
            <span className="bg-gradient-to-r from-[#EA580C] to-[#FF7A00] bg-clip-text text-transparent">
              Building the Ecosystem
            </span>
          </h2>
          
          <p
            className="mt-4 text-balance text-base leading-relaxed md:text-lg text-slate-600"
          >
            Passionate team members committed to fostering innovation, supporting founders, and creating a world-class startup environment.
          </p>
        </div>

        {/* Group Photo Banner */}
        <div
          className="mt-14 overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-2.5 sm:p-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
        >
          <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden rounded-2xl">
            <img
              src={groupPhotoUrl}
              alt="A-Hub Team Group Photo"
              loading="eager"
              decoding="async"
              // @ts-expect-error fetchpriority attribute
              fetchpriority="high"
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <div className="flex items-end justify-between gap-4">
                <div>
                  {pageMeta.title && (
                    <div className="text-xs font-bold uppercase tracking-widest text-[#FFB76B] mb-1">{pageMeta.title}</div>
                  )}
                  {pageMeta.subtitle && (
                    <h3 className="text-xl md:text-2xl font-black text-white">{pageMeta.subtitle}</h3>
                  )}
                  {pageMeta.description && (
                    <p className="mt-1 text-sm text-white/80 max-w-xl">{pageMeta.description}</p>
                  )}
                </div>
                <div className="hidden sm:flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 backdrop-blur-md">
                  <Users size={16} className="text-white/80" />
                  <span className="text-sm font-bold text-white">{(teamData || []).length} {pageMeta.memberCountLabel || "Team Members"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {(teamData || []).map((member: any, index: number) => (
            <TeamCard key={member.name || index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({
  member,
  index,
}: {
  member: any;
  index: number;
}) {
  const [imgError, setImgError] = useState(false);
  const imageUrl = resolveBackendMediaUrl(member.image);
  const handleLink = member.visitLink || member.linkedIn;

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
        <div className="relative aspect-[4/3.8] w-full overflow-hidden rounded-2xl border border-orange-100/60 bg-gradient-to-b from-[#FFF7F2] via-[#FAF1E8] to-[#F5ECE2] flex items-center justify-center">
          {imageUrl && !imgError ? (
            <img
              src={imageUrl}
              alt={member.name}
              loading="eager"
              decoding="async"
              onError={() => setImgError(true)}
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center font-display text-4xl font-extrabold text-[#EA580C]/30">
              {member.name?.charAt(0) || "T"}
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="mt-4">
          <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-slate-900 leading-snug transition-colors group-hover:text-[#EA580C]">
            {member.name}
          </h3>

          <p className="mt-1 text-sm font-medium text-slate-600 leading-relaxed">
            {member.title}
          </p>

          {member.tagline && (
            <p className="mt-2 text-xs text-slate-500 leading-relaxed line-clamp-2">
              {member.tagline}
            </p>
          )}
        </div>
      </div>

      {/* Card Action */}
      {handleLink && (
        <div className="mt-5 pt-3.5 border-t border-slate-100">
          <a
            href={handleLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-50 border border-slate-200/80 px-3 py-2.5 text-xs font-bold text-slate-700 transition-all duration-300 group-hover:bg-[#0A66C2] group-hover:border-[#0A66C2] group-hover:text-white group-hover:shadow-md"
          >
            <Linkedin className="h-3.5 w-3.5 fill-current" />
            <span>View Profile</span>
            <ArrowUpRight className="h-3.5 w-3.5 opacity-70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
          </a>
        </div>
      )}
    </motion.div>
  );
}
