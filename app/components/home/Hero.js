// components/Hero.js
import React from 'react';
import styles from '../../../styles/home/Hero.module.css';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.contentSide}>
          <div className={styles.tagline}>
            <span className={styles.dot}></span>
            <p>Industry-leading LiveOps AI technology</p>
          </div>
          
          <h1 className={styles.heading}>
            X-Gaming: <span className={styles.dark}>AI Copilot</span> <br />
            to <span className={styles.highlighted}>10×</span> live ops <br />
            productivity.
          </h1>
          
          <p className={styles.subheading}>
            Your always on LiveOps co-pilot that predicts trends, flags issues, <br />
            and boosts player engagement—<em>before</em> problems surface.
          </p>
          
          <a href="#access" className={styles.accessButton}>
            Request Access <span className={styles.arrow}>→</span>
          </a>
        </div>
        
        <div className={styles.dashboardSide}>
          <div className={styles.dashboardCard}>
            <div className={styles.dashboardHeader}>
              <div className={styles.dashboardTitle}>
                <span className={styles.monitorIcon}>
                  <Image 
                    src="/monitor-icon.png" 
                    alt="Monitor" 
                    width={20} 
                    height={20} 
                  />
                </span>
                Nova LiveOps Dashboard
              </div>
              <div className={styles.dashboardControls}>
                <span className={styles.controlDot}></span>
                <span className={styles.controlDot}></span>
                <span className={styles.controlDot}></span>
              </div>
            </div>
            
            <div className={styles.alertCard}>
              <div className={styles.alertHeader}>
                <h3>Player Retention Alert</h3>
                <span className={styles.urgentTag}>Urgent</span>
              </div>
              <p className={styles.alertDescription}>
                7% drop in D1 retention detected among new players since v2.3 update.
              </p>
              <div className={styles.alertActions}>
                <button className={styles.investigateButton}>Investigate</button>
                <button className={styles.fixNowButton}>Fix Now</button>
              </div>
            </div>
            
            <div className={styles.boostCard}>
              <div className={styles.boostHeader}>
                <h3>Economy Boost Ready</h3>
                <span className={styles.recommendedTag}>Recommended</span>
              </div>
              <p className={styles.boostDescription}>
                Target whale segment with 2x currency weekend boost to improve ARPDAU.
              </p>
              <div className={styles.boostActions}>
                <div className={styles.agents}>
                  <div className={styles.agentIndicator}></div>
                  <span className={styles.agentText}>2 agents collaborated</span>
                </div>
                <button className={styles.launchNowButton}>Launch Now</button>
              </div>
              <div className={styles.aiSystemStatus}>
                <span className={styles.aiIcon}></span>
                AI system active
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;