"use client";
import { motion } from "framer-motion";

export default function Reveal({ children, delay = 0, y = 40, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({ children }) {
  return (
    <Reveal>
      <span className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-purple-glow">
        <span className="h-[1px] w-8 bg-purple-glow/60" />
        {children}
      </span>
    </Reveal>
  );
}
