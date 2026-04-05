"use client";

import {
  useEffect,
  useRef,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function subscribeReducedMotion(onChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
}

type GoldScrollThreadProps = {
  children: ReactNode;
};

/**
 * Scroll-linked gold thread: subtle capsule dissolves into an organic vertical flow.
 * Respects prefers-reduced-motion.
 */
export default function GoldScrollThread({ children }: GoldScrollThreadProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const liquidClipRef = useRef<HTMLDivElement>(null);
  const capsuleRef = useRef<HTMLDivElement>(null);
  const topCapRef = useRef<HTMLDivElement>(null);
  const botCapRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const wrap = wrapRef.current;
    const liquid = liquidClipRef.current;
    const cap = capsuleRef.current;
    const top = topCapRef.current;
    const bot = botCapRef.current;
    if (!wrap || !liquid || !cap || !top || !bot) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: wrap,
        start: "top 88%",
        end: "bottom bottom",
        scrub: 0.9,
        onUpdate: (self) => {
          const p = self.progress;
          const clipPct = (1 - p) * 100;
          liquid.style.clipPath = `inset(${clipPct}% 0 0 0)`;

          const breakPhase = Math.min(1, p / 0.14);
          cap.style.opacity = String(1 - breakPhase);
          const split = breakPhase * 5;
          top.style.transform = `translateY(${-split}px)`;
          bot.style.transform = `translateY(${split}px)`;
        },
      });
    }, wrap);

    return () => ctx.revert();
  }, [reducedMotion]);

  useEffect(() => {
    const onResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  if (reducedMotion) {
    return <div className="relative">{children}</div>;
  }

  return (
    <div ref={wrapRef} className="relative w-full md:flex">
      <div
        className="pointer-events-none absolute top-0 bottom-0 left-0 z-[1] w-2.5 overflow-visible sm:w-3 md:relative md:z-auto md:w-[4.5rem] md:shrink-0"
        aria-hidden
      >
        <div
          ref={capsuleRef}
          className="pointer-events-none absolute top-0 left-1/2 z-10 flex -translate-x-1/2 -translate-y-[42%] flex-col items-center opacity-100"
        >
          <div
            ref={topCapRef}
            className="h-[22px] w-[26px] rounded-t-full border border-brand-gold/40 bg-gradient-to-b from-brand-gold/25 to-transparent shadow-[0_0_22px_rgba(198,168,106,0.14)]"
          />
          <div
            ref={botCapRef}
            className="-mt-px h-[22px] w-[26px] rounded-b-full border border-brand-gold/30 border-t-0 bg-gradient-to-b from-transparent to-brand-gold/10"
          />
        </div>

        <div
          ref={liquidClipRef}
          className="pointer-events-none absolute inset-0 top-0 overflow-hidden"
          style={{ clipPath: "inset(100% 0 0 0)" }}
        >
          <div className="absolute inset-0 flex justify-center pt-6 opacity-[0.55] md:opacity-[0.5]">
            <svg
              className="h-full min-h-[120vh] w-full max-w-[26px] sm:max-w-[32px] md:max-w-[52px]"
              preserveAspectRatio="none"
              viewBox="0 0 52 1200"
            >
              <defs>
                <linearGradient
                  id="goldFlowGrad"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="var(--color-brand-gold)"
                    stopOpacity="0.42"
                  />
                  <stop
                    offset="35%"
                    stopColor="var(--color-brand-gold)"
                    stopOpacity="0.2"
                  />
                  <stop
                    offset="100%"
                    stopColor="var(--color-brand-gold)"
                    stopOpacity="0.04"
                  />
                </linearGradient>
                <filter
                  id="goldFlowGlow"
                  x="-80%"
                  y="-5%"
                  width="260%"
                  height="110%"
                >
                  <feGaussianBlur stdDeviation="4" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path
                d="M 23 0 L 29 0 Q 33 200 25 400 Q 31 600 23 800 Q 30 1000 24 1200 L 20 1200 Q 26 1000 19 800 Q 27 600 21 400 Q 29 200 23 0 Z"
                fill="url(#goldFlowGrad)"
                filter="url(#goldFlowGlow)"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="relative z-[2] min-w-0 w-full md:flex-1">{children}</div>
    </div>
  );
}
