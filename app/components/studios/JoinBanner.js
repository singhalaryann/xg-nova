// components/studios/JoinBanner.js
import React from 'react';
import styles from '../../../styles/studios/joinBanner.module.css';
import Link from 'next/link';

const JoinBanner = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Join the next wave of design partners</h2>
        <Link href="/access" className={styles.accessButton}>
          Request Access
        </Link>
      </div>
    </section>
  );
};

export default JoinBanner;