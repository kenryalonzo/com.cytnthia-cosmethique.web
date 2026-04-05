import HeroSection from "@/components/HeroSection";
import ScrollStorytelling from "@/components/ScrollStorytelling";
import ServicesShowcase from "@/components/ServicesShowcase";
import GoldScrollThread from "@/components/GoldScrollThread";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-brand-bg">
      <main className="grow">
        <HeroSection />
        <GoldScrollThread>
          <ServicesShowcase />
          <ScrollStorytelling />
        </GoldScrollThread>
      </main>

      <footer className="relative z-10 border-t border-brand-blue-dark/[0.06] bg-white px-8 py-14 text-center">
        <p className="text-brand-muted text-sm uppercase tracking-widest">
          © 2026 Cynthia Cosmétique • L&apos;art du rituel
        </p>
      </footer>
    </div>
  );
}
