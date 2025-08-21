import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Services } from "./components/Services";
import { TestimonialCarousel } from "./components/Testimonials";
import { WhyChooseUs } from "./components/WhyChooseUs";


export default function Home() {
  return (
    <div className="bg-white relative text-gray-800 font-sans">
      <Header />
      <main className="mx-auto max-w-7xl">
          <Hero />
          {/* <TrustedBy /> */}
          <Services />
          <HowItWorks />
          <TestimonialCarousel />
          <WhyChooseUs />
          <CTASection />
      </main>
      <Footer />
    </div>
  );
}