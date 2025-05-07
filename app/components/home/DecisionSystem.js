'use client'
import React, { useState } from 'react';
import styles from '../../../styles/home/DecisionSystem.module.css';
import { Clock, BarChart2, Zap, Users, TrendingUp, Info, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const DecisionSystem = () => {
  const [activeTab, setActiveTab] = useState(1);
  
  return (
    <section className={styles.decisionSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.tagline}>AI-powered technology</span>
          <h2 className={styles.title}>Agentic Decision Making System</h2>
          <p className={styles.subtitle}>
            See how Nova's autonomous agents work together to monitor, analyze, and optimize 
            your game in real-time
          </p>
        </div>
        
        <div className={styles.tabNavigation}>
          <button 
            className={`${styles.tabButton} ${activeTab === 1 ? styles.active : ''}`}
            onClick={() => setActiveTab(1)}
          >
            1. Monitor
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 2 ? styles.active : ''}`}
            onClick={() => setActiveTab(2)}
          >
            2. Analyze
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 3 ? styles.active : ''}`}
            onClick={() => setActiveTab(3)}
          >
            3. Decide & Act
          </button>
        </div>
        
        {activeTab === 1 && (
          <div className={styles.tabContent}>
            <div className={styles.tabHeader}>
              <div className={styles.tabHeadingContainer}>
                <div className={styles.dot}></div>
                <h3 className={styles.tabHeading}>Real-time <span className={styles.highlight}>Monitoring</span></h3>
              </div>
              <div className={styles.metric}>833 events/min</div>
            </div>
            <p className={styles.tabDescription}>
              Nova continuously monitors all in-game player activity to detect patterns and anomalies
            </p>
            
            <div className={styles.statsContainer}>
              <div className={styles.statCard}>
                <div className={styles.statHeader}>
                  <div className={styles.statIcon}>
                    <Users size={20} color="#4667EE" />
                  </div>
                  <div className={styles.statTitle}>Active Users</div>
                  <div className={styles.statTag}>TRACKING</div>
                </div>
                <div className={styles.statValue}>23.4k</div>
                <div className={styles.statSubtext}>Current active users across all games</div>
                <div className={styles.statMeta}>
                  <div className={styles.statTrend}>
                    <TrendingUp size={14} className={styles.trendUp} />
                    +12% vs yesterday
                  </div>
                  <div className={styles.statUpdate}>Updated just now</div>
                </div>
              </div>
              
              <div className={styles.statCard}>
                <div className={styles.statHeader}>
                  <div className={styles.statIcon}>
                    <Zap size={20} color="#F59E0B" />
                  </div>
                  <div className={styles.statTitle}>Anomalies</div>
                  <div className={styles.statTag}>3 ACTIVE</div>
                </div>
                <div className={styles.statValue}>8</div>
                <div className={styles.statSubtext}>Detected in last 24 hours</div>
                <div className={styles.statMeta}>
                  <div className={styles.statTrend}>
                    <div className={styles.resolvedTag}>
                      <div className={styles.resolveDot}></div>
                      5 auto-resolved
                    </div>
                  </div>
                  <div className={styles.statUpdate}>Updated 3 min ago</div>
                </div>
              </div>
            </div>
            
            <div className={styles.infoBox}>
              <div className={styles.infoIcon}>
                <Info size={20} color="#43A673" />
              </div>
              <div className={styles.infoContent}>
                <div className={styles.infoTitle}>How it works: Monitoring</div>
                <p className={styles.infoText}>
                  Nova's monitoring module collects over 200 metrics from your game, tracking everything from session lengths to purchase patterns. This data is processed in real-time to detect patterns and identify potential issues before they impact your players.
                </p>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 2 && (
          <div className={styles.tabContent}>
            <div className={styles.tabHeader}>
              <div className={styles.tabHeadingContainer}>
                <div className={styles.purpleDot}></div>
                <h3 className={styles.tabHeading}>Advanced <span className={styles.purpleHighlight}>Analysis</span></h3>
              </div>
              <div className={styles.processingTag}>AI models processing</div>
            </div>
            <p className={styles.tabDescription}>
              Nova's analysis engine uses multi-model AI to extract insights from player data
            </p>
            
            <div className={styles.segmentSection}>
              <div className={styles.segmentHeader}>
                <h4 className={styles.segmentTitle}>Player Segments Identified</h4>
                <div className={styles.automatedTag}>AUTOMATED</div>
              </div>
              
              <div className={styles.segmentsGrid}>
                <div className={styles.segment}>
                  <div className={styles.segmentInfo}>
                    <div className={styles.segmentName}>High Spenders</div>
                    <div className={styles.segmentPercent}>3.2% of players</div>
                  </div>
                  <div className={styles.segmentValue}>742</div>
                </div>
                
                <div className={styles.segment}>
                  <div className={styles.segmentInfo}>
                    <div className={styles.segmentName}>Churning Players</div>
                    <div className={styles.segmentPercent}>8.7% of players</div>
                  </div>
                  <div className={styles.segmentValue}>2,043</div>
                </div>
                
                <div className={styles.segment}>
                  <div className={styles.segmentInfo}>
                    <div className={styles.segmentName}>New Players</div>
                    <div className={styles.segmentPercent}>Last 7 days</div>
                  </div>
                  <div className={styles.segmentValue}>5,621</div>
                </div>
              </div>
              
              <p className={styles.segmentDescription}>
                Nova automatically segments your player base using behavioral clustering algorithms, identifying 18 distinct player groups.
              </p>
              
              <div className={styles.linkRow}>
                <Link href="/segments" className={styles.viewLink}>
                  View all segments <ArrowRight size={16} />
                </Link>
                <div className={styles.updatedTimeStamp}>Updated 12 min ago</div>
              </div>
            </div>
            
            <div className={styles.predictiveSection}>
              <div className={styles.predictiveHeader}>
                <h4 className={styles.predictiveTitle}>Predictive Analysis</h4>
                <div className={styles.accuracyTag}>93% ACCURACY</div>
              </div>
              
              <div className={styles.predictionTable}>
                <div className={styles.tableHeader}>
                  <div className={styles.predictionType}>PREDICTION TYPE</div>
                  <div className={styles.confidence}>CONFIDENCE</div>
                  <div className={styles.timeframe}>TIMEFRAME</div>
                  <div className={styles.status}>STATUS</div>
                </div>
                
                <div className={styles.tableRow}>
                  <div className={styles.predictionType}>Churn Prediction</div>
                  <div className={styles.confidence}>96.2%</div>
                  <div className={styles.timeframe}>7 days</div>
                  <div className={styles.activeStatus}>Active</div>
                </div>
                
                <div className={styles.tableRow}>
                  <div className={styles.predictionType}>ARPDAU Forecast</div>
                  <div className={styles.confidence}>92.7%</div>
                  <div className={styles.timeframe}>30 days</div>
                  <div className={styles.activeStatus}>Active</div>
                </div>
                
                <div className={styles.tableRow}>
                  <div className={styles.predictionType}>Progression Analysis</div>
                  <div className={styles.confidence}>89.5%</div>
                  <div className={styles.timeframe}>14 days</div>
                  <div className={styles.activeStatus}>Active</div>
                </div>
              </div>
              
              <p className={styles.predictiveDescription}>
                Nova's predictive models analyze player behavior to forecast key metrics and identify opportunities for intervention.
              </p>
            </div>
            
            <div className={styles.infoBox}>
              <div className={styles.infoIcon}>
                <Info size={20} color="#7C3AED" />
              </div>
              <div className={styles.infoContent}>
                <div className={styles.infoTitle}>How it works: Analysis</div>
                <p className={styles.infoText}>
                  Nova uses multi-model deep learning to analyze player behavior patterns and predict future actions. These analysis models run continuously, updating their predictions as new data arrives and learning from the results of previous interventions.
                </p>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 3 && (
          <div className={styles.tabContent}>
            <div className={styles.tabHeader}>
              <div className={styles.tabHeadingContainer}>
                <div className={styles.greenDot}></div>
                <h3 className={styles.tabHeading}>Autonomous <span className={styles.greenHighlight}>Decisions</span></h3>
              </div>
              <div className={styles.aiActionsTag}>AI-driven actions</div>
            </div>
            <p className={styles.tabDescription}>
              Nova's decision engine takes automated actions based on real-time analysis
            </p>
            
            <div className={styles.actionsSection}>
              <div className={styles.actionsHeader}>
                <h4 className={styles.actionsTitle}>Recent Autonomous Actions</h4>
                <div className={styles.timeTag}>Last 24 hours</div>
              </div>
              
              <div className={styles.actionsList}>
                <div className={styles.actionItem}>
                  <div className={styles.actionBar} style={{ backgroundColor: '#43A673' }}></div>
                  <div className={styles.actionContent}>
                    <div className={styles.actionHeader}>
                      <h5 className={styles.actionTitle}>Economy Boost Deployed</h5>
                      <div className={styles.actionTime}>2 hours ago</div>
                    </div>
                    <p className={styles.actionDescription}>
                      2x coin reward for weekend event targeted at churning high-value players.
                    </p>
                    <div className={styles.actionStats}>
                      <div className={styles.actionStat}>+19.2% ARPDAU increase</div>
                      <div className={styles.actionTarget}>18,412 players targeted</div>
                    </div>
                  </div>
                </div>
                
                <div className={styles.actionItem}>
                  <div className={styles.actionBar} style={{ backgroundColor: '#4667EE' }}></div>
                  <div className={styles.actionContent}>
                    <div className={styles.actionHeader}>
                      <h5 className={styles.actionTitle}>Matchmaking Optimization</h5>
                      <div className={styles.actionTime}>8 hours ago</div>
                    </div>
                    <p className={styles.actionDescription}>
                      Adjusted matchmaking algorithm to improve new player experience.
                    </p>
                    <div className={styles.actionStats}>
                      <div className={styles.actionStat}>+7.8% D1 retention improved</div>
                      <div className={styles.actionTarget}>New player segment</div>
                    </div>
                  </div>
                </div>
                
                <div className={styles.actionItem}>
                  <div className={styles.actionBar} style={{ backgroundColor: '#F59E0B' }}></div>
                  <div className={styles.actionContent}>
                    <div className={styles.actionHeader}>
                      <h5 className={styles.actionTitle}>Dynamic Difficulty Adjustment</h5>
                      <div className={styles.actionTime}>18 hours ago</div>
                    </div>
                    <p className={styles.actionDescription}>
                      Modified level 32-38 difficulty curve based on player progression analysis.
                    </p>
                    <div className={styles.actionStats}>
                      <div className={styles.actionStat}>+12.4% mid-game progression rate</div>
                      <div className={styles.actionTarget}>Mid-core players</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={styles.linkRow}>
                <Link href="/actions" className={styles.viewLink}>
                  View all actions <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            
            <div className={styles.approvalSection}>
              <div className={styles.approvalHeader}>
                <h4 className={styles.approvalTitle}>Awaiting Approval</h4>
                <div className={styles.pendingTag}>2 PENDING</div>
              </div>
              
              <div className={styles.pendingList}>
                <div className={styles.pendingItem}>
                  <div className={styles.pendingContent}>
                    <div className={styles.pendingHeader}>
                      <h5 className={styles.pendingTitle}>Major Bundle Price Test</h5>
                      <div className={styles.impactTag}>HIGH IMPACT</div>
                    </div>
                    <p className={styles.pendingDescription}>
                      A/B test of 20% discount on Legendary Bundle for players who haven't purchased in 30+ days.
                    </p>
                  </div>
                  <div className={styles.pendingActions}>
                    <button className={styles.detailsButton}>Details</button>
                    <button className={styles.approveButton}>Approve</button>
                  </div>
                </div>
                
                <div className={styles.pendingItem}>
                  <div className={styles.pendingContent}>
                    <div className={styles.pendingHeader}>
                      <h5 className={styles.pendingTitle}>Energy System Overhaul</h5>
                      <div className={styles.changeTag}>MAJOR CHANGE</div>
                    </div>
                    <p className={styles.pendingDescription}>
                      Proposed restructuring of energy system to increase session frequency while maintaining revenue.
                    </p>
                  </div>
                  <div className={styles.pendingActions}>
                    <button className={styles.detailsButton}>Details</button>
                    <button className={styles.approveButton}>Approve</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.infoBox}>
              <div className={styles.infoIcon}>
                <Info size={20} color="#43A673" />
              </div>
              <div className={styles.infoContent}>
                <div className={styles.infoTitle}>How it works: Decision Making</div>
                <p className={styles.infoText}>
                  Nova's decision engine evaluates potential actions using a multi-objective optimization framework. Low-risk actions like targeted offers and UI tweaks happen automatically, while higher-impact decisions require human approval. Every action taken feeds back into the system to improve future decisions.
                </p>
              </div>
            </div>
          </div>
        )}
        
        {/* Feature cards that appear below all tabs */}
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Clock size={24} color="#43A673" />
            </div>
            <h4 className={styles.featureTitle}>24/7 Always On</h4>
            <p className={styles.featureDescription}>
              Nova works around the clock, continuously monitoring your game and taking action without requiring constant human supervision.
            </p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <BarChart2 size={24} color="#4667EE" />
            </div>
            <h4 className={styles.featureTitle}>Data-Driven Results</h4>
            <p className={styles.featureDescription}>
              Make decisions based on real player behavior rather than guesswork, leading to higher retention and increased revenue.
            </p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Zap size={24} color="#7C3AED" />
            </div>
            <h4 className={styles.featureTitle}>Rapid Response</h4>
            <p className={styles.featureDescription}>
              Detect and respond to issues within minutes instead of days, ensuring optimal player experience at all times.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DecisionSystem;