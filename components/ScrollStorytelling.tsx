"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollStorytelling() {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Section 1 Animation
    if (section1Ref.current) {
      gsap.fromTo(
        section1Ref.current.querySelectorAll(".reveal-text"),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: section1Ref.current,
            start: "top 80%",
          },
        },
      );
    }

    // Section 2 Animation
    if (section2Ref.current) {
      gsap.fromTo(
        section2Ref.current.querySelector(".parallax-bg"),
        { y: -50 },
        {
          y: 50,
          ease: "none",
          scrollTrigger: {
            trigger: section2Ref.current,
            scrub: true,
          },
        },
      );
    }

    // Section 3 Animation
    if (section3Ref.current) {
      gsap.fromTo(
        section3Ref.current.querySelectorAll(".fade-in"),
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: section3Ref.current,
            start: "top 70%",
          },
        },
      );
    }
  }, []);

  return (
    <div className="bg-brand-bg text-brand-blue-dark">
      {/* SECTION 1 — Philosophy */}
      <section
        ref={section1Ref}
        id="philosophy"
        className="min-h-screen flex items-center justify-center px-8 py-24"
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="reveal-text text-sm uppercase tracking-[0.2em] text-brand-gold font-bold">
            Our Philosophy
          </h2>
          <p className="reveal-text text-4xl md:text-6xl font-serif leading-tight">
            Beauty is not a routine. <br />
            <span className="italic text-brand-muted">It is a ritual.</span>
          </p>
          <p className="reveal-text text-lg text-brand-muted max-w-2xl mx-auto leading-relaxed">
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
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        <div className="parallax-bg absolute inset-0 bg-brand-blue-dark/5 -z-10" />
        <div className="container mx-auto px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-sm uppercase tracking-[0.2em] text-brand-gold font-bold">
                Signature Treatments
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif">
                The Golden Pearl Facial
              </h3>
              <p className="text-lg text-brand-muted leading-relaxed">
                Experience our most luxurious treatment. The Golden Pearl Facial
                uses our proprietary serum capsules to deeply hydrate, firm, and
                illuminate your complexion. A 90-minute journey to pure
                radiance.
              </p>
              <button className="px-8 py-4 border border-brand-blue-dark text-brand-blue-dark uppercase tracking-widest text-sm font-bold hover:bg-brand-blue-dark hover:text-white transition-colors">
                Book Treatment
              </button>
            </div>
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=1000"
                alt="Luxury Spa Treatment"
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
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
        className="min-h-screen flex items-center justify-center px-8 py-24 bg-white"
      >
        <div className="max-w-5xl mx-auto text-center space-y-16">
          <div className="space-y-4 fade-in">
            <h2 className="text-sm uppercase tracking-[0.2em] text-brand-gold font-bold">
              The Cynthia Ritual
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif">
              A Cinematic Journey
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                className="fade-in p-8 rounded-2xl bg-brand-bg space-y-4 hover:-translate-y-2 transition-transform duration-500"
              >
                <span className="text-4xl font-black text-brand-gold/30">
                  {item.step}
                </span>
                <h4 className="text-xl font-bold uppercase tracking-wider">
                  {item.title}
                </h4>
                <p className="text-brand-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
