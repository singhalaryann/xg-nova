// components/studios/CaseStudiesSection.js
import React from 'react';
import styles from '../../../styles/studios/caseStudiesSection.module.css';
import { Check } from 'lucide-react';

const CaseStudiesSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>What teams do with Nova</h2>
        
        <div className={styles.casesGrid}>
          <div className={styles.caseCard}>
            <div className={styles.caseHeader}>
              <Check size={18} className={styles.checkIcon} />
              <div className={styles.caseTag}>Case Study</div>
            </div>
            <h3 className={styles.caseTitle}>Minecraft economy agent</h3>
            <p className={styles.caseResult}>
              <span className={styles.caseHighlight}>D7 retention +5%</span> through automated economy balancing
            </p>
          </div>
          
          <div className={styles.caseCard}>
            <div className={styles.caseHeader}>
              <Check size={18} className={styles.checkIcon} />
              <div className={styles.caseTag}>Case Study</div>
            </div>
            <h3 className={styles.caseTitle}>Deep-session fatigue fix</h3>
            <p className={styles.caseResult}>
              <span className={styles.caseHighlight}>+7% retention</span> in one week by addressing player burnout patterns
            </p>
          </div>
          
          <div className={styles.caseCard}>
            <div className={styles.caseHeader}>
              <Check size={18} className={styles.checkIcon} />
              <div className={styles.caseTag}>Case Study</div>
            </div>
            <h3 className={styles.caseTitle}>Offer-wall agent</h3>
            <p className={styles.caseResult}>
              <span className={styles.caseHighlight}>15% ARPDAU lift</span> on F2P mobile games via personalized offers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;