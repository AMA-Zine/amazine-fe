import React from 'react';
import styles from '../app/styles.css';
import aboutstyles from '../../components/about/About.css';

export default function PatrickDetail() {
  return (
    <div className={`${styles.headerSpace} ${styles.bottomSpace}`}>
    <hr />
    <article className={styles.bannerArticle}>
      <img src={'/assets/patrick-picture.jpg'} alt="portrait of Patrick" className={aboutstyles.bioPic} />
      <h1 className={styles.normalGap}>
        I'm Patrick Wilson, a software developer based in Portland, OR. Ask Me Anything!
        <a href="https://github.com/pm-wilson" ><div className={aboutstyles.ghIcon}></div></a>
        
        <a href="https://www.linkedin.com/in/pmwilson333/" ><div className={aboutstyles.liIcon}></div></a>
      </h1>
    </article>
    <hr />

      <div className={styles.questionDiv}>
        <h2>What would you name a boat if you had one?</h2>
      </div>
      <div className={styles.answerDiv}>
        <p>Answer: Stormseeker would be my boat. It's a nod to one of my favorite games, and would also be clever if I was ever caught in a storm.</p> 
      </div>
      <div className={styles.questionDiv}>
        <h2>What's your cure for hiccups?</h2>
      </div>
      <div className={styles.answerDiv}>
        <p>Answer: Forgetting about them seems to be the best way to cure the hiccups, but it can be difficult when you have them.</p> 
      </div>
      <div className={styles.questionDiv}>
        <h2>What are you interested in that you think most people aren't?</h2>
      </div>
      <div className={styles.answerDiv}>
        <p>Answer: I am interested in building siege engines like cannons, catapults, giant ballistas, etc. I've only met one other person that was into it and he helps me build them.</p> 
      </div>

    </div>
  )
}
