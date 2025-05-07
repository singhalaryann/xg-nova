// components/Footer.js
import React from 'react';
import styles from '../../../styles/common/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>© 2025 X-Gaming · All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;