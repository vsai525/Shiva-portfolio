"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * Elegant lo-fi electronic soundtrack generated live with the Web Audio API.
 * No external files. Preference saved in localStorage. Audio-reactive visualizer.
 */
export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const ctx = useRef(null);
  const master = useRef(null);
  const analyser = useRef(null);
  const loopT = useRef(null);
  const bar = useRef(0);
  const canvas = useRef(null);
  const rafV = useRef(null);

  const chords = [
    [220.0, 277.18, 329.63, 415.3], // Am add
    [196.0, 246.94, 293.66, 392.0], // G
    [174.61, 220.0, 261.63, 349.23], // F
    [164.81, 207.65, 246.94, 329.63], // E-ish
  ];
  const lead = [659.25, 587.33, 523.25, 493.88, 440.0, 493.88, 523.25, 587.33];

  const setup = () => {
    if (ctx.current) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    ctx.current = new AC();
    master.current = ctx.current.createGain();
    master.current.gain.value = 0.32; // low volume by default
    analyser.current = ctx.current.createAnalyser();
    analyser.current.fftSize = 64;
    master.current.connect(analyser.current);
    analyser.current.connect(ctx.current.destination);
  };

  const note = (f, t, dur, type, gain, detune = 0) => {
    const ac = ctx.current;
    const o = ac.createOscillator(),
      g = ac.createGain(),
      fl = ac.createBiquadFilter();
    o.type = type;
    o.frequency.value = f;
    o.detune.value = detune;
    fl.type = "lowpass";
    fl.frequency.value = 1600;
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(gain, t + 0.08);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(fl);
    fl.connect(g);
    g.connect(master.current);
    o.start(t);
    o.stop(t + dur + 0.05);
  };
  const kick = (t) => {
    const ac = ctx.current;
    const o = ac.createOscillator(),
      g = ac.createGain();
    o.type = "sine";
    o.frequency.setValueAtTime(120, t);
    o.frequency.exponentialRampToValueAtTime(45, t + 0.12);
    g.gain.setValueAtTime(0.35, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
    o.connect(g);
    g.connect(master.current);
    o.start(t);
    o.stop(t + 0.22);
  };
  const hat = (t) => {
    const ac = ctx.current;
    const b = ac.createBuffer(1, ac.sampleRate * 0.05, ac.sampleRate);
    const d = b.getChannelData(0);
    for (let i = 0; i < d.length; i++)
      d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / d.length, 3);
    const s = ac.createBufferSource(),
      g = ac.createGain(),
      fl = ac.createBiquadFilter();
    s.buffer = b;
    fl.type = "highpass";
    fl.frequency.value = 8000;
    g.gain.value = 0.08;
    s.connect(fl);
    fl.connect(g);
    g.connect(master.current);
    s.start(t);
  };

  const schedule = () => {
    const ac = ctx.current;
    const bpm = 78,
      beat = 60 / bpm,
      t0 = ac.currentTime + 0.06;
    const ch = chords[bar.current % 4];
    ch.forEach((f, i) => note(f, t0, beat * 4, "sine", 0.09, (i - 1) * 4));
    ch.forEach((f) => note(f / 2, t0, beat * 4, "triangle", 0.045));
    for (let b = 0; b < 4; b++) {
      const t = t0 + b * beat;
      kick(t);
      hat(t + beat / 2);
      if (Math.random() > 0.4)
        note(
          lead[(bar.current * 4 + b) % lead.length],
          t + (Math.random() > 0.5 ? 0 : beat / 2),
          beat * 1.1,
          "triangle",
          0.06
        );
    }
    bar.current++;
    loopT.current = setTimeout(schedule, beat * 4 * 1000);
  };

  const drawViz = () => {
    const cv = canvas.current;
    if (!cv || !analyser.current) return;
    const c = cv.getContext("2d");
    const data = new Uint8Array(analyser.current.frequencyBinCount);
    analyser.current.getByteFrequencyData(data);
    c.clearRect(0, 0, cv.width, cv.height);
    const n = 5;
    for (let i = 0; i < n; i++) {
      const v = data[i * 2 + 1] / 255;
      const h = 4 + v * 18;
      c.fillStyle = "#c084fc";
      c.fillRect(i * 6, (cv.height - h) / 2, 3, h);
    }
    rafV.current = requestAnimationFrame(drawViz);
  };

  const toggle = (forceOn) => {
    setup();
    if (ctx.current.state === "suspended") ctx.current.resume();
    const next = forceOn !== undefined ? forceOn : !playing;
    setPlaying(next);
    localStorage.setItem("music", next ? "on" : "off");
    if (next) {
      bar.current = 0;
      schedule();
      drawViz();
    } else {
      clearTimeout(loopT.current);
      cancelAnimationFrame(rafV.current);
    }
  };

  // restore preference (must be user-gesture to actually start audio, so we
  // only auto-start if the browser allows; otherwise it waits for first click)
  useEffect(() => {
    const pref = localStorage.getItem("music");
    if (pref === "on") {
      const start = () => {
        toggle(true);
        window.removeEventListener("pointerdown", start);
      };
      window.addEventListener("pointerdown", start);
      return () => window.removeEventListener("pointerdown", start);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.button
      data-magnetic
      onClick={() => toggle()}
      className="glass flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-medium tracking-wide"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      aria-label="Toggle background music"
    >
      <span className="relative flex h-2 w-2">
        <span
          className={`absolute inline-flex h-full w-full rounded-full bg-purple-glow ${
            playing ? "animate-ping" : ""
          }`}
        />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-glow" />
      </span>
      {playing ? (
        <canvas ref={canvas} width="28" height="22" className="block" />
      ) : (
        <span className="text-white/70">Lo-fi</span>
      )}
    </motion.button>
  );
}
