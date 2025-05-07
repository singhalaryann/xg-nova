// page.js
import Header from "./components/common/Header";
import Hero from "./components/home/Hero";
import NovaAction from "./components/home/NovaAction"; 
import DecisionSystem from "./components/home/DecisionSystem"; 
import ExperienceDemo from "./components/home/ExperienceDemo";
import LiveOpsSection from "./components/home/LiveOpsSection";
import CTABanner from "./components/home/CTABanner";
import Footer from "./components/common/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
      <Hero />
      <NovaAction />
      <LiveOpsSection />
      <DecisionSystem />
      <ExperienceDemo />
      <CTABanner />
      </main>
      <Footer />
    </>
  );
}