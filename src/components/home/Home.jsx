import React from 'react';
import styles from '../app/styles.css';

export default function Home() {
  return (
    <div className={`${styles.headerSpace} ${styles.bottomSpace}`}>
      <hr />
      <article className={styles.bannerArticle}>
        <img src="http://placekitten.com/300/50" alt="kitten"></img>
        <h2 className={styles.normalGap}>
          Everything You Need to Know About Cool Things and Stuff
        </h2>
      </article>
      <hr />
      <div className={styles.articleGrid}>
        <article className={`
          ${styles.featured}
        `}>
          <img src="http://placekitten.com/600/400" alt="kitten"></img>
          <h3 className={styles.titleFont}>Featured Article</h3>
          <p className={styles.bodyFont}>Article Description</p>
        </article>
        <article className={`
          ${styles.article} 
          ${styles.rowTop} 
          ${styles.columnLeft}
        `}>
          <img src="http://placekitten.com/300/250" alt="kitten"></img>
          <h3 className={styles.titleFont}>Left Top Article</h3>
          <p className={styles.bodyFont}>Article Description</p>
        </article>
        <article className={`
          ${styles.article} 
          ${styles.rowBottom}
          ${styles.columnLeft}
        `}>
          <img src="http://placekitten.com/300/250" alt="kitten"></img>
          <h3 className={styles.titleFont}>Left Bottom Article</h3>
          <p className={styles.bodyFont}>Article Description</p>
        </article>
        <article className={`
          ${styles.article} 
          ${styles.rowTop}
          ${styles.columnRight}
        `}>
          <img src="http://placekitten.com/300/250" alt="kitten"></img>
          <h3 className={styles.titleFont}>Right Top Article</h3>
          <p className={styles.bodyFont}>Article Description</p>
        </article>
        <article className={`
          ${styles.article} 
          ${styles.rowBottom}
          ${styles.columnRight}
        `}>
          <img src="http://placekitten.com/300/250" alt="kitten"></img>
          <h3 className={styles.titleFont}>Right Bottom Article</h3>
          <p className={styles.bodyFont}>Article Description</p>
        </article>
      </div>

      <hr />
      <div className={styles.lowerBarGrid}>
        <article className={`
          ${styles.article} 
          ${styles.lowerLeft}
        `}>
          <img src="http://placekitten.com/150/100"></img>
          <h4 className={styles.titleFont}>Article</h4>
          <p className={styles.bodyFont}>Article Description</p>
        </article>
        <article className={`
          ${styles.article} 
          ${styles.lowerCenter}
        `}>
          <img src="http://placekitten.com/150/100"></img>
          <h4 className={styles.titleFont}>Article</h4>
          <p className={styles.bodyFont}>Article Description</p>
        </article>
        <article className={`
          ${styles.article} 
          ${styles.lowerRight}
        `}>
          <img src="http://placekitten.com/150/100"></img>
          <h4 className={styles.titleFont}>Article</h4>
          <p className={styles.bodyFont}>Article Description</p>
        </article>
      </div>
      <hr />

      <div>
        <article className={styles.listArticle}>
          <img src="http://placekitten.com/150/200"></img>
          <section>
            <h4 className={styles.titleFont}>Article</h4>
            <p className={styles.bodyFont}>Article Description</p>
          </section>
        </article>
        <hr />
        <article className={styles.listArticle}>
          <img src="http://placekitten.com/150/200"></img>
          <section>
            <h4 className={styles.titleFont}>Article</h4>
            <p className={styles.bodyFont}>Article Description</p>
          </section>
        </article>
        <hr />
        <article className={styles.listArticle}>
          <img src="http://placekitten.com/150/200"></img>
          <section>
            <h4 className={styles.titleFont}>Article</h4>
            <p className={styles.bodyFont}>Article Description</p>
          </section>
        </article>
        <hr />
      </div>
    </div>
  );
}
