import React from 'react';
import { useParams } from 'react-router-dom';
import { useResponseById } from '../../hooks/responses';
import { useThreadById } from '../../hooks/threads';
import styles from '../app/styles.css';
import threadstyles from './ThreadDetails.css';

export default function ThreadDetails() {
  const { id } = useParams(); 
  const { thread } = useThreadById(id);
  const { response } = useResponseById(id);
  const qAList = response.qAndA;

  function displayQuestion(list, question, i) {
    if(i > 0 && question === list[i - 1].question) return false;

    return true;
  }

  const displayQA = qAList && qAList.map((qAItem, i) => (
    <div key={i} className={threadstyles.qADiv}>
      <h2 className={`${threadstyles.question} ${styles.questionDiv}`}>
        {displayQuestion(qAList, qAItem.question, i) && qAItem.question}
      </h2>
      <p className={`${threadstyles.answer} ${styles.answerDiv}`}>
        {qAItem.answer}
      </p>
    </div>
  ));

  return (
    <div className={`${styles.headerSpace} ${styles.bottomSpace}`}>
      <hr />

      <h2 className={threadstyles.flairTitle}>Category: {thread && thread.flair}</h2>
      <article className={styles.bannerArticle}>
        <h1 className={`${styles.normalGap} ${threadstyles.threadTitle}`}>
          {thread && thread.title}
        </h1>
        <h2 className={threadstyles.authorName}>
        Interview By <br/>{thread && thread.author}</h2>
      </article>

      <div>
        {displayQA}
      </div>

      <hr />
    </div>
  );
}
