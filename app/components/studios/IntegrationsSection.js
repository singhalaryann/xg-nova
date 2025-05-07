// components/studios/IntegrationsSection.js
import React from 'react';
import styles from '../../../styles/studios/integrationsSection.module.css';
import Image from 'next/image';
import Link from 'next/link';

const IntegrationsSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.tag}>One-click integrations</div>
        <h2 className={styles.title}>Plug Nova into your liveops workflow</h2>
        <p className={styles.subtitle}>
          Connect Nova to your favorite tools and get real-time updates where your team already works
        </p>
        
        <div className={styles.integrationsGrid}>
          <div className={styles.integrationCard}>
            <div className={styles.iconWrapper}>
              <div className={styles.slackIcon}></div>
            </div>
            <h3 className={styles.integrationTitle}>Slack</h3>
            <p className={styles.integrationDescription}>
              Receive alerts, A/B test results and deploy approvals directly to your team's channels. Manage LiveOps campaigns without leaving Slack.
            </p>
            <Link href="#" className={styles.slackButton}>
              Add to Slack
            </Link>
          </div>
          
          <div className={styles.integrationCard}>
            <div className={styles.iconWrapper}>
              <div className={styles.discordIcon}></div>
            </div>
            <h3 className={styles.integrationTitle}>Discord</h3>
            <p className={styles.integrationDescription}>
              Share real-time game performance metrics and experiment results with your community or keep them in dev-only channels for private discussions.
            </p>
            <Link href="#" className={styles.discordButton}>
              Add to Discord
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
