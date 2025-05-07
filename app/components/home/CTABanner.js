// components/CTABanner.js
import React from 'react';
import styles from '../../../styles/home/ctaBanner.module.css';
import Link from 'next/link';

const CTABanner = () => {
  return (
    <section className={styles.ctaBanner}>
      <div className={styles.container}>
        <h2 className={styles.title}>Ready to ship LiveOps like a AAA studio?</h2>
        <Link href="/access" className={styles.accessButton}>
          Request Access
        </Link>
      </div>
    </section>
  );
};

export default CTABanner;