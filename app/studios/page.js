// app/studios/page.js
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
    <>
      <Header />
      <main>
        <FeaturesSection />
        <CommandCenterSection />
        <ImpactSection />
        <AgentLibrarySection />
        <IntegrationsSection />
        <CaseStudiesSection />
        <JoinBanner />
      </main>
      <Footer />
    </>
  );
}