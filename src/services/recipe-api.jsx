const URL = process.env.REACT_APP_API_URL;

export const getRecipe = () => {
  return fetch(`${URL}/api/v1/recipe`)
    .then(res => res.json())
    .then(recipe => {
      return {
        id: recipe.id,
        title: recipe.title,
        image: recipe.image,
        linkSrc: recipe.sourceUrl
      };
    });
};

export const getWine = () => {
  return fetch(`${URL}/api/v1/wine`)
    .then(res => res.json())
    .then(wine => {
      return {
        id: wine.id,
        title: wine.title,
        image: wine.imageUrl,
        linkSrc: wine.link
      };
    });
};

export const getDessert = async() => {
  return fetch(`${URL}/api/v1/dessert`)
    .then(res => res.json())
    .then(dessert => {
      return {
        id: dessert.id,
        title: dessert.title,
        image: dessert.image,
        linkSrc: dessert.sourceUrl
      };
    });
};
