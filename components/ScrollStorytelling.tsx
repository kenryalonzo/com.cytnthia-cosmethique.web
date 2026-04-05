"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import SectionBackdropWord from "@/components/SectionBackdropWord";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollStorytelling() {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const s1 = section1Ref.current;
      if (s1) {
        const reveal = s1.querySelectorAll(".reveal-text");
        if (reveal.length) {
          gsap.fromTo(
            reveal,
            { y: 36, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.25,
              ease: "power2.out",
              stagger: 0.18,
              scrollTrigger: {
                trigger: s1,
                start: "top 82%",
              },
            },
          );
        }
      }

      const s2 = section2Ref.current;
      if (s2) {
        const parallax = s2.querySelector(".parallax-bg");
        if (parallax) {
          gsap.fromTo(
            parallax,
            { y: -32 },
            {
              y: 32,
              ease: "none",
              scrollTrigger: {
                trigger: s2,
                scrub: 0.85,
              },
            },
          );
        }
      }

      const s3 = section3Ref.current;
      if (s3) {
        const fade = s3.querySelectorAll(".fade-in");
        if (fade.length) {
          gsap.fromTo(
            fade,
            { opacity: 0, scale: 0.98 },
            {
              opacity: 1,
              scale: 1,
              duration: 1.35,
              ease: "power2.out",
              stagger: 0.12,
              scrollTrigger: {
                trigger: s3,
                start: "top 74%",
              },
            },
          );
        }
      }
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="bg-brand-bg text-brand-blue-dark">
      {/* SECTION 1 — Philosophy */}
      <section
        ref={section1Ref}
        id="philosophy"
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-8 py-28 md:py-36"
      >
        <SectionBackdropWord word="ESSENCE" variant="mist" />
        <div className="relative z-10 mx-auto max-w-4xl space-y-10 text-center md:space-y-12">
          <h2 className="reveal-text text-xs font-semibold uppercase tracking-[0.32em] text-brand-gold">
            Our Philosophy
          </h2>
          <p className="reveal-text font-serif text-4xl leading-[1.15] tracking-tight md:text-[3.25rem] md:leading-[1.12]">
            Beauty is not a routine. <br />
            <span className="text-brand-muted italic">It is a ritual.</span>
          </p>
          <p className="reveal-text mx-auto max-w-2xl text-lg leading-[1.75] text-brand-muted">
            At Cynthia Cosmétique, we believe in the power of nature combined
            with advanced science. Our pearl capsule technology delivers
            concentrated active ingredients directly to your skin, ensuring
            maximum efficacy and a luminous glow.
          </p>
        </div>
      </section>

      {/* SECTION 2 — Signature Treatments */}
      <section
        ref={section2Ref}
        id="treatments"
        className="relative flex min-h-screen items-center overflow-hidden"
      >
        <div className="parallax-bg absolute inset-0 -z-10 bg-brand-blue-dark/[0.04]" />
        <SectionBackdropWord word="CARE" />
        <div className="container relative z-10 mx-auto px-8 py-28 md:py-36">
          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-20">
            <div className="space-y-9">
              <h2 className="text-xs font-semibold uppercase tracking-[0.32em] text-brand-gold">
                Signature Treatments
              </h2>
              <h3 className="font-serif text-4xl leading-[1.12] tracking-tight md:text-[2.85rem]">
                The Golden Pearl Facial
              </h3>
              <p className="text-lg leading-[1.75] text-brand-muted">
                Experience our most luxurious treatment. The Golden Pearl Facial
                uses our proprietary serum capsules to deeply hydrate, firm, and
                illuminate your complexion. A 90-minute journey to pure
                radiance.
              </p>
              <button
                type="button"
                className="border border-brand-blue-dark/80 px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue-dark transition-all duration-500 ease-out hover:bg-brand-blue-dark hover:text-white"
              >
                Book Treatment
              </button>
            </div>
            <div className="relative h-[min(560px,62vh)] overflow-hidden rounded-2xl shadow-[0_24px_60px_-24px_rgba(10,26,47,0.14)] md:h-[600px]">
              <Image
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=1200"
                alt="Soin spa de luxe"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-brand-blue-dark/20 mix-blend-overlay" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — The Cynthia Ritual */}
      <section
        ref={section3Ref}
        id="experience"
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-8 py-28 md:py-36"
      >
        <SectionBackdropWord word="GLOW" />
        <div className="relative z-10 mx-auto max-w-5xl space-y-16 text-center md:space-y-20">
          <div className="fade-in space-y-5">
            <h2 className="text-xs font-semibold uppercase tracking-[0.32em] text-brand-gold">
              The Cynthia Ritual
            </h2>
            <h3 className="font-serif text-4xl leading-[1.12] tracking-tight md:text-[2.85rem]">
              A Cinematic Journey
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
            {[
              {
                step: "01",
                title: "Cleanse",
                desc: "Purify with our gentle botanical extracts.",
              },
              {
                step: "02",
                title: "Activate",
                desc: "Apply the Golden Pearl serum for deep nourishment.",
              },
              {
                step: "03",
                title: "Seal",
                desc: "Lock in moisture with our signature rich cream.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="fade-in space-y-4 rounded-2xl border border-brand-blue-dark/[0.05] bg-brand-bg p-8 shadow-[0_2px_20px_-12px_rgba(10,26,47,0.06)] transition-transform duration-700 ease-out hover:-translate-y-1"
              >
                <span className="text-4xl font-light text-brand-gold/35">
                  {item.step}
                </span>
                <h4 className="text-lg font-semibold uppercase tracking-[0.18em]">
                  {item.title}
                </h4>
                <p className="leading-relaxed text-brand-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Holistic Wellness */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-brand-blue-dark px-8 py-28 text-white md:py-36">
        <SectionBackdropWord word="AURA" variant="dark" />
        <div className="absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent via-brand-gold/35 to-transparent" />
        <div className="relative z-10 mx-auto max-w-4xl space-y-12 text-center md:space-y-14">
          <h2 className="text-xs font-semibold uppercase tracking-[0.42em] text-brand-gold/90">
            Beyond Beauty
          </h2>
          <h3 className="font-serif text-5xl italic leading-[1.08] md:text-6xl md:leading-[1.06]">
            Holistic Wellness
          </h3>
          <p className="mx-auto max-w-2xl text-lg leading-[1.75] text-white/58">
            Because true radiance comes from within. Complement your treatments
            with our professional massages, prescriptive facials, and luxury
            nail care. A complete sanctuary in the heart of Douala.
          </p>
          <div className="flex flex-wrap justify-center gap-8 pt-8">
            {[
              "Massage Équilibrant",
              "Soin Visage Expert",
              "Manucure & Pédicure",
            ].map((item, i) => (
              <div
                key={i}
                className="cursor-default rounded-full border border-white/[0.12] px-8 py-3.5 text-xs uppercase tracking-[0.26em] transition-colors duration-500 hover:border-brand-gold/50"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute -bottom-28 -right-28 h-96 w-96 rounded-full bg-brand-gold/[0.08] blur-[140px]" />
        <div className="absolute -top-28 -left-28 h-96 w-96 rounded-full border border-brand-gold/[0.06] bg-brand-blue-dark/40 blur-[130px]" />
      </section>
    </div>
  );
}
