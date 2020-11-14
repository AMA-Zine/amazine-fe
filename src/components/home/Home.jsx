import React from 'react';
import styles from '../app/styles.css';

export default function Home() {
  // const class1 = 'styles.featuredarticle',
  //   class2 = 'styles.redtext';

  return (
    <div>
      <h2>Home Page</h2>
      <div className={styles.featureGrid}>
        <article className={styles.featuredArticle}>
          <h3>Featured Article</h3>
          <img src="http://placekitten.com/200/300" alt="kitten"></img>
          <p>Article Description</p>
        </article>
        <article className={`${styles.redText} ${styles.featuredArticle}`}>
          <h3>Featured Article</h3>
          <img src="http://placekitten.com/200/300" alt="kitten"></img>
          <p>Article Description</p>
        </article>
        <article>
          <h3>Featured Article</h3>
          <img src="http://placekitten.com/200/300" alt="kitten"></img>
          <p>Article Description</p>
        </article>
      </div>
      <div className={styles.articleGrid}>
        <section>
          <h4>Article</h4>
          <img src="http://placekitten.com/100/150"></img>
          <p>Article Description</p>
        </section>
        <section>
          <h4>Article</h4>
          <img src="http://placekitten.com/100/150"></img>
          <p>Article Description</p>
        </section>
        <section>
          <h4>Article</h4>
          <img src="http://placekitten.com/100/150"></img>
          <p>Article Description</p>
        </section>
        <section>
          <h4>Article</h4>
          <img src="http://placekitten.com/100/150"></img>
          <p>Article Description</p>
        </section>
        <section>
          <h4>Article</h4>
          <img src="http://placekitten.com/100/150"></img>
          <p>Article Description</p>
        </section>
        <section>
          <h4>Article</h4>
          <img src="http://placekitten.com/100/150"></img>
          <p>Article Description</p>
        </section>
      </div>
    </div>
  );
}
