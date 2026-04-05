"use client";

import { useEffect, useState } from "react";
import { User, Menu, X } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#treatments", label: "Rituals" },
  { href: "#philosophy", label: "Philosophy" },
  { href: "#experience", label: "Experience" },
] as const;

export default function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="absolute top-0 left-0 z-50 flex w-full items-center justify-between px-4 py-5 sm:px-6 sm:py-6 md:px-10 md:py-8 lg:px-12">
        <div className="flex min-w-0 flex-1 items-center">
          <div className="relative flex h-14 w-[8.5rem] shrink-0 items-center justify-center rounded-[100%] border-2 border-brand-gold sm:h-[3.75rem] sm:w-40 md:h-16 md:w-48">
            <div className="absolute -top-3 text-brand-gold sm:-top-4">
              <svg
                width="28"
                height="21"
                className="sm:h-6 sm:w-8"
                viewBox="0 0 32 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path d="M16 0C16 0 12 8 8 12C12 12 16 8 16 8C16 8 20 12 24 12C20 8 16 0 16 0Z" />
                <path d="M8 12C8 12 4 16 0 16C4 16 8 16 8 16C8 16 12 16 16 16C12 16 8 12 8 12Z" />
                <path d="M24 12C24 12 28 16 32 16C28 16 24 16 24 16C24 16 20 16 16 16C20 16 24 12 24 12Z" />
              </svg>
            </div>
            <span className="mt-1.5 font-serif text-xl italic text-brand-blue-dark sm:text-2xl md:text-3xl">
              Cynthia
            </span>
            <span className="absolute bottom-1.5 right-3 text-[8px] uppercase tracking-wider text-brand-blue-dark sm:bottom-2 sm:right-6 sm:text-[10px]">
              Cosmetique
            </span>
          </div>
        </div>

        <div className="hidden items-center gap-8 md:flex lg:gap-12">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`text-[15px] font-medium uppercase tracking-[0.04em] transition-colors duration-500 lg:text-[18px] ${
                href === "#services"
                  ? "text-brand-gold"
                  : "text-brand-blue-dark hover:text-brand-gold"
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex flex-1 items-center justify-end gap-4 sm:gap-6 md:gap-8">
          <button
            type="button"
            className="hidden text-brand-blue-dark transition-colors duration-500 hover:text-brand-gold sm:block"
            aria-label="Profil"
          >
            <User size={22} strokeWidth={1.5} className="md:h-6 md:w-6" />
          </button>
          <button
            type="button"
            className="text-brand-blue-dark transition-colors duration-500 hover:text-brand-gold md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <X size={24} strokeWidth={1.5} />
            ) : (
              <Menu size={24} strokeWidth={1.5} />
            )}
          </button>
          <button
            type="button"
            className="hidden text-brand-blue-dark transition-colors duration-500 hover:text-brand-gold md:block"
            aria-label="Menu"
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav"
        className={`fixed inset-0 z-[60] flex flex-col bg-[#faf9f7]/98 px-6 pt-24 backdrop-blur-md transition-[opacity,visibility] duration-300 md:hidden ${
          menuOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col gap-1">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="border-b border-brand-blue-dark/8 py-4 text-lg font-medium uppercase tracking-[0.12em] text-brand-blue-dark transition-colors hover:text-brand-gold"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
