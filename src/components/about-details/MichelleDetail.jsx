import React from 'react';
import styles from '../app/styles.css';

export default function MichelleDetail() {
  return (
    <div className={`${styles.headerSpace} ${styles.bottomSpace}`}>
    <hr />
    <article className={styles.bannerArticle}>
      <h1 className={styles.normalGap}>
        I'm Michelle Stermitz, a software developer based in Portland, OR. Ask Me Anything!
      </h1>
    </article>
    <hr />

      <div className={styles.questionDiv}>
        <h2>What movie can you watch over and over without getting tired of it?</h2>
      </div>
      <div className={styles.answerDiv}>
        <p>Answer: What We Do in the Shadows and Step Brothers, both of which are comedic masterpieces.</p> 
      </div>
      <div className={styles.questionDiv}>
        <h2>If you were given five million dollars to open a small museum, what kind of museum would you create?</h2>
      </div>
      <div className={styles.answerDiv}>
        <p>Answer: I would create a museum of my extensive meme collection.</p> 
      </div>
      <div className={styles.questionDiv}>
        <h2>What would be the best thing you could reasonably expect to find in a cave?</h2>
      </div>
      <div className={styles.answerDiv}>
        <p>Answer: When I end up finding the Necronomicon, I promise to use it for good.</p> 
      </div>

    </div>
  )
}
