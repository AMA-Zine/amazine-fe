import React from 'react';
import { useParams } from 'react-router-dom';
import { useResponseById } from '../../hooks/responses';
import { useThreadById } from '../../hooks/threads';
import styles from '../app/styles.css';

export default function ThreadDetails() {
  const { id } = useParams(); 
  const { thread } = useThreadById(id);
  const { response } = useResponseById(id);
  const qAList = response.qAndA;

  console.log('thread', thread);
  console.log('response', response);
  console.log('id', id);

  function displayQuestion(list, question, i) {
    if(i > 0 && question === list[i - 1].question) return false;

    return true;
  }

  const displayQA = qAList && qAList.map((qAItem, i) => (
    <div key={i}>
      <h2>
        {displayQuestion(qAList, qAItem.question, i) && qAItem.question}
      </h2>
      <h3>
        {qAItem.answer}
      </h3>
    </div>
  ));

  return (
    <div className={`${styles.headerSpace} ${styles.bottomSpace}`}>
      <hr />

      <h2 className={styles.flairTitle}>{thread && thread.flair}</h2>
      <article className={styles.bannerArticle}>
        <h1 className={styles.normalGap}>
          {thread && thread.title}
        </h1>
      </article>

      <div>
        {displayQA}
      </div>

      <hr />

    </div>
  );
}
