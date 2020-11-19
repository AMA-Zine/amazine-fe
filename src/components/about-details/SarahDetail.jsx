import React from 'react';
import styles from '../app/styles.css';
import aboutstyles from'../../components/about/About.css';
import sarah from '../../assets/sarah-picture.jpg';

export default function SarahDetail() {
  return (
    <div className={`${styles.headerSpace} ${styles.bottomSpace}`}>
    <hr />
    <article className={styles.bannerArticle}>
      <img src={sarah} alt="portrait of Sarah" className={aboutstyles.bioPic} />
      <h1 className={styles.normalGap}>
        I'm Sarah Rector, a software developer based in Portland, OR. Ask Me Anything!
        <a href="https://github.com/SarahRector" ><div className={aboutstyles.ghIcon}></div></a>
        
        <a href="https://www.linkedin.com/in/sarah-rector/" ><div className={aboutstyles.liIcon}></div></a>
      </h1>
    </article>
    <hr />

      <div className={styles.questionDiv}>
        <h2>What bit of trivia do you know that is interesting but also completely useless?</h2>
      </div>
      <div className={styles.answerDiv}>
        <p>Answer: Well, I would argue that no trivia is actually useless! However, for the purposes of this question, did you know that the hard part on the end of a shoelace is called an aglet? Or that sea cucumbers, when frightened, eject their guts out of their mouth to scare off predators?</p> 
      </div>
      <div className={styles.questionDiv}>
        <h2>What odd talent do you have?</h2>
      </div>
      <div className={styles.answerDiv}>
        <p>Answer: Since fifth grade, I have been able to say all 50 states in alphabetical order in under 30 seconds.</p> 
      </div>
      <div className={styles.questionDiv}>
        <h2>If you could time travel, where would you go and why?</h2>
      </div>
      <div className={styles.answerDiv}>
        <p>Answer: I'd probably go back to the late 1800's/early 1900's and try to make friends with Nellie Bly. She was a reporter and the first woman to travel completley around the world. That or dinosaurs. It would be really cool to see dinosaurs.</p> 
      </div>

    </div>
  )
}
