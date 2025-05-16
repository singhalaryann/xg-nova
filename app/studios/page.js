// app/studios/page.js
import styles from "../../styles/studiosPage.module.css";
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ImpactSection from '../components/studios/ImpactSection';
import AgentLibrarySection from '../components/studios/AgentLibrarySection';
import IntegrationsSection from '../components/studios/IntegrationsSection';
import CaseStudiesSection from '../components/studios/CaseStudiesSection';
import CommandCenterSection from '../components/studios/CommandCenterSection';
import JoinBanner from '../components/studios/JoinBanner';
import FeaturesSection from '../components/studios/FeaturesSection';

export default function Studios() {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.mainContent}>
        <section className={styles.featuresSection}>
          <FeaturesSection />
        </section>
        <section className={styles.commandCenterSection}>
          <CommandCenterSection />
        </section>
        <section className={styles.impactSection}>
          <ImpactSection />
        </section>
        <section className={styles.agentLibrarySection}>
          <AgentLibrarySection />
        </section>
        <section className={styles.integrationsSection}>
          <IntegrationsSection />
        </section>
        <section className={styles.caseStudiesSection}>
          <CaseStudiesSection />
        </section>
        <section className={styles.joinBannerSection}>
          <JoinBanner />
        </section>
      </main>
      <Footer />
    </div>
  );
}