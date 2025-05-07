// components/studios/FeaturesSection.js
import React from 'react';
import styles from '../../../styles/studios/featuresSection.module.css';
import { Search, Users, Database, MessageSquare } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h2 className={styles.title}>Ship updates in hours, not weeks.</h2>
          <p className={styles.subtitle}>
            Nova is the always-on AI co-pilot that lets lean teams move at AAA speed.
          </p>
        </div>
      </section>
      
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Search size={24} color="#43A673" />
              </div>
              <h3 className={styles.featureTitle}>
                Investigate <span className={styles.featureSubtitle}>(zero SQL)</span>
              </h3>
              <p className={styles.featureDescription}>
                Executive summaries in seconds. Understand the why behind every dip or spike.
              </p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Users size={24} color="#43A673" />
              </div>
              <h3 className={styles.featureTitle}>Seg-Aware Recommendations</h3>
              <p className={styles.featureDescription}>
                Hover insights → instant actions for Deep Sessioners, Whales, Newbies, and more.
              </p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Database size={24} color="#43A673" />
              </div>
              <h3 className={styles.featureTitle}>Agent Library</h3>
              <p className={styles.featureDescription}>
                Select point solutions—ad pacing, offer walls, economy boosts—and launch with one click.
              </p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <MessageSquare size={24} color="#43A673" />
              </div>
              <h3 className={styles.featureTitle}>Slack-Native Workflow</h3>
              <p className={styles.featureDescription}>
                Nova posts uplift cards ("Retention ↑7%") and rollout prompts directly in Slack.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;