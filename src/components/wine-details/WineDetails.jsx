import React from 'react';
import { useWine } from '../../hooks/recipes';
import styles from '../app/styles.css';

const WineDetail = () => {
  const { wine } = useWine();
  console.log(wine);

  // eslint-disable-next-line space-in-parens
  const description = wine?.description?.replace( /(<([^>]+)>)/ig, '');

  return (
    <div className={styles.headerSpace}>
      <h1>{wine.title}</h1>
      <a href={wine.linkSrc}>Click Here for Wine</a>
      <img src={wine.image} alt={wine.title} />
      <p> {description}</p>
    </div>
  );
};

export default WineDetail;
