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
        title: wine[0].title,
        description: wine[0].description,
        image: wine[0].imageUrl,
        linkSrc: wine[0].link
      };
    });
};

export const getDessert = async() => {
  return fetch(`${URL}/api/v1/dessert`)
    .then(res => res.json())
    .then(dessert => {
      return {
        id: dessert[0].id,
        title: dessert[0].title,
        image: dessert[0].image,
        summary: dessert[0].summary,
        linkSrc: dessert[0].sourceUrl
      };
    });
};
