/* eslint-disable max-len */
import React from 'react';
import { useRecipe } from '../../hooks/recipes';
import styles from '../app/styles.css';
import foodstyles from './foodStyles.css';

const RecipeDetail = () => {
  const { recipe } = useRecipe();

  // eslint-disable-next-line space-in-parens
  const summary = recipe?.summary?.replace( /(<([^>]+)>)/ig, '');

  return (
    <div className={`${styles.headerSpace} ${foodstyles.foodItem}`}>
      <h1>{recipe.title}</h1>
      <a className={foodstyles.link} href={recipe.linkSrc}>Click Here for Recipe</a>
      <img src={recipe.image} alt={recipe.title} />
      <p className={foodstyles.foodText}>{summary}</p>
    </div>
  );
};

export default RecipeDetail;
