"use client";

import React from "react";
import Image from "next/image";

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
    <section className="bg-white py-24 px-8 md:px-16" id="services">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* EYEBROWS SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="space-y-6 lg:col-span-1">
            <h2 className="text-sm uppercase tracking-[0.3em] text-brand-gold font-bold">
              L&apos;Art du Regard
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-brand-blue-dark">
              Sourcils & Harmonie
            </h3>
            <p className="text-brand-muted leading-relaxed">
              Nos techniques de micro-pigmentation sont conçues pour sublimer
              votre visage tout en respectant votre morphologie naturelle. Un
              rituel de précision pour un regard affirmé.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {eyebrowServices.map((service, index) => (
              <div
                key={index}
                className="group p-8 border border-brand-blue-dark/5 bg-brand-bg rounded-2xl hover:border-brand-gold/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
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
          <div className="relative group overflow-hidden rounded-[40px] bg-brand-blue-dark h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1595475038784-bbe439ff41e6?auto=format&fit=crop&q=80&w=1200"
              alt="Maquillage permanent Candy Lips"
              fill
              className="object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105"
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
                  className="text-xs uppercase tracking-widest text-white border-b border-white/50 pb-1 hover:border-brand-gold transition-colors"
                >
                  Réserver
                </button>
              </div>
            </div>
          </div>

          {/* LASHES LIST */}
          <div className="bg-brand-bg rounded-[40px] p-12 flex flex-col justify-between">
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
                    className="flex justify-between items-center group cursor-pointer border-b border-brand-blue-dark/5 pb-2"
                  >
                    <span className="text-brand-blue-dark font-medium group-hover:text-brand-gold transition-colors">
                      {lash.title}
                    </span>
                    <div className="grow border-t border-dotted border-brand-blue-dark/10 mx-4 opacity-50" />
                    <span className="text-brand-blue-dark/50 group-hover:text-brand-gold transition-colors font-bold">
                      {lash.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 flex items-center space-x-4">
              <button
                type="button"
                className="grow py-4 bg-brand-blue-dark text-white text-xs uppercase tracking-widest font-bold rounded-full hover:bg-brand-gold transition-colors"
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
