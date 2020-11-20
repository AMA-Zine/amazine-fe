import React from 'react';
import styles from '../app/styles.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.linkList}>
        <Link key="home-link" className={styles.homeLink} to="/">
          <div>Home</div>
        </Link>
        <Link key="about-link" to="/about">
          <div className={styles.aboutLink}>About</div>
        </Link>
      </div>
      <h1 className={styles.title}>AMAzine</h1>
      <img className={styles.logo} src={'/assets/amazine.png'} />
    </header>
  );
}
