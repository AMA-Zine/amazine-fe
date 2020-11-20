/* eslint-disable max-len */
import React from 'react';
import { useRecipe } from '../../hooks/recipes';
import styles from '../app/styles.css';

const RecipeDetail = () => {
  const { recipe } = useRecipe();
  console.log(recipe);
  // eslint-disable-next-line space-in-parens
  const summary = recipe?.summary?.replace( /(<([^>]+)>)/ig, '');
  console.log(summary);

  return (
    <div className={styles.headerSpace}>
      <h1>{recipe.title}</h1>
      <a href={recipe.linkSrc}>Click Here for Recipe</a>
      <img src={recipe.image} alt={recipe.title} />
      <p className={styles.bodyFont}>{summary}</p>
    </div>
  );
};

export default RecipeDetail;
