import React from 'react';
import styles from '../app/styles.css';
import aboutstyles from './About.css';
import { Link } from 'react-router-dom';
import sarah from '../../assets/sarah-picture.jpg';
import michelle from '../../assets/michelle-portrait.jpg';
import josh from '../../assets/josh-picture.jpeg';
import patrick from '../../assets/patrick-picture.jpg';

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
          <img src={sarah} alt="portrait of Sarah" className={aboutstyles.bioPic}></img>
          <Link key='sarah' to='/sarah'>
          <h3 className={styles.titleFont}>I'm Sarah. Ask Me Anything!</h3>
          </Link>
          <p className={styles.bodyFont}>Article Description</p>
        </article>

        <article className={`
          ${styles.article} 
          ${aboutstyles.rowBottom}
          ${aboutstyles.columnLeft}
        `}>
          <img src={michelle} alt="portrait of Michelle" className={aboutstyles.bioPic}></img>
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
          <img src={patrick} alt="portrait of Patrick" className={aboutstyles.bioPic}></img>
          <Link key='patrick' to='/patrick'>
          <h3 className={styles.titleFont}>I'm Patrick. Ask Me Anything!</h3>
          </Link>
          <p className={styles.bodyFont}>Article Description</p>
        </article>

        <article className={`
          ${styles.article} 
          ${aboutstyles.rowBottom}
          ${aboutstyles.columnRight}
        `}>
          <img src={josh} alt="portrait of Josh" className={aboutstyles.bioPic}></img>
          <Link key='josh' to='/josh'>
          <h3 className={styles.titleFont}>I'm Josh. Ask Me Anything!</h3>
          </Link>
          <p className={styles.bodyFont}>Article Description</p>
        </article>

      </div>
      <hr />

    </div>
  )
}
