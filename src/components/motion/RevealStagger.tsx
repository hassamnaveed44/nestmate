"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

interface RevealStaggerProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}

export function RevealStagger({
  children,
  className,
  stagger = 0.12,
  delay = 0,
}: RevealStaggerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const targets = containerRef.current?.children;
      if (!targets?.length) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      gsap.from(targets, {
        opacity: 0,
        y: reduceMotion ? 0 : 24,
        duration: 1,
        delay,
        stagger,
        ease: "power4.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}