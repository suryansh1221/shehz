"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.5 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    function handleMove(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    }

    function handleOver(e: MouseEvent) {
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, [data-cursor-hover]"));
    }

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
    };
  }, [x, y]);

  if (!visible) return null;

  return (
    <motion.div
      style={{ left: springX, top: springY }}
      animate={{
        width: hovering ? 56 : 16,
        height: hovering ? 56 : 16,
        backgroundColor: hovering ? "rgba(255,8,68,0.15)" : "#f5f5f4",
        borderColor: hovering ? "#ff0844" : "rgba(255,8,68,0)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="pointer-events-none fixed z-[80] hidden -translate-x-1/2 -translate-y-1/2 rounded-full border mix-blend-difference lg:block"
      aria-hidden="true"
    />
  );
}
