import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ProfilesSection } from "@/components/ProfilesSection";
import { Services } from "@/components/Services";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { WhatsAppFloating } from "@/components/WhatsAppFloating";
import { WordContentCarousel } from "@/components/WordContentCarousel";

export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <WordContentCarousel />
      <Services />
      <ProfilesSection />
      <TestimonialsCarousel />
      <Footer />
      <WhatsAppFloating />
    </main>
  );
}
