// app/page.js
import styles from "../styles/page.module.css";
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
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.mainContent}>
        <section className={styles.heroSection}>
          <Hero />
        </section>
        <section className={styles.novaActionSection}>
          <NovaAction />
        </section>
        <section className={styles.liveOpsSection}>
          <LiveOpsSection />
        </section>
        <section className={styles.decisionSystemSection}>
          <DecisionSystem />
        </section>
        <section className={styles.experienceDemoSection}>
          <ExperienceDemo />
        </section>
        <section className={styles.ctaBannerSection}>
          <CTABanner />
        </section>
      </main>
      <Footer />
    </div>
  );
}