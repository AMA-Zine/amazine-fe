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
        <h2>What is your favorite color?</h2>
      </div>
      <div className={styles.answerDiv}>
        <p>Answer: Rainbow</p> 
      </div>
      <div className={styles.questionDiv}>
        <h2>What is your favorite color?</h2>
      </div>
      <div className={styles.answerDiv}>
        <p>Answer: Rainbow</p> 
      </div>
      <div className={styles.questionDiv}>
        <h2>What is your favorite color?</h2>
      </div>
      <div className={styles.answerDiv}>
        <p>Answer: Rainbow</p> 
      </div>

    </div>
  )
}
