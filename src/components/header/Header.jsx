import React from 'react';
import styles from '../app/styles.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>The Most Amazine Zine You Have Ever Seen!</h1>
      <img className={styles.logo} src={'/assets/amazine.png'} />
      <div className={styles.linkList}>
        <Link key="home-link" to="/">
          <div>Home</div>
        </Link>
        <Link key="about-link" to="/about">
          <div>About</div>
        </Link>
      </div>
    </header>
  );
}
