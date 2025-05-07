'use client'
import React, { useState } from 'react';
import styles from '../../../styles/home/experienceDemo.module.css';
import { Zap } from 'lucide-react';
import Link from 'next/link';

const ExperienceDemo = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, title: '1. Anomaly Detection' },
    { id: 2, title: '2. Root Cause Analysis' },
    { id: 3, title: '3. Recommendation' },
    { id: 4, title: '4. Implementation' },
    { id: 5, title: '5. Results Monitoring' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 1:
        return (
          <div className={styles.tabContent}>
            <h3 className={styles.contentTitle}>1. Anomaly Detection</h3>
            <p className={styles.contentDescription}>
              Nova continuously monitors your game data and automatically detects potential issues.
            </p>
            <div className={styles.actionButtonContainer}>
              <button className={styles.actionButton}>
                <Zap size={16} /> Detect Anomalies
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className={styles.tabContent}>
            <h3 className={styles.contentTitle}>2. Root Cause Analysis</h3>
            <p className={styles.contentDescription}>
              Nova analyzes player behavior patterns to identify the root cause of the issue.
            </p>
            <div className={styles.actionButtonContainer}>
              <button className={styles.actionButton}>
                <Zap size={16} /> Analyze Data
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className={styles.tabContent}>
            <h3 className={styles.contentTitle}>3. Recommendation</h3>
            <p className={styles.contentDescription}>
              Based on the analysis, Nova recommends targeted actions to address the issue.
            </p>
            <div className={styles.actionButtonContainer}>
              <button className={styles.actionButton}>
                <Zap size={16} /> Get Recommendations
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className={styles.tabContent}>
            <h3 className={styles.contentTitle}>4. Implementation</h3>
            <p className={styles.contentDescription}>
              Nova can automatically implement the changes or prepare them for your approval.
            </p>
            <div className={styles.actionButtonContainer}>
              <button className={styles.actionButton}>
                <Zap size={16} /> Implement Changes
              </button>
            </div>
          </div>
        );
      case 5:
        return (
          <div className={styles.tabContent}>
            <h3 className={styles.contentTitle}>5. Results Monitoring</h3>
            <p className={styles.contentDescription}>
              Nova continuously monitors the impact of the changes and reports the results.
            </p>
            <div className={styles.actionButtonContainer}>
              <button className={styles.actionButton}>
                <Zap size={16} /> View Results
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className={styles.experienceSection}>
      <div className={styles.container}>
        <div className={styles.demoTag}>Interactive Demo</div>
        
        <h2 className={styles.title}>Experience Nova in Action</h2>
        
        <p className={styles.subtitle}>
          See how Nova identifies issues, analyzes data, and takes action to improve your game's performance
        </p>
        
        <div className={styles.tabsContainer}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        
        <div className={styles.dashboardContainer}>
          <div className={styles.dashboardHeader}>
            <div className={styles.windowControls}>
              <span className={styles.controlDot} style={{ backgroundColor: '#FF5F56' }}></span>
              <span className={styles.controlDot} style={{ backgroundColor: '#FFBD2E' }}></span>
              <span className={styles.controlDot} style={{ backgroundColor: '#27C93F' }}></span>
            </div>
            <div className={styles.dashboardTitle}>Nova LiveOps Dashboard</div>
          </div>
          
          <div className={styles.dashboardContent}>
            {renderTabContent()}
          </div>
        </div>
        
        <div className={styles.ctaSection}>
          <p className={styles.ctaText}>Ready to experience the full power of Nova?</p>
          <Link href="/demo" className={styles.ctaButton}>
            Request a Full Demo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExperienceDemo;