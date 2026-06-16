"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "./Reveal";
import { content } from "@/content";

const skills = content.skills;

// edges between nearby nodes for the "network"
const edges = [
  [0, 1], [0, 2], [0, 6], [0, 9], [1, 3], [1, 7], [3, 5], [5, 9],
  [2, 6], [4, 8], [8, 0], [9, 3], [4, 5],
];

export default function Skills() {
  const [hover, setHover] = useState(null);
  const box = useRef(null);

  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-32 md:px-12">
      <SectionLabel>Capabilities</SectionLabel>
      <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
        A living <span className="text-gradient">ecosystem</span> of craft.
      </h2>
      <p className="mt-4 max-w-md text-white/50">
        Hover a node to surface its role. Everything connects — that's how good
        products get built.
      </p>

      <div
        ref={box}
        className="relative mt-14 h-[460px] w-full overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-b from-white/[0.03] to-transparent md:h-[520px]"
      >
        {/* connection lines */}
        <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
          {edges.map(([a, b], i) => {
            const A = skills[a],
              B = skills[b];
            const lit = hover === a || hover === b;
            return (
              <line
                key={i}
                x1={`${A.x}%`}
                y1={`${A.y}%`}
                x2={`${B.x}%`}
                y2={`${B.y}%`}
                stroke={lit ? "#c084fc" : "#ffffff"}
                strokeOpacity={lit ? 0.6 : 0.08}
                strokeWidth={lit ? 1.5 : 1}
                style={{ transition: "all .3s" }}
              />
            );
          })}
        </svg>

        {/* spheres */}
        {skills.map((s, i) => {
          const size = 60 + s.r * 60;
          const active = hover === i;
          return (
            <motion.button
              key={i}
              data-magnetic
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              className="interactive absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full text-center"
              style={{
                left: `${s.x}%`,
                top: `${s.y}%`,
                width: size,
                height: size,
              }}
              animate={{ y: [0, i % 2 ? -10 : 10, 0] }}
              transition={{
                duration: 4 + (i % 4),
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span
                className="absolute inset-0 rounded-full border transition-all"
                style={{
                  background: active
                    ? "radial-gradient(circle at 35% 30%, rgba(192,132,252,0.45), rgba(139,92,246,0.15))"
                    : "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
                  borderColor: active
                    ? "rgba(192,132,252,0.8)"
                    : "rgba(255,255,255,0.12)",
                  boxShadow: active ? "0 0 40px rgba(168,85,247,0.5)" : "none",
                }}
              />
              <span className="relative z-10 text-[13px] font-semibold leading-tight">
                {s.name}
              </span>
              <span
                className="relative z-10 mt-0.5 text-[10px] uppercase tracking-wide text-purple-glow transition-opacity"
                style={{ opacity: active ? 1 : 0 }}
              >
                {s.level}
              </span>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
