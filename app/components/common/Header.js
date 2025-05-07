'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import styles from '../../../styles/common/Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/assets/X-gaming-logo.png"
              alt="X-Gaming Logo"
              width={154}
              height={42}
              priority
            />
          </Link>
        </div>
        
        <button className={styles.mobileMenuButton} onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          <ul className={styles.navLinks}>
            <li><Link href="/studios" className={styles.navLink}>For Studios</Link></li>
            <li><Link href="/investors" className={styles.navLink}>For Investors</Link></li>
          </ul>
          <Link href="/demo" className={styles.demoButton}>
            Book Demo
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;