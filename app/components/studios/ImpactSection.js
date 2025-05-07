// components/studios/ImpactSection.js
import React from 'react';
import styles from '../../../styles/studios/impactSection.module.css';

const ImpactSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Nova's Real World Impact</h2>
        <p className={styles.subtitle}>Join studios already improving games for millions of players worldwide</p>
        
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <h3 className={styles.statValue}>10M+</h3>
            <div className={styles.statTitle}>Players Under Management</div>
            <p className={styles.statDescription}>
              Active players whose gaming experiences are optimized by Nova's LiveOps system
            </p>
          </div>
          
          <div className={styles.statCard}>
            <h3 className={styles.statValue}>$120M</h3>
            <div className={styles.statTitle}>Partner Revenue</div>
            <p className={styles.statDescription}>
              Annual revenue across our design partners using Nova to optimize their games
            </p>
          </div>
          
          <div className={styles.statCard}>
            <h3 className={styles.statValue}>1Bn+</h3>
            <div className={styles.statTitle}>Events Processed</div>
            <p className={styles.statDescription}>
              Daily player events analyzed by Nova's AI engine to deliver real-time insights
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;