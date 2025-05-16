'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../../styles/common/Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Prevent background scrolling when menu is open
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    
    // Close menu on escape key
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/" onClick={closeMenu}>
            <Image
              src="/assets/X-gaming-logo.png"
              alt="X-Gaming Logo"
              width={154}
              height={42}
              priority
              className={styles.logoImage}
            />
          </Link>
        </div>
        
        <button
          className={styles.mobileMenuButton}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <div className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>
        </button>
        
        <div className={`${styles.overlay} ${isMenuOpen ? styles.active : ''}`} onClick={closeMenu}></div>
        
        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          <ul className={styles.navLinks}>
            <li>
              <Link href="/studios" className={styles.navLink} onClick={closeMenu}>
                For Studios
              </Link>
            </li>
            <li>
              <Link href="/investors" className={styles.navLink} onClick={closeMenu}>
                For Investors
              </Link>
            </li>
            <li className={styles.mobileOnly}>
              <Link href="/demo" className={styles.navLink} onClick={closeMenu}>
                Book Demo
              </Link>
            </li>
          </ul>
          <Link href="/demo" className={styles.demoButton} onClick={closeMenu}>
            Book Demo
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;