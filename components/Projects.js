"use client";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionLabel } from "./Reveal";
import { content } from "@/content";

const projects = content.projects;

function Card({ p, onOpen }) {
  const ref = useRef(null);
  const [t, setT] = useState({ rx: 0, ry: 0 });
  const move = (e) => {
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setT({ rx: -py * 8, ry: px * 10 });
    ref.current.style.setProperty("--mx", `${(px + 0.5) * 100}%`);
    ref.current.style.setProperty("--my", `${(py + 0.5) * 100}%`);
  };
  return (
    <motion.button
      ref={ref}
      onMouseMove={move}
      onMouseEnter={() => window.dispatchEvent(new Event("project-hover"))}
      onMouseLeave={() => setT({ rx: 0, ry: 0 })}
      onClick={() => onOpen(p)}
      className="interactive group relative block w-full overflow-hidden rounded-3xl border border-white/8 p-8 text-left"
      style={{
        transform: `perspective(900px) rotateX(${t.rx}deg) rotateY(${t.ry}deg)`,
        transformStyle: "preserve-3d",
        transition: "transform .2s ease-out",
        background:
          "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), rgba(168,85,247,0.12), transparent 40%), rgba(255,255,255,0.025)",
      }}
    >
      <div
        className="mb-6 flex h-40 items-center justify-center rounded-2xl text-6xl"
        style={{ background: p.accent }}
      >
        <span className="drop-shadow-lg">{p.emoji}</span>
      </div>
      <div className="flex items-center justify-between text-xs uppercase tracking-wider text-white/45">
        <span>{p.tag}</span>
        <span>{p.year}</span>
      </div>
      <h3 className="mt-2 font-display text-3xl font-bold">{p.title}</h3>
      <p className="mt-3 leading-relaxed text-white/55">{p.blurb}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-purple-glow opacity-0 transition-opacity group-hover:opacity-100">
        View case study →
      </span>
    </motion.button>
  );
}

export default function Projects() {
  const [open, setOpen] = useState(null);
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-6 py-32 md:px-12">
      <SectionLabel>Selected Work</SectionLabel>
      <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
        Each project, a <span className="text-gradient">product launch.</span>
      </h2>

      <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-2">
        {projects.map((p) => (
          <Card key={p.title} p={p} onOpen={setOpen} />
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-start justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-md md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 60, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.97 }}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
              className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-charcoal"
            >
              <div
                className="flex h-56 items-center justify-center text-7xl"
                style={{ background: open.accent }}
              >
                {open.emoji}
              </div>
              <button
                onClick={() => setOpen(null)}
                className="interactive absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-black/40 text-lg backdrop-blur"
              >
                ✕
              </button>
              <div className="p-8 md:p-12">
                <div className="text-xs uppercase tracking-[0.25em] text-warm">
                  {open.tag} · {open.year}
                </div>
                <h3 className="mt-2 font-display text-4xl font-bold">
                  {open.title}
                </h3>
                {open.role && (
                  <span className="mt-3 inline-flex items-center gap-2 rounded-full border border-purple/30 bg-purple/10 px-4 py-1.5 text-sm font-medium text-purple-glow">
                    <span>◷</span> My Role: {open.role}
                  </span>
                )}

                {[
                  ["The Challenge", open.challenge],
                  ["The Process", open.process],
                  ["The Solution", open.solution],
                ].map(([h, b]) => (
                  <div key={h} className="mt-7">
                    <h4 className="text-sm uppercase tracking-wider text-purple-glow">
                      {h}
                    </h4>
                    <p className="mt-2 leading-relaxed text-white/65">{b}</p>
                  </div>
                ))}

                {open.did && (
                  <div className="mt-8 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6">
                    <h4 className="text-sm uppercase tracking-wider text-warm">
                      What I Did
                    </h4>
                    <ul className="mt-4 space-y-3">
                      {open.did.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-3 text-[15px] leading-relaxed text-white/80"
                        >
                          <span className="mt-1 text-purple-glow">▹</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-7">
                  <h4 className="text-sm uppercase tracking-wider text-purple-glow">
                    Results
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {open.results.map((r) => (
                      <span
                        key={r}
                        className="glass rounded-full px-4 py-2 text-sm"
                      >
                        ✦ {r}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-7">
                  <h4 className="text-sm uppercase tracking-wider text-purple-glow">
                    Built With
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {open.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/70"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
