// components/LiveOpsSection.js
import React from 'react';
import styles from '../../../styles/home/LiveOpsSection.module.css';
import { Clipboard, Tag, BarChart2, Database, Zap } from 'lucide-react';

const LiveOpsSection = () => {
  return (
    <section className={styles.liveOpsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>How Nova puts LiveOps on autopilot</h2>
        
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.iconWrapper} style={{ backgroundColor: 'rgba(108, 178, 142, 0.1)' }}>
              <Clipboard size={24} color="#43A673" />
            </div>
            <h3 className={styles.featureTitle}>Role-aware Dashboards</h3>
            <p className={styles.featureDescription}>
              Pick your role — Ad PM, Economy Designer, Store PM — and Nova speaks your language from the first click.
            </p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.iconWrapper} style={{ backgroundColor: 'rgba(108, 178, 142, 0.1)' }}>
              <Tag size={24} color="#43A673" />
            </div>
            <h3 className={styles.featureTitle}>Real-time Data Labeling</h3>
            <p className={styles.featureDescription}>
              Agents auto-label raw telemetry and player feedback in minutes, making it instantly AI-ready.
            </p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.iconWrapper} style={{ backgroundColor: 'rgba(108, 178, 142, 0.1)' }}>
              <BarChart2 size={24} color="#43A673" />
            </div>
            <h3 className={styles.featureTitle}>Zero-SQL Insights</h3>
            <p className={styles.featureDescription}>
              Click Investigate: an exec summary appears in seconds. Hover charts to get segment-specific recommendations.
            </p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.iconWrapper} style={{ backgroundColor: 'rgba(108, 178, 142, 0.1)' }}>
              <Database size={24} color="#43A673" />
            </div>
            <h3 className={styles.featureTitle}>Multi Agent Library</h3>
            <p className={styles.featureDescription}>
              Drag-and-drop point solutions for ad pacing, economy boosts, progression tweaks and more.
            </p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.iconWrapper} style={{ backgroundColor: 'rgba(108, 178, 142, 0.1)' }}>
              <Zap size={24} color="#43A673" />
            </div>
            <h3 className={styles.featureTitle}>One-Click Launch & Roll-out</h3>
            <p className={styles.featureDescription}>
              Set a goal, hit Launch. Nova ships, tracks uplift, then posts results in Slack: "Retention ↑7%. Roll out to the final 15%?"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveOpsSection;