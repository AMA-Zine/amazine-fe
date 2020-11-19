const URL = process.env.REACT_APP_API_URL;

export const getResponses = () => {
  return fetch(`${URL}/api/v1/responses`)
    .then(res => res.json())
    .then(json =>
      json.map(response => ({
        id: response.id,
        qAndA: response.qAndA
      })));
};

export const getResponseById = (id) => {
  return fetch(`${URL}/api/v1/responses/${id}`)
    .then(res => res.json())
    .then(response => {
      return {
        id: response.id,
        qAndA: response.qAndA
      }
    })
};
