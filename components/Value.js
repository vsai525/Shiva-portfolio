"use client";
import { motion } from "framer-motion";
import Reveal, { SectionLabel } from "./Reveal";
import { content } from "@/content";

const v = content.value;
const services = v.services;
// split the heading so the last 3 words get the gradient highlight
const hWords = v.heading.trim().split(" ");
const headMain = hWords.slice(0, -3).join(" ");
const headHi = hWords.slice(-3).join(" ");

export default function Value() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-32 md:px-12">
      <SectionLabel>What I Bring</SectionLabel>
      <Reveal>
        <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
          {headMain}
          <br className="hidden md:block" />{" "}
          <span className="text-gradient">{headHi}</span>
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-5 max-w-xl text-lg font-light leading-relaxed text-white/55">
          {v.subheading}
        </p>
      </Reveal>

      {/* availability + resume */}
      <Reveal delay={0.15}>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <span className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-2.5 text-sm text-white/75">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {v.availabilityLine}{" "}
            <span className="font-medium text-white">{v.availabilityBold}</span>
          </span>

          <a
            href={v.resumeFile}
            download
            data-magnetic
            className="interactive group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
          >
            <span>Download Résumé</span>
            <span className="transition-transform group-hover:translate-y-0.5">↓</span>
          </a>
        </div>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={(i % 2) * 0.08}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.02] p-8 md:p-9"
            >
              {/* glow accent */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-purple/20 blur-3xl transition-opacity duration-500 group-hover:opacity-100 md:opacity-0" />

              <div className="relative flex h-full flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple to-purple-electric text-xl text-white shadow-lg shadow-purple/30">
                  {s.icon}
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold">
                  {s.title}
                </h3>
                <p className="mt-3 leading-relaxed text-white/55">{s.body}</p>

                <ul className="mt-6 space-y-2.5">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-3 text-sm text-white/70"
                    >
                      <span className="text-purple-glow">✦</span>
                      {p}
                    </li>
                  ))}
                </ul>

                {/* outcome metric — pinned to bottom */}
                <div className="mt-auto pt-6">
                  <div className="flex items-center gap-3 rounded-xl border border-purple/20 bg-purple/[0.06] px-4 py-3">
                    <span className="text-purple-glow">↗</span>
                    <span className="text-sm font-medium text-white/85">
                      {s.metric}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>

      {/* closing value statement */}
      <Reveal delay={0.1}>
        <div className="mt-12 rounded-3xl border border-purple/20 bg-gradient-to-r from-purple/[0.08] to-transparent p-8 md:p-10">
          <p className="font-display text-xl font-medium leading-relaxed text-white/85 md:text-2xl">
            {v.closingLine}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
