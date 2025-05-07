// components/studios/AgentLibrarySection.js
import React from 'react';
import styles from '../../../styles/studios/agentLibrarySection.module.css';
import { Lock, RefreshCw, Zap, Package, Calendar, Layout } from 'lucide-react';

const AgentLibrarySection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Agent Library</h2>
        <p className={styles.subtitle}>
          Integrate intelligent agents into your LiveOps workflow to automate and optimize your game's performance
        </p>
        
        <div className={styles.agentsGrid}>
          <div className={styles.agentCard}>
            <div className={styles.agentHeader}>
              <div className={styles.agentIcon}>
                <Lock size={20} color="#43A673" />
              </div>
              <h3 className={styles.agentTitle}>Personalized Storefront AI</h3>
              <button className={styles.addButton}>+ Add Now</button>
            </div>
            <p className={styles.agentDescription}>
              Auto-curates and personalizes prices and discounts for players to lift purchase conversions immediately.
            </p>
            <div className={styles.agentFooter}>
              <div className={styles.rating}>
                <div className={styles.stars}>★ 4.6</div>
                <div className={styles.reviews}>(423)</div>
              </div>
              <div className={styles.price}>Free</div>
            </div>
          </div>
          
          <div className={styles.agentCard}>
            <div className={styles.agentHeader}>
              <div className={styles.agentIcon}>
                <RefreshCw size={20} color="#43A673" />
              </div>
              <h3 className={styles.agentTitle}>Win-Back Campaign Orchestrator</h3>
              <button className={styles.addButton}>+ Add Now</button>
            </div>
            <p className={styles.agentDescription}>
              Detects at-risk or lapsed cohorts and fires tailored push, e-mail, or in-game rewards to re-activate them.
            </p>
            <div className={styles.agentFooter}>
              <div className={styles.rating}>
                <div className={styles.stars}>★ 4.2</div>
                <div className={styles.reviews}>(356)</div>
              </div>
              <div className={styles.price}>Free</div>
            </div>
          </div>
          
          <div className={styles.agentCard}>
            <div className={styles.agentHeader}>
              <div className={styles.agentIcon}>
                <Zap size={20} color="#43A673" />
              </div>
              <h3 className={styles.agentTitle}>Rapid Experiment Engine</h3>
              <button className={styles.addButton}>+ Add Now</button>
            </div>
            <p className={styles.agentDescription}>
              One-click A/B & multi-variant tests on prices, content, or economy values; auto-promotes winners.
            </p>
            <div className={styles.agentFooter}>
              <div className={styles.rating}>
                <div className={styles.stars}>★ 4.1</div>
                <div className={styles.reviews}>(332)</div>
              </div>
              <div className={styles.price}>Free</div>
            </div>
          </div>
          
          <div className={styles.agentCard}>
            <div className={styles.agentHeader}>
              <div className={styles.agentIcon}>
                <Package size={20} color="#43A673" />
              </div>
              <h3 className={styles.agentTitle}>Bundle Optimization</h3>
              <button className={styles.addButton}>+ Add Now</button>
            </div>
            <p className={styles.agentDescription}>
              AI agents A/B-test creative, copy, price & order on 100s of bundle variants across 1,000s of cohorts, surfacing daily top performers.
            </p>
            <div className={styles.agentFooter}>
              <div className={styles.rating}>
                <div className={styles.stars}>★ 4.1</div>
                <div className={styles.reviews}>(324)</div>
              </div>
              <div className={styles.price}>Free</div>
            </div>
          </div>
          
          <div className={styles.agentCard}>
            <div className={styles.agentHeader}>
              <div className={styles.agentIcon}>
                <Calendar size={20} color="#43A673" />
              </div>
              <h3 className={styles.agentTitle}>Seasonal Event Scheduler</h3>
              <button className={styles.addButton}>+ Add Now</button>
            </div>
            <p className={styles.agentDescription}>
              Plans, launches, and measures limited-time modes or holiday events to spike engagement & spending.
            </p>
            <div className={styles.agentFooter}>
              <div className={styles.rating}>
                <div className={styles.stars}>★ 3.4</div>
                <div className={styles.reviews}>(106)</div>
              </div>
              <div className={styles.price}>Free</div>
            </div>
          </div>
          
          <div className={styles.agentCard}>
            <div className={styles.agentHeader}>
              <div className={styles.agentIcon}>
                <Layout size={20} color="#43A673" />
              </div>
              <h3 className={styles.agentTitle}>Battle Pass Builder</h3>
              <button className={styles.addButton}>+ Add Now</button>
            </div>
            <p className={styles.agentDescription}>
              Generates progression tracks, challenges, and reward tables; ships a ready-to-sell season pass.
            </p>
            <div className={styles.agentFooter}>
              <div className={styles.rating}>
                <div className={styles.stars}>★ 3.1</div>
                <div className={styles.reviews}>(101)</div>
              </div>
              <div className={styles.price}>Free</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentLibrarySection;