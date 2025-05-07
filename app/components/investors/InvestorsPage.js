// components/investors/InvestorsPage.js
import React from 'react';
import styles from '../../../styles/investors/investors.module.css';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import TeamSection from './TeamSection'

const InvestorsPage = () => {
  return (
    <div className={styles.investorsPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>
            Nova: AI LiveOps that lets lean teams move at AAA speed.
          </h1>
          <p className={styles.heroSubtitle}>
            Week-long releases → hour-long pushes · <span className={styles.highlight}>10×</span> productivity.
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>The Bottleneck</h2>
            <p className={styles.sectionText}>
              Game success now hinges on rapid, data-driven LiveOps. Cross-functional hand-offs create analysis gridlock — churn wins while data waits.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>Our Solution — Nova</h2>
            <ul className={styles.featureList}>
              <li className={styles.featureItem}>
                <Check size={20} className={styles.checkIcon} />
                <span>Ingests telemetry & feedback in real time</span>
              </li>
              <li className={styles.featureItem}>
                <Check size={20} className={styles.checkIcon} />
                <span>Agents auto-label and clean data</span>
              </li>
              <li className={styles.featureItem}>
                <Check size={20} className={styles.checkIcon} />
                <span>Role-aware dashboards for Ad PMs, Economy Designers, Store PMs</span>
              </li>
            </ul>
            <p className={styles.sectionText}>Nova does the plumbing; teams make the calls.</p>
          </div>
        </div>
      </section>

      {/* Demo Highlights Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>Product Demo Highlights</h2>
            <ol className={styles.numberList}>
              <li className={styles.numberItem}>
                <span className={styles.number}>1</span>
                <div className={styles.numberContent}>
                  <span className={styles.numberTitle}>Agent Library</span>
                  <span className={styles.numberDetail}>— smart pricing → deep personalization</span>
                </div>
              </li>
              <li className={styles.numberItem}>
                <span className={styles.number}>2</span>
                <div className={styles.numberContent}>
                  <span className={styles.numberTitle}>Slack launch:</span>
                  <span className={styles.numberDetail}>test dozens of hypotheses per day</span>
                </div>
              </li>
              <li className={styles.numberItem}>
                <span className={styles.number}>3</span>
                <div className={styles.numberContent}>
                  <span className={styles.numberTitle}>Result card:</span>
                  <span className={styles.numberDetail}>"Retention ↑ 7%. Roll out to last 15%?"</span>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Market Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>Go-to-Market</h2>
            <p className={styles.sectionText}>
              Beachhead: Mobile / F2P teams (3-50 devs). Design-partner pilots + Slack virality. Land with core copilot, expand via agent add-ons.
            </p>
          </div>
        </div>
      </section>

      {/* Market Size Section */}
      <section className={styles.marketSection}>
        <div className={styles.container}>
          <div className={styles.marketGrid}>
            <div className={styles.marketCard}>
              <h3 className={styles.marketLabel}>TAM</h3>
              <p className={styles.marketValue}>$120B</p>
              <p className={styles.marketDetail}>Publishing</p>
            </div>
            <div className={styles.marketCard}>
              <h3 className={styles.marketLabel}>SAM</h3>
              <p className={styles.marketValue}>$20B</p>
              <p className={styles.marketDetail}>Agentic Publishing + LiveOps</p>
            </div>
            <div className={styles.marketCard}>
              <h3 className={styles.marketLabel}>SOM</h3>
              <p className={styles.marketValue}>$5B</p>
              <p className={styles.marketDetail}>LiveOps Tools</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>Business Model</h2>
            <p className={styles.sectionText}>
              Pre-revenue today; design partners cover <strong>100M players / $150M ARR</strong>. We earn via "Agentic Outcomes-as-a-Service" — a share of incremental uplift.
            </p>
          </div>
        </div>
      </section>

      <section>
        <TeamSection />
      </section>

      {/* Case Studies Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>Case Studies</h2>
            <ul className={styles.caseList}>
              <li className={styles.caseItem}>
                <span className={styles.caseNumber}>1</span>
                <div className={styles.caseContent}>
                  <h3 className={styles.caseTitle}>Minecraft</h3>
                  <p className={styles.caseDetail}>D7 retention ×5 via economy agent</p>
                </div>
              </li>
              <li className={styles.caseItem}>
                <span className={styles.caseNumber}>2</span>
                <div className={styles.caseContent}>
                  <h3 className={styles.caseTitle}>Inference at Light Speed</h3>
                  <p className={styles.caseDetail}>AI chat → experiment design in seconds</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <h2 className={styles.contactTitle}>Get in Touch</h2>
          <Link href="/contact" className={styles.contactButton}>
            Schedule a call with our team <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default InvestorsPage;