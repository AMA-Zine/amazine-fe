import React from 'react';
import { useDessert } from '../../hooks/recipes';
import styles from '../app/styles.css';

const DessertDetail = () => {
  const { dessert } = useDessert();
  console.log(dessert);

  // eslint-disable-next-line space-in-parens
  const summary = dessert?.summary?.replace( /(<([^>]+)>)/ig, '');

  return (
    <div className={styles.headerSpace}>
      <h1>{dessert.title}</h1>
      <a href={dessert.linkSrc}>Click Here for Dessert Recipe</a>
      <img src={dessert.image} alt={dessert.title} />
      <p>{summary}</p>
    </div>
  );
};

export default DessertDetail;
