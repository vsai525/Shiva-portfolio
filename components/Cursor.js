"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dot.current) {
        dot.current.style.left = e.clientX + "px";
        dot.current.style.top = e.clientY + "px";
      }
    };
    const over = (e) => {
      if (e.target.closest("a, button, [data-magnetic], .interactive")) {
        ring.current?.classList.add("hover");
      } else {
        ring.current?.classList.remove("hover");
      }
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);

    let raf;
    const loop = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.18;
      if (ring.current) {
        ring.current.style.left = ringPos.current.x + "px";
        ring.current.style.top = ringPos.current.y + "px";
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor" />
      <div ref={ring} className="cursor-ring" />
    </>
  );
}
