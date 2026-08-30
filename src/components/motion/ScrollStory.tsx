// src/components/motion/ScrollStory.tsx
"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface ScrollStoryProps {
  children: React.ReactNode;
  className?: string;
}

export function ScrollStory({ children, className }: ScrollStoryProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const narrative = sectionRef.current?.querySelector("[data-narrative]");
      const visual = sectionRef.current?.querySelector("[data-visual]");
      if (!narrative || !visual) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      gsap.from(narrative.children, {
        opacity: 0,
        y: reduceMotion ? 0 : 32,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      });

      gsap.from(visual, {
        opacity: 0,
        scale: reduceMotion ? 1 : 0.96,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      });
    },
    { scope: sectionRef }
  );

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}