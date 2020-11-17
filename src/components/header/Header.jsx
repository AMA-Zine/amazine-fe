import React from 'react';
import styles from '../app/styles.css';

export default function Header() {
  return (
    <header>
      <h1>The Most Amazine Zine You Have Ever Seen!</h1>
      <div className={styles.linkList}>
        <div>Home</div>
        <div>About</div>
      </div>
    </header>
  );
}

