import React from 'react';
import { useThreads } from '../../hooks/threads';
import { useRecipe, useWine, useDessert } from '../../hooks/recipes';
import { useNatGeo } from '../../hooks/natGeo';
import styles from '../app/styles.css';

export default function Home() {
  const { threads } = useThreads();
  const { recipe } = useRecipe();
  const { wine } = useWine();
  const { dessert } = useDessert();
  const { natGeo } = useNatGeo();
  const subThreads = threads.slice(5);

  console.log('threads', threads);
  console.log('recipe', recipe);
  console.log('wine', wine);
  console.log('dessert', dessert);
  console.log('natGeo', natGeo);

  const subThreadList = subThreads.map((currentThread) => (
    <>
      <article className={styles.listArticle}>
        <img src="http://placekitten.com/150/200"></img>
        <section>
          <h4 className=
            {styles.titleFont}>{currentThread && currentThread.title}
          </h4>
          <p className={styles.bodyFont}>author</p>
        </section>
      </article>
      <hr />
    </>
  ));

  return (
    <div className={`${styles.headerSpace} ${styles.bottomSpace}`}>
      <hr />
      <article className={styles.bannerArticle}>
        <img src="http://placekitten.com/300/50" alt={natGeo.alt}></img>
        <h2 className={styles.normalGap}>National Geographic Picture</h2>
      </article>
      <hr />
      <div className={styles.articleGrid}>
        <article className={`
          ${styles.featured}
        `}>
          <img src="http://placekitten.com/600/400" alt="kitten"></img>
          <h3 className={styles.titleFont}>{threads[0] && threads[0].title}</h3>
          <p className={styles.bodyFont}>reporter</p>
        </article>
        <article className={`
          ${styles.article} 
          ${styles.rowTop} 
          ${styles.columnLeft}
        `}>
          <img src="http://placekitten.com/300/250" alt="kitten"></img>
          <h3 className={styles.titleFont}>{threads[1] && threads[1].title}</h3>
          <p className={styles.bodyFont}>reporter</p>
        </article>
        <article className={`
          ${styles.article} 
          ${styles.rowBottom}
          ${styles.columnLeft}
        `}>
          <img src="http://placekitten.com/300/250" alt="kitten"></img>
          <h3 className={styles.titleFont}>{threads[2] && threads[2].title}</h3>
          <p className={styles.bodyFont}>reporter</p>
        </article>
        <article className={`
          ${styles.article} 
          ${styles.rowTop}
          ${styles.columnRight}
        `}>
          <img src="http://placekitten.com/300/250" alt="kitten"></img>
          <h3 className={styles.titleFont}>{threads[3] && threads[3].title}</h3>
          <p className={styles.bodyFont}>reporter</p>
        </article>
        <article className={`
          ${styles.article} 
          ${styles.rowBottom}
          ${styles.columnRight}
        `}>
          <img src="http://placekitten.com/300/250" alt="kitten"></img>
          <h3 className={styles.titleFont}>{threads[4] && threads[4].title}</h3>
          <p className={styles.bodyFont}>reporter</p>
        </article>
      </div>

      <hr />
      <div className={styles.lowerBarGrid}>
        <article className={`
          ${styles.article} 
          ${styles.lowerLeft}
        `}>
          <img src="http://placekitten.com/150/100"></img>
          <h4 className={styles.titleFont}>Recipe</h4>
          <p className={styles.bodyFont}>Recipe Description</p>
        </article>
        <article className={`
          ${styles.article} 
          ${styles.lowerCenter}
        `}>
          <img src="http://placekitten.com/150/100"></img>
          <h4 className={styles.titleFont}>Wine</h4>
          <p className={styles.bodyFont}>Wine Description</p>
        </article>
        <article className={`
          ${styles.article} 
          ${styles.lowerRight}
        `}>
          <img src="http://placekitten.com/150/100"></img>
          <h4 className={styles.titleFont}>Dessert</h4>
          <p className={styles.bodyFont}>Dessert Description</p>
        </article>
      </div>
      <hr />

      <div>
        {subThreads.length > 0 && subThreadList}
      </div>
    </div>
  );
}
