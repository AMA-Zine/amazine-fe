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

  const displayQA = qAList && qAList.map((qAItem, i) => (
    <div key={i}>
      <h2>
        {qAItem.question}
      </h2>
      <h3>
        {qAItem.answer}
      </h3>
    </div>
  ));

  return (
    <div className={`${styles.headerSpace} ${styles.bottomSpace}`}>
      <hr />
    
      <article className={styles.bannerArticle}>
        <h1 className={styles.normalGap}>
          {thread && thread.title}     
        </h1>
        <h2>{thread && thread.flair}</h2>
      </article>

      <div>
        {displayQA}
      </div>

      <hr />

    </div>
  );
}
