/* eslint-disable max-len */
import React from 'react';
import { useDessert } from '../../hooks/recipes';
import styles from '../app/styles.css';
import foodstyles from '../recipe-details/foodStyles.css';

const DessertDetail = () => {
  const { dessert } = useDessert();

  // eslint-disable-next-line space-in-parens
  const summary = dessert?.summary?.replace( /(<([^>]+)>)/ig, '');

  return (
    <div className={`${styles.headerSpace} ${foodstyles.foodItem}`}>
      <h1>{dessert.title}</h1>
      <a className={foodstyles.link} href={dessert.linkSrc}>Click Here for Dessert Recipe</a>
      <img src={dessert.image} alt={dessert.title} />
      <p className={foodstyles.foodText}>{summary}</p>
    </div>
  );
};

export default DessertDetail;
