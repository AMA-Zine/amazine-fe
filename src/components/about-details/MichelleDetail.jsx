import React from 'react';
import styles from '../app/styles.css';
import aboutstyles from '../../components/about/About.css';

export default function MichelleDetail() {
  return (
    <div className={`${styles.headerSpace} ${styles.bottomSpace}`}>
      <hr />
      <article className={styles.bannerArticle}>
        <img src={'/assets/michelle-portrait.JPG'} alt="portrait of Michelle" className={aboutstyles.bioPic} />
        <h1 className={styles.normalGap}>
        I'm Michelle Stermitz, a software developer based in Portland, OR. Ask Me Anything!
          <a href="https://github.com/michmitz" ><div className={aboutstyles.ghIcon}></div></a>
        
          <a href="https://www.linkedin.com/in/michellestermitz/" ><div className={aboutstyles.liIcon}></div></a>        
        </h1>
      </article>
      <hr />

      <div className={`${styles.questionDiv} ${styles.questionBox}`}>
        <h2>What movie can you watch over and over without getting tired of it?</h2>
      </div>
      <div className={`${styles.answerDiv} ${styles.answerBox}`}>
        <p>Answer: What We Do in the Shadows and Step Brothers, both of which are comedic masterpieces.</p> 
      </div>
      <div className={`${styles.questionDiv} ${styles.questionBox}`}>
        <h2>If you were given five million dollars to open a small museum, what kind of museum would you create?</h2>
      </div>
      <div className={`${styles.answerDiv} ${styles.answerBox}`}>
        <p>Answer: I would create a museum of my extensive meme collection.</p> 
      </div>
      <div className={`${styles.questionDiv} ${styles.questionBox}`}>
        <h2>What would be the best thing you could reasonably expect to find in a cave?</h2>
      </div>
      <div className={`${styles.answerDiv} ${styles.answerBox}`}>
        <p>Answer: When I end up finding the Necronomicon, I promise to use it for good.</p> 
      </div>

    </div>
  );
}
