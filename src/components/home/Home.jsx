/* eslint-disable max-len */
import React from 'react';
import { useThreads } from '../../hooks/threads';
import { useRecipe, useWine, useDessert } from '../../hooks/recipes';
import { useNatGeo } from '../../hooks/natGeo';
import styles from '../app/styles.css';
import { Link } from 'react-router-dom';

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

  const subThreadList = subThreads.map((currentThread, i) => (
    <div key={currentThread.title}>
      <Link to={`/thread/${threads[i + 5]?.id}`} className={styles.listArticle}>
        <article className={styles.listLayout}>
          <img
            className={styles.listImage}
            src={threads[i + 5]?.image}
            alt={threads[i + 5]?.flair}
          ></img>
          <section>
            <h4 className=
              {styles.titleFont}>{currentThread?.title}
            </h4>
            <p 
              className={styles.bodyFont}
            >Interview by {currentThread?.author}</p>
          </section>
        </article>
      </Link>
      <hr />
    </div>
  ));

  return (
    <div className={`${styles.headerSpace} ${styles.bottomSpace}`}>
      <div className={styles.photoDay}>
        <hr />

        <article className={styles.bannerArticle}>
          <a href={natGeo.image}>
            {/* <img 
              className={styles.natGeoImage} 
              src={natGeo.image} 
              alt={natGeo.alt}
            ></img> */}
            <h2 className={`${styles.pictureOfTheDayText} ${styles.normalGap}`}>Check Out the Picture Of the Day</h2>
          </a>
        </article>


        <hr />

      </div>
      

      <div className={styles.articleGrid}>

        <Link to={`/thread/${threads[0]?.id}`} className={`
          ${styles.featured}
        `}>
          <article>
            <img 
              className={styles.featuredImage} 
              src={threads[0]?.image} 
              alt={threads[0]?.flair}
            ></img>
            <h3 
              className={`${styles.featuredTitle} ${styles.featurePadding}`}
            >{threads[0]?.title}</h3>
            <p 
              className={styles.featuredFont}
            >Interview by {threads[0]?.author}</p>
          </article>
        </Link>

        <Link to={`/thread/${threads[1]?.id}`} className={`
          ${styles.article} 
          ${styles.rowTop} 
          ${styles.columnLeft}
        `}>
          <article>
            <img 
              className={styles.frontImage} 
              src={threads[1]?.image} 
              alt={threads[1]?.flair}
            ></img>
            <h3 
              className={styles.titleFont}
            >{threads[1]?.title}</h3>
            <p 
              className={styles.bodyFont}
            >Interview by {threads[1]?.author}</p>
          </article>
        </Link>

        <Link to={`/thread/${threads[2]?.id}`} className={`
          ${styles.article} 
          ${styles.rowBottom}
          ${styles.columnLeft}
        `}>
          <article>
            <img
              className={styles.frontImage}
              src={threads[2]?.image}
              alt={threads[2]?.flair}
            ></img>
            <h3 className={styles.titleFont}>{threads[2]?.title}</h3>
            <p className={styles.bodyFont}>Interview by {threads[2]?.author}</p>
          </article>
        </Link>

        <Link to={`/thread/${threads[3]?.id}`} className={`
          ${styles.article} 
          ${styles.rowTop}
          ${styles.columnRight}
        `}>
          <article>
            <img
              className={styles.frontImage}
              src={threads[3]?.image}
              alt={threads[3]?.flair}
            ></img>
            <h3 className={styles.titleFont}>{threads[3]?.title}</h3>
            <p className={styles.bodyFont}>Interview by {threads[3]?.author}</p>
          </article>
        </Link>

        <Link to={`/thread/${threads[4]?.id}`} className={`
          ${styles.article} 
          ${styles.rowBottom}
          ${styles.columnRight}
        `}>
          <article>
            <img
              className={styles.frontImage}
              src={threads[4]?.image}
              alt={threads[4]?.flair}
            ></img>
            <h3 className={styles.titleFont}>{threads[4]?.title}</h3>
            <p className={styles.bodyFont}>Interview by {threads[4]?.author}</p>
          </article>
        </Link>
      </div>

      <hr />
      <div className={styles.lowerBarGrid}>

        <Link to={'/recipe'}>
          <article className={`
          ${styles.article} 
          ${styles.lowerLeft}
        `}>
            <img className={styles.foodBannerImage} src={recipe.image}></img>
            <h4 className={styles.titleFont}>Recipe of the Day</h4>
            <p className={styles.bodyFont}>{recipe.title}</p>
          </article>
        </Link>

        <Link to={'/wine'}>
          <article className={`
          ${styles.article} 
          ${styles.lowerCenter}
        `}>
            <img className={styles.foodBannerImage} src={wine.image}></img>
            <h4 className={styles.titleFont}>Wine of the Day</h4>
            <p className={styles.bodyFont}>{wine.title}</p>
          </article>
        </Link>

        <Link to={'/dessert'}>
          <article className={`
          ${styles.article} 
          ${styles.lowerRight}
        `}>
            <img className={styles.foodBannerImage} src={dessert.image}></img>
            <h4 className={styles.titleFont}>Dessert of the Day</h4>
            <p className={styles.bodyFont}>{dessert.title}</p>
          </article>
        </Link>

      </div>
      <hr />

      <div>
        {subThreads.length > 0 && subThreadList}
      </div>
    </div>
  );
}
