// components/studios/CommandCenterSection.js
import React from 'react';
import styles from '../../../styles/studios/commandCenterSection.module.css';
import { Lock, Zap, MessageSquare, Database, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CommandCenterSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.tag}>REVENUE-FOCUSED LIVEOPS</div>
          <h2 className={styles.title}>Your intelligent <span className={styles.highlight}>LiveOps Command Center</span></h2>
          <p className={styles.subtitle}>Focus on what matters most: driving revenue, retention, and player experience</p>
        </div>

        <div className={styles.grid}>
          {/* Card 1: In-client Web-store Personalization */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={`${styles.iconWrapper} ${styles.iconGreen}`}>
                <Lock size={22} />
              </div>
              <h3 className={styles.cardTitle}>In-client Web-store Personalization</h3>
              <div className={styles.tag2}>+35% ARPU</div>
            </div>

            <div className={styles.features}>
              <div className={styles.feature}>
                <Check size={16} className={styles.checkIcon} />
                <p>Automatic price optimization for player segments</p>
              </div>
              <div className={styles.feature}>
                <Check size={16} className={styles.checkIcon} />
                <p>+300% store visit uplift through tailored recommendations</p>
              </div>
            </div>

            <div className={styles.recommendedBundle}>
              <div className={styles.bundleHeader}>
                <div className={styles.bundleLabel}>RECOMMENDED BUNDLE</div>
                <div className={styles.discountTag}>30% OFF</div>
              </div>
              <div className={styles.bundleName}>Diamond Pack + VIP Badge</div>
              <div className={styles.bundleBar}>
                <div className={styles.bundleBarFill}></div>
              </div>
              <div className={styles.bundleDetails}>
                <div className={styles.playerID}>For player ID: #28491</div>
                <div className={styles.probability}>83% purchase probability</div>
              </div>
            </div>

            <div className={styles.sectionTitle}>How it works</div>
            <p className={styles.description}>
              Nova seamlessly integrates with your existing WebView checkout system or store, automatically tailoring prices and bundles based on player behavior and spending patterns.
            </p>

            <div className={styles.integration}>
              <div className={styles.integrationLabel}>Similar to:</div>
              <div className={styles.integrationBadges}>
                <span className={styles.badge}>Xsolla</span>
                <span className={styles.badge}>Maison</span>
              </div>
              <Link href="#" className={styles.learnMore}>Learn More</Link>
            </div>
          </div>

          {/* Card 2: Automated Creative-Tagging & ROAS Segmentation */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={`${styles.iconWrapper} ${styles.iconBlue}`}>
                <Zap size={22} />
              </div>
              <h3 className={styles.cardTitle}>Automated Creative-Tagging & ROAS Segmentation</h3>
              <div className={styles.tag2}>&#60;1 WEEK SETUP</div>
            </div>

            <div className={styles.features}>
              <div className={styles.feature}>
                <Check size={16} className={styles.checkIcon} />
                <p>Server-side agents that read MMP/ad-network APIs</p>
              </div>
              <div className={styles.feature}>
                <Check size={16} className={styles.checkIcon} />
                <p>Zero client work required, quick spin-up time</p>
              </div>
            </div>

            <div className={styles.performanceMetrics}>
              <div className={styles.performanceHeader}>
                <div className={styles.performanceTitle}>Campaign Performance</div>
                <div className={styles.periodTag}>Last 7 days</div>
              </div>
              <div className={styles.metricsGrid}>
                <div className={styles.metric}>
                  <div className={styles.metricLabel}>Impressions</div>
                  <div className={styles.metricValue}>583,421</div>
                </div>
                <div className={styles.metric}>
                  <div className={styles.metricLabel}>Installs</div>
                  <div className={styles.metricValue}>14,872</div>
                </div>
                <div className={styles.metric}>
                  <div className={styles.metricLabel}>ROAS</div>
                  <div className={styles.metricValue}>3.2x</div>
                </div>
              </div>
            </div>

            <div className={styles.sectionTitle}>How it works</div>
            <p className={styles.description}>
              Nova automatically pulls data from your MMPs (Adjust, AppsFlyer, etc.) and ad networks, tagging creatives and user segments to optimize ROAS without any engineering effort.
            </p>

            <div className={styles.integration}>
              <div className={styles.integrationLabel}>Integrates with:</div>
              <div className={styles.integrationBadges}>
                <span className={styles.badge}>AppsFlyer</span>
                <span className={styles.badge}>Adjust</span>
              </div>
              <Link href="#" className={`${styles.learnMore} ${styles.blueButton}`}>Learn More</Link>
            </div>
          </div>

          {/* Card 3: Slack/Discord "Micro-Playbook" Packs */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={`${styles.iconWrapper} ${styles.iconPurple}`}>
                <MessageSquare size={22} />
              </div>
              <h3 className={styles.cardTitle}>Slack/Discord "Micro-Playbook" Packs</h3>
              <div className={styles.tag2}>28% VIRALITY</div>
            </div>

            <div className={styles.features}>
              <div className={styles.feature}>
                <Check size={16} className={styles.checkIcon} />
                <p>One-click push of bundles, boosters, and offers</p>
              </div>
              <div className={styles.feature}>
                <Check size={16} className={styles.checkIcon} />
                <p>Deploys in minutes via webhook integration</p>
              </div>
              <div className={styles.feature}>
                <Check size={16} className={styles.checkIcon} />
                <p>Drives PLG (Product-Led Growth) referrals</p>
              </div>
            </div>

            <div className={styles.chatExample}>
              <div className={styles.chatHeader}>
                <div className={styles.chatIcon}>
                  <div className={styles.discordIcon}></div>
                </div>
                <div className={styles.chatInfo}>
                  <div className={styles.chatChannel}>#game-team</div>
                  <div className={styles.chatTime}>Today at 10:32 AM</div>
                </div>
              </div>
              <div className={styles.chatMessage}>
                <p><span className={styles.chatBotName}>@Nova: </span>Deploy the "Weekend Warrior" bundle to all users who haven't purchased in 14+ days with a 40% discount</p>
              </div>
              <div className={styles.chatResponse}>
                <p><span className={styles.chatBotName}>Nova Bot: </span>✅ Bundle deployed to 2,473 users! Will send you metrics in 24h.</p>
              </div>
            </div>

            <div className={styles.sectionTitle}>How it works</div>
            <p className={styles.description}>
              Your team can launch pre-built or custom LiveOps campaigns via simple chat commands in Slack or Discord, with real-time feedback and metrics reporting.
            </p>

            <div className={styles.integration}>
              <div className={styles.integrationLabel}>Works with:</div>
              <div className={styles.integrationBadges}>
                <span className={styles.badge}>Slack</span>
                <span className={styles.badge}>Discord</span>
              </div>
              <Link href="#" className={`${styles.learnMore} ${styles.purpleButton}`}>Learn More</Link>
            </div>
          </div>

          {/* Card 4: High-Churn Booster Recipes */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={`${styles.iconWrapper} ${styles.iconOrange}`}>
                <Zap size={22} />
              </div>
              <h3 className={styles.cardTitle}>High-Churn Booster Recipes</h3>
              <div className={styles.tag2}>+3 PPT RETENTION</div>
            </div>

            <div className={styles.features}>
              <div className={styles.feature}>
                <Check size={16} className={styles.checkIcon} />
                <p>Remote-config soft-currency/premium boosts</p>
              </div>
              <div className={styles.feature}>
                <Check size={16} className={styles.checkIcon} />
                <p>Uses Firebase Remote Config or similar</p>
              </div>
              <div className={styles.feature}>
                <Check size={16} className={styles.checkIcon} />
                <p>Hours of work instead of days or weeks</p>
              </div>
            </div>

            <div className={styles.retentionChart}>
              <div className={styles.chartBars}>
                <div className={styles.chartBar}>
                  <div className={styles.barFill} style={{ width: '80%' }}></div>
                  <div className={styles.barLabel}>DAY 1</div>
                </div>
                <div className={styles.chartBar}>
                  <div className={styles.barFill} style={{ width: '60%' }}></div>
                  <div className={styles.barLabel}>DAY 7</div>
                </div>
                <div className={styles.chartBar}>
                  <div className={styles.barFill} style={{ width: '40%' }}></div>
                  <div className={styles.barLabel}>DAY 30</div>
                </div>
              </div>
            </div>

            <div className={styles.sectionTitle}>How it works</div>
            <p className={styles.description}>
              Nova identifies users at high risk of churning and automatically applies customized retention boosters through your remote config system, resulting in typical 3-5 percentage point retention improvements.
            </p>

            <div className={styles.integration}>
              <div className={styles.integrationLabel}>Compatible with:</div>
              <div className={styles.integrationBadges}>
                <span className={styles.badge}>Firebase</span>
                <span className={styles.badge}>Custom RC</span>
              </div>
              <Link href="#" className={`${styles.learnMore} ${styles.orangeButton}`}>Learn More</Link>
            </div>
          </div>

          {/* Card 5: SDK-less Log Streaming */}
          <div className={`${styles.card} ${styles.wideCard}`}>
            <div className={styles.cardHeader}>
              <div className={`${styles.iconWrapper} ${styles.iconTeal}`}>
                <Database size={22} />
              </div>
              <h3 className={styles.cardTitle}>SDK-less Log Streaming</h3>
              <div className={styles.tag2}>HOURS NOT DAYS</div>
            </div>

            <div className={styles.logStreamingFeatures}>
              <div className={styles.logFeature}>
                <div className={styles.logFeatureHeader}>
                  <div className={styles.logFeatureIcon}>S3/HTTP Log Drop</div>
                </div>
                <p className={styles.logFeatureDescription}>
                  Simply drop your game logs into S3 or send via HTTP - no custom SDK integration required
                </p>
              </div>

              <div className={styles.logFeature}>
                <div className={styles.logFeatureHeader}>
                  <div className={styles.logFeatureIcon}>Schema Auto-Mapper</div>
                </div>
                <p className={styles.logFeatureDescription}>
                  Nova automatically maps your existing log schema with minimal configuration time
                </p>
              </div>

              <div className={styles.logFeature}>
                <div className={styles.logFeatureHeader}>
                  <div className={styles.logFeatureIcon}>Instant Insights</div>
                </div>
                <p className={styles.logFeatureDescription}>
                  Access powerful analytics within hours, not days or weeks of development time
                </p>
              </div>
            </div>

            <div className={styles.logPerfect}>
              <p>Perfect for Indies: SDK-less integration cuts data setup from days to hours, unlocking analytics for small teams.</p>
              <Link href="#" className={`${styles.learnMore} ${styles.tealButton}`}>Learn More</Link>
            </div>
          </div>
        </div>

        <div className={styles.demoContainer}>
          <Link href="/demo" className={styles.demoButton}>
            Request a Demo <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommandCenterSection;