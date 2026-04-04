import HeroSection from "@/components/HeroSection";
import ScrollStorytelling from "@/components/ScrollStorytelling";
import ServicesShowcase from "@/components/ServicesShowcase";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-bg overflow-x-hidden">
      <main className="grow">
        <HeroSection />
        <ServicesShowcase />
        <ScrollStorytelling />
      </main>

      <footer className="py-12 px-8 border-t border-brand-blue-dark/5 bg-white text-center">
        <p className="text-brand-muted text-sm uppercase tracking-widest">
          © 2026 Cynthia Cosmétique • L'art du rituel
        </p>
      </footer>
    </div>
  );
}
