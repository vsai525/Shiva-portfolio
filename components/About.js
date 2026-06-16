"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Reveal, { SectionLabel } from "./Reveal";
import { content } from "@/content";

const milestones = content.about.milestones;

function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const dur = 1400;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const lineH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-32 md:px-12">
      <SectionLabel>The Journey</SectionLabel>
      <Reveal>
        <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
          {content.about.heading}
        </h2>
      </Reveal>

      {/* counters */}
      <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
        {content.about.stats.map((c, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="glass rounded-2xl p-6">
              <div className="font-display text-4xl font-bold text-gradient md:text-5xl">
                {typeof c.value === "number" ? (
                  <Counter to={c.value} suffix={c.suffix} />
                ) : (
                  <span>{c.value}{c.suffix}</span>
                )}
              </div>
              <div className="mt-2 text-sm text-white/50">{c.label}</div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* timeline — single left rail, content cards */}
      <div ref={ref} className="relative mt-24">
        {/* the rail */}
        <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-[2px] bg-white/8 md:left-[calc(8rem+7px)]">
          <motion.div
            style={{ height: lineH }}
            className="w-full bg-gradient-to-b from-purple-glow via-purple to-warm"
          />
        </div>

        <div className="space-y-5">
          {milestones.map((m, i) => (
            <Reveal key={i} delay={0.04}>
              <div className="group relative grid grid-cols-[2rem_1fr] gap-x-6 md:grid-cols-[8rem_2rem_1fr]">
                {/* year (desktop only, left of rail) */}
                <div className="hidden pt-1 text-right md:block">
                  <span className="font-display text-3xl font-bold text-white/15 transition-colors duration-300 group-hover:text-purple-glow/70">
                    {m.year}
                  </span>
                </div>

                {/* node */}
                <div className="relative flex justify-start md:justify-center">
                  <span className="mt-2.5 h-4 w-4 rounded-full border-2 border-purple-glow/40 bg-ink transition-all duration-300 group-hover:border-purple-glow group-hover:shadow-[0_0_18px_#c084fc]">
                    <span className="absolute inset-0 m-auto h-1.5 w-1.5 rounded-full bg-purple-glow opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </span>
                </div>

                {/* card */}
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 transition-all duration-300 group-hover:border-purple-glow/25 group-hover:bg-white/[0.04] md:p-7">
                  <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-warm">
                    {m.phase}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-semibold leading-snug md:text-[1.7rem]">
                    {m.title}
                  </h3>
                  <p className="mt-3 max-w-2xl leading-relaxed text-white/55">
                    {m.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
