const URL = process.env.REACT_APP_API_URL;

export const getNatGeo = () => {
  return fetch(`${URL}/api/v1/natgeo`)
    .then(res => res.json())
    .then(json =>
      json.map(image => ({
        id: image.id,
        alt: image.alt_text,
        image: image.image
      })));
};
