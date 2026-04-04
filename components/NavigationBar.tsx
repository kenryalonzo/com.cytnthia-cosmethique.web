import { User, Menu } from "lucide-react";

export default function NavigationBar() {
  return (
    <nav className="flex items-center justify-between w-full px-12 py-8 absolute top-0 left-0 z-50">
      {/* Left: Logo */}
      <div className="flex items-center">
        <div className="relative flex items-center justify-center w-48 h-16 border-2 border-brand-gold rounded-[100%]">
          <div className="absolute -top-4 text-brand-gold">
            <svg
              width="32"
              height="24"
              viewBox="0 0 32 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 0C16 0 12 8 8 12C12 12 16 8 16 8C16 8 20 12 24 12C20 8 16 0 16 0Z" />
              <path d="M8 12C8 12 4 16 0 16C4 16 8 16 8 16C8 16 12 16 16 16C12 16 8 12 8 12Z" />
              <path d="M24 12C24 12 28 16 32 16C28 16 24 16 24 16C24 16 20 16 16 16C20 16 24 12 24 12Z" />
            </svg>
          </div>
          <span className="font-serif text-3xl italic text-brand-blue-dark mt-2">
            Cynthia
          </span>
          <span className="absolute bottom-2 right-6 text-[10px] uppercase tracking-wider text-brand-blue-dark">
            Cosmetique
          </span>
        </div>
      </div>

      {/* Center: Links */}
      <div className="hidden md:flex items-center space-x-12">
        <a
          href="#services"
          className="text-[18px] uppercase tracking-[0.04em] text-brand-gold font-medium transition-colors"
        >
          Services
        </a>
        <a
          href="#treatments"
          className="text-[18px] uppercase tracking-[0.04em] text-brand-blue-dark hover:text-brand-gold transition-colors font-medium"
        >
          Rituals
        </a>
        <a
          href="#philosophy"
          className="text-[18px] uppercase tracking-[0.04em] text-brand-blue-dark hover:text-brand-gold transition-colors font-medium"
        >
          Philosophy
        </a>
        <a
          href="#experience"
          className="text-[18px] uppercase tracking-[0.04em] text-brand-blue-dark hover:text-brand-gold transition-colors font-medium"
        >
          Experience
        </a>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center space-x-8">
        <button
          className="text-brand-blue-dark hover:text-brand-gold transition-colors"
          aria-label="User profile"
        >
          <User size={24} strokeWidth={1.5} />
        </button>
        <button
          className="text-brand-blue-dark hover:text-brand-gold transition-colors"
          aria-label="Menu"
        >
          <Menu size={24} strokeWidth={1.5} />
        </button>
      </div>
    </nav>
  );
}
