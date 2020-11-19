import React from 'react';
import styles from '../app/styles.css';
import aboutstyles from './About.css';
import { Link } from 'react-router-dom';


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
          <img src={'/assets/sarah-picture.jpg'} alt="portrait of Sarah" className={aboutstyles.bioPic}></img>
          <Link key='sarah' to='/sarah'>
          <h3 className={styles.titleFont}>I'm Sarah.</h3>
          </Link>
          <p className={styles.bodyFont}>Ask Me Anything!</p>
        </article>

        <article className={`
          ${styles.article} 
          ${aboutstyles.rowBottom}
          ${aboutstyles.columnLeft}
        `}>
          <img src={'/assets/michelle-portrait.JPG'} alt="portrait of Michelle" className={aboutstyles.bioPic}></img>
          <Link key='michelle' to='/michelle'>
          <h3 className={styles.titleFont}>I'm Michelle.</h3>
          </Link>
          <p className={styles.bodyFont}>Ask Me Anything!</p>
        </article>

        <article className={`
          ${styles.article} 
          ${aboutstyles.rowTop}
          ${aboutstyles.columnRight}
        `}>
          <img src={'/assets/patrick-picture.jpg'} alt="portrait of Patrick" className={aboutstyles.bioPic}></img>
          <Link key='patrick' to='/patrick'>
          <h3 className={styles.titleFont}>I'm Patrick.</h3>
          </Link>
          <p className={styles.bodyFont}>Ask Me Anything!</p>
        </article>

        <article className={`
          ${styles.article} 
          ${aboutstyles.rowBottom}
          ${aboutstyles.columnRight}
        `}>
          <img src={'/assets/josh-picture.jpeg'} alt="portrait of Josh" className={aboutstyles.bioPic}></img>
          <Link key='josh' to='/josh'>
          <h3 className={styles.titleFont}>I'm Josh.</h3>
          </Link>
          <p className={styles.bodyFont}>Ask Me Anything!</p>
        </article>

      </div>
      <hr />

    </div>
  )
}
