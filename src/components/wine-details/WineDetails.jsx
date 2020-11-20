import React from 'react';
import { useWine } from '../../hooks/recipes';
import styles from '../app/styles.css';
import foodstyles from '../recipe-details/foodStyles.css';

const WineDetail = () => {
  const { wine } = useWine();

  // eslint-disable-next-line space-in-parens
  const description = wine?.description?.replace( /(<([^>]+)>)/ig, '');

  return (
    <div className={`${styles.headerSpace} ${foodstyles.foodItem}`}>
      <h1>{wine.title}</h1>
      <a className={foodstyles.link} href={wine.linkSrc}>Click Here for Wine</a>
      <img src={wine.image} alt={wine.title} />
      <p className={foodstyles.foodText}> {description}</p>
    </div>
  );
};

export default WineDetail;
