"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * A mature, stylish SVG avatar — a hooded creative explorer.
 * - Waves on load
 * - Eyes/head track the cursor
 * - Expression shifts on scroll
 * - Celebrates project hovers (broadcast via window "project-hover" event)
 */
export default function Avatar() {
  const wrap = useRef(null);
  const head = useRef(null);
  const pL = useRef(null);
  const pR = useRef(null);
  const [mood, setMood] = useState("idle"); // idle | wave | happy | focus

  useEffect(() => {
    setMood("wave");
    const t = setTimeout(() => setMood("idle"), 1900);

    const move = (e) => {
      if (!wrap.current) return;
      const r = wrap.current.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height * 0.4;
      const dx = (e.clientX - cx) / r.width;
      const dy = (e.clientY - cy) / r.height;
      const clamp = (v, m) => Math.max(-m, Math.min(m, v));
      if (head.current)
        head.current.style.transform = `translate(${clamp(dx * 14, 9)}px, ${clamp(
          dy * 12,
          7
        )}px) rotate(${clamp(dx * 6, 5)}deg)`;
      const px = clamp(dx * 7, 4);
      const py = clamp(dy * 6, 3.5);
      if (pL.current) {
        pL.current.setAttribute("cx", 86 + px);
        pL.current.setAttribute("cy", 96 + py);
      }
      if (pR.current) {
        pR.current.setAttribute("cx", 118 + px);
        pR.current.setAttribute("cy", 96 + py);
      }
    };
    window.addEventListener("mousemove", move);

    let lastY = window.scrollY;
    const onScroll = () => {
      const d = window.scrollY - lastY;
      lastY = window.scrollY;
      if (Math.abs(d) > 4) {
        setMood("focus");
        clearTimeout(onScroll._t);
        onScroll._t = setTimeout(() => setMood("idle"), 500);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const onProject = () => {
      setMood("happy");
      clearTimeout(onProject._t);
      onProject._t = setTimeout(() => setMood("idle"), 900);
    };
    window.addEventListener("project-hover", onProject);

    return () => {
      clearTimeout(t);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("project-hover", onProject);
    };
  }, []);

  // mouth path per mood
  const mouth = {
    idle: "M90 122 Q104 130 118 122",
    wave: "M90 120 Q104 134 118 120",
    happy: "M88 120 Q104 138 120 120 Q104 128 88 120",
    focus: "M92 124 L116 124",
  }[mood];

  return (
    <motion.div
      ref={wrap}
      className="relative w-full max-w-[420px]"
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* ambient glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple/30 blur-[90px]" />

      <motion.svg
        viewBox="0 0 208 240"
        className="w-full drop-shadow-[0_30px_60px_rgba(139,92,246,0.35)]"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <defs>
          <linearGradient id="hood" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2a2350" />
            <stop offset="1" stopColor="#5b3aa6" />
          </linearGradient>
          <linearGradient id="grad2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#a855f7" />
            <stop offset="1" stopColor="#8b5cf6" />
          </linearGradient>
          <radialGradient id="face">
            <stop offset="0" stopColor="#26222f" />
            <stop offset="1" stopColor="#15131c" />
          </radialGradient>
        </defs>

        {/* shoulders / torso */}
        <path
          d="M44 240 Q44 168 104 168 Q164 168 164 240 Z"
          fill="url(#hood)"
        />
        <path
          d="M104 168 Q104 200 104 240"
          stroke="#7c5cff"
          strokeWidth="2"
          opacity="0.4"
          fill="none"
        />

        {/* waving arm */}
        <motion.g
          style={{ transformOrigin: "150px 190px" }}
          animate={
            mood === "wave"
              ? { rotate: [0, -22, -6, -22, 0] }
              : { rotate: 0 }
          }
          transition={{ duration: 1.6, ease: "easeInOut" }}
        >
          <path
            d="M150 192 Q182 178 184 150"
            stroke="url(#grad2)"
            strokeWidth="13"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="184" cy="146" r="9" fill="#c084fc" />
        </motion.g>

        {/* head group (tracks cursor) */}
        <g ref={head} style={{ transition: "transform 0.25s ease-out" }}>
          {/* hood */}
          <path
            d="M58 96 Q58 38 104 38 Q150 38 150 96 Q150 110 140 120 L68 120 Q58 110 58 96 Z"
            fill="url(#hood)"
          />
          {/* face */}
          <ellipse cx="104" cy="100" rx="40" ry="44" fill="url(#face)" />
          {/* hood front rim */}
          <path
            d="M64 92 Q104 64 144 92"
            stroke="#7c5cff"
            strokeWidth="3"
            fill="none"
            opacity="0.7"
          />
          {/* eyes */}
          <ellipse cx="86" cy="96" rx="9" ry="11" fill="#0b0b10" />
          <ellipse cx="118" cy="96" rx="9" ry="11" fill="#0b0b10" />
          <circle ref={pL} cx="86" cy="96" r="5.5" fill="#c084fc" />
          <circle ref={pR} cx="118" cy="96" r="5.5" fill="#c084fc" />
          <circle cx="84" cy="93" r="1.8" fill="#fff" />
          <circle cx="116" cy="93" r="1.8" fill="#fff" />
          {/* mouth */}
          <path
            d={mouth}
            stroke="#c084fc"
            strokeWidth="3.5"
            fill={mood === "happy" ? "#c084fc" : "none"}
            strokeLinecap="round"
          />
        </g>
      </motion.svg>
    </motion.div>
  );
}
