"use client";

import React from "react";
import Image from "next/image";
import SectionBackdropWord from "@/components/SectionBackdropWord";

const eyebrowServices = [
  {
    title: "Le Microshading",
    price: "15 000 Fcfa",
    description:
      "Effet ombré poudré pour redessiner la ligne et combler les manques. Idéal pour une intensité naturelle.",
    duration: "1 an+",
  },
  {
    title: "Le Microblading",
    price: "15 000 Fcfa",
    description:
      "Poil à poil ultra-réaliste pour imiter l'aspect de vrais sourcils. Une discrétion absolue.",
    duration: "1 an+",
  },
  {
    title: "Mixte / Combo",
    price: "25 000 Fcfa",
    description:
      "Le summum de la micro-pigmentation fusionnant les deux techniques pour un résultat parfait.",
    duration: "1 an+",
  },
];

const lashServices = [
  { title: "Pose Découverte", price: "5 000 Fcfa" },
  { title: "Pose Classique", price: "7 000 Fcfa" },
  { title: "Pose Intense", price: "10 000 Fcfa" },
  { title: "Pose Hybride", price: "12 000 Fcfa" },
  { title: "Volume Russe", price: "15 000 Fcfa" },
  { title: "Méga Volume Russe", price: "20 000 Fcfa" },
];

export default function ServicesShowcase() {
  return (
    <section
      className="relative overflow-hidden bg-white py-28 px-8 md:px-16 md:py-36"
      id="services"
    >
      <SectionBackdropWord word="RITUAL" />
      <div className="relative z-10 mx-auto max-w-6xl space-y-28 md:space-y-32">
        {/* EYEBROWS SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="space-y-7 lg:col-span-1">
            <h2 className="text-xs font-semibold uppercase tracking-[0.38em] text-brand-gold">
              L&apos;Art du Regard
            </h2>
            <h3 className="font-serif text-4xl leading-[1.12] tracking-tight text-brand-blue-dark md:text-[2.75rem]">
              Sourcils & Harmonie
            </h3>
            <p className="max-w-md leading-[1.75] text-brand-muted">
              Nos techniques de micro-pigmentation sont conçues pour sublimer
              votre visage tout en respectant votre morphologie naturelle. Un
              rituel de précision pour un regard affirmé.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {eyebrowServices.map((service, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-brand-blue-dark/[0.06] bg-brand-bg p-8 shadow-[0_2px_24px_-12px_rgba(10,26,47,0.08)] transition-all duration-700 ease-out hover:-translate-y-0.5 hover:border-brand-gold/25 hover:shadow-[0_20px_50px_-24px_rgba(10,26,47,0.1)]"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold uppercase tracking-tight text-brand-blue-dark">
                    {service.title}
                  </h4>
                  <span className="text-brand-gold font-black whitespace-nowrap ml-4">
                    {service.price}
                  </span>
                </div>
                <p className="text-brand-muted text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="text-[10px] uppercase tracking-widest text-brand-gold font-bold flex items-center">
                  <span className="w-8 h-px bg-brand-gold mr-2" />
                  Durée: {service.duration}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LIPS & LASHES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LIPS CARD */}
          <div className="group relative h-[500px] overflow-hidden rounded-[36px] bg-brand-blue-dark shadow-[0_24px_60px_-28px_rgba(10,26,47,0.18)]">
            <Image
              src="https://images.unsplash.com/photo-1595475038784-bbe439ff41e6?auto=format&fit=crop&q=80&w=1200"
              alt="Maquillage permanent Candy Lips"
              fill
              className="object-cover opacity-60 transition-transform duration-[1.4s] ease-out group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-brand-blue-dark via-transparent to-transparent" />
            <div className="absolute bottom-12 left-12 right-12 space-y-4">
              <span className="text-brand-gold text-xs uppercase tracking-[0.3em] font-bold">
                Lèvres Éclatantes
              </span>
              <h3 className="text-4xl font-serif text-white italic">
                Le Candy Lips
              </h3>
              <p className="text-white/70 text-sm max-w-sm">
                Maquillage permanent pour des lèvres parfaitement dessinées et
                une couleur vibrante au quotidien.
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-2xl font-black text-brand-gold">
                  20 000 Fcfa
                </span>
                <button
                  type="button"
                  className="border-b border-white/45 pb-1 text-xs uppercase tracking-[0.28em] text-white transition-colors duration-500 hover:border-brand-gold/80"
                >
                  Réserver
                </button>
              </div>
            </div>
          </div>

          {/* LASHES LIST */}
          <div className="flex flex-col justify-between rounded-[36px] border border-brand-blue-dark/[0.05] bg-brand-bg p-10 shadow-[0_2px_28px_-14px_rgba(10,26,47,0.06)] md:p-12">
            <div className="space-y-8">
              <div className="flex justify-between items-end">
                <div className="space-y-2">
                  <h3 className="text-3xl font-serif text-brand-blue-dark">
                    Extensions de Cils
                  </h3>
                  <p className="text-brand-muted text-sm">
                    Une pose sur-mesure pour chaque envie.
                  </p>
                </div>
                <div className="text-brand-gold font-bold text-sm text-right leading-none">
                  Cameroun
                  <br />
                  Douala
                </div>
              </div>

              <div className="space-y-4">
                {lashServices.map((lash, i) => (
                  <div
                    key={i}
                    className="group flex cursor-pointer items-center justify-between border-b border-brand-blue-dark/[0.06] pb-2.5 transition-colors duration-500"
                  >
                    <span className="font-medium text-brand-blue-dark transition-colors duration-500 group-hover:text-brand-gold">
                      {lash.title}
                    </span>
                    <div className="grow border-t border-dotted border-brand-blue-dark/10 mx-4 opacity-50" />
                    <span className="font-bold text-brand-blue-dark/50 transition-colors duration-500 group-hover:text-brand-gold">
                      {lash.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 flex items-center space-x-4">
              <button
                type="button"
                className="grow rounded-full bg-brand-blue-dark py-4 text-xs font-bold uppercase tracking-[0.22em] text-white transition-all duration-500 ease-out hover:bg-brand-gold"
              >
                Prendre RDV
              </button>
              <div className="px-6 text-brand-blue-dark/30 text-[10px] uppercase tracking-widest font-bold border-l border-brand-blue-dark/10 leading-tight">
                Sublimation
                <br />
                du Regard
              </div>
            </div>
          </div>
        </div>

        {/* WELLNESS & CONTACT */}
        <div className="pt-16 border-t border-brand-blue-dark/5 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-[0.4em] text-brand-gold font-bold">
              Nous Contacter
            </h4>
            <p className="text-2xl font-serif text-brand-blue-dark">
              +237 693 93 79 33
            </p>
            <p className="text-brand-muted text-sm tracking-widest uppercase">
              Douala, Cameroun
            </p>
          </div>

          <div className="flex space-x-12">
            <div className="text-center">
              <span className="block text-4xl font-serif text-brand-gold italic leading-none">
                Rituel
              </span>
              <span className="text-[10px] uppercase tracking-widest text-brand-muted">
                Beauté
              </span>
            </div>
            <div className="text-center">
              <span className="block text-4xl font-serif text-brand-gold italic leading-none">
                Passion
              </span>
              <span className="text-[10px] uppercase tracking-widest text-brand-muted">
                Excellence
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
