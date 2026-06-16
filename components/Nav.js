"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MusicPlayer from "./MusicPlayer";
import { content } from "@/content";

const links = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "experiments", label: "Experiments" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-1/2 top-5 z-[100] -translate-x-1/2"
    >
      <div className="glass flex items-center gap-1 rounded-full p-1.5 pl-5">
        <a href="#top" className="mr-3 text-[15px] font-bold tracking-tight">
          {content.profile.name}<span className="text-purple-glow">.</span>
        </a>
        <div className="hidden items-center gap-0.5 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="relative rounded-full px-3.5 py-2 text-[13px] text-white/60 transition-colors hover:text-white"
            >
              {active === l.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-white/8"
                  style={{ background: "rgba(168,85,247,0.18)" }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{l.label}</span>
            </a>
          ))}
        </div>
        {content.music?.enabled && (
          <div className="ml-1.5">
            <MusicPlayer />
          </div>
        )}
      </div>
    </motion.nav>
  );
}
