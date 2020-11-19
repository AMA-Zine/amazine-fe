import React from 'react';
import { useParams } from 'react-router-dom';
import { useResponses } from '../../hooks/responses';
import { useThreadById } from '../../hooks/threads';
import styles from '../app/styles.css';

export default function ThreadDetails() {
  const { id } = useParams(); 
  const { thread } = useThreadById(id);
  const { responses } = useResponses;

  return (
    <div className={`${styles.headerSpace} ${styles.bottomSpace}`}>
    <hr />
    
      <article className={styles.bannerArticle}>
        <h1 className={styles.normalGap}>
        {thread && thread.title}     
        </h1>
      </article>

    <hr />

    </div>
  )
}
