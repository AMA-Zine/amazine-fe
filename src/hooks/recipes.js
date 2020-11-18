import { useState, useEffect } from 'react';
import { getRecipe, getWine, getDessert } from '../services/recipe-api';

export const Recipe = () => {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    getRecipe()
      .then(fetchedRecipe => setRecipe(fetchedRecipe))
  }, [])

  return {
    recipe
  };
};

export const Wine = () => {
  const [wine, setWine] = useState([]);

  useEffect(() => {
    getWine()
      .then(fetchedWine => setWine(fetchedWine))
  }, [])

  return {
    wine
  };
};

export const Dessert = () => {
  const [dessert, setDessert] = useState([]);

  useEffect(() => {
    getDessert()
      .then(fetchedDessert => setDessert(fetchedDessert))
  }, [])

  return {
    dessert
  };
};
