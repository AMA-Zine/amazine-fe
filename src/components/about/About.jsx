import React from 'react';
import styles from '../app/styles.css';
import aboutstyles from './About.css';
import { Link } from 'react-router-dom';
import MichelleDetail from '../about-details/MichelleDetail';

export default function About() {
  return (
    <div className={`${styles.headerSpace} ${styles.bottomSpace}`}>
    <hr />
    <article className={styles.bannerArticle}>
      <h1 className={styles.normalGap}>
        About Us
      </h1>
    </article>
    <hr />

    <div className={aboutstyles.aboutGrid}>
    <article className={`
          ${styles.article} 
          ${aboutstyles.rowTop} 
          ${aboutstyles.columnLeft}
        `}>
          <img src="http://placekitten.com/300/250" alt="kitten"></img>
          <h3 className={styles.titleFont}>I'm Sarah. Ask Me Anything!</h3>
          <p className={styles.bodyFont}>Article Description</p>
        </article>

        <article className={`
          ${styles.article} 
          ${aboutstyles.rowBottom}
          ${aboutstyles.columnLeft}
        `}>
          <img src="http://placekitten.com/300/250" alt="kitten"></img>
          <Link key='michelle' to='/michelle'>
          <h3 className={styles.titleFont}>I'm Michelle. Ask Me Anything!</h3>
          </Link>
          <p className={styles.bodyFont}>Article Description</p>
        </article>

        <article className={`
          ${styles.article} 
          ${aboutstyles.rowTop}
          ${aboutstyles.columnRight}
        `}>
          <img src="http://placekitten.com/300/250" alt="kitten"></img>
          <h3 className={styles.titleFont}>I'm Patrick. Ask Me Anything!</h3>
          <p className={styles.bodyFont}>Article Description</p>
        </article>

        <article className={`
          ${styles.article} 
          ${aboutstyles.rowBottom}
          ${aboutstyles.columnRight}
        `}>
          <img src="http://placekitten.com/300/250" alt="kitten"></img>
          <h3 className={styles.titleFont}>I'm Josh. Ask Me Anything!</h3>
          <p className={styles.bodyFont}>Article Description</p>
        </article>

      </div>
      <hr />

    </div>
  )
}
