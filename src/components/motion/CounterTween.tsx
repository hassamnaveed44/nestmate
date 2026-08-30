// src/components/motion/CounterTween.tsx
"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface CounterTweenProps {
  value: number;
  prefix?: string;
  decimals?: number;
  className?: string;
}

export function CounterTween({
  value,
  prefix = "$",
  decimals = 2,
  className,
}: CounterTweenProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const counter = { val: 0 };

      gsap.to(counter, {
        val: value,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
        onUpdate: () => {
          el.textContent = `${prefix}${counter.val.toFixed(decimals)}`;
        },
      });
    },
    { scope: ref, dependencies: [value] }
  );

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toFixed(decimals)}
    </span>
  );
}