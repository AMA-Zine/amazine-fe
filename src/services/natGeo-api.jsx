const URL = process.env.REACT_APP_API_URL;

export const getNatGeo = () => {
  return fetch(`${URL}/api/v1/natgeo`)
    .then(res => res.json())
    .then(image => {
      return {
        id: image.image.id,
        alt: image.image.alt_text,
        image: image.image.uri,
        title: image.image.title,
        caption: image.image.caption,
        credit: image.image.credit
      };
    });
};
