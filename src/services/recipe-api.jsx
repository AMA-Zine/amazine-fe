const URL = process.env.REACT_APP_API_URL;

export const getRecipe = () => {
  return fetch(`${URL}/api/v1/recipe`)
    .then(res => res.json())
    .then(recipe => {
      return {
        id: recipe[0].id,
        title: recipe[0].recipe.title,
        image: recipe[0].recipe.image,
        linkSrc: recipe[0].recipe.sourceUrl,
        summary: recipe[0].recipe.summary
      };
    });
};

export const getWine = () => {
  return fetch(`${URL}/api/v1/wine`)
    .then(res => res.json())
    .then(wine => {
      return {
        id: wine[0].id,
        title: wine[0].wine.title,
        description: wine[0].wine.description,
        image: wine[0].wine.imageUrl,
        linkSrc: wine[0].wine.link
      };
    });
};

export const getDessert = async() => {
  return fetch(`${URL}/api/v1/dessert`)
    .then(res => res.json())
    .then(dessert => {
      return {
        id: dessert[0].id,
        title: dessert[0].dessert.title,
        image: dessert[0].dessert.image,
        summary: dessert[0].dessert.summary,
        linkSrc: dessert[0].dessert.sourceUrl
      };
    });
};
