const URL = process.env.REACT_APP_API_URL;

export const getThreads = () => {
  return fetch(`${URL}/api/v1/threads`)
    .then(res => res.json())
    .then(json =>
      json.map(thread => ({
        id: thread.id,
        title: thread.title,
        image: thread.image,
        flair: thread.flair
      })));
};

export const getThreadById = (id) => {
  return fetch(`${URL}/api/v1/threads/${id}`)
    .then(res => res.json())
    .then(json =>
      json.map(thread => ({
        id: thread.id,
        title: thread.title,
        image: thread.image,
        flair: thread.flair
      })));
};

