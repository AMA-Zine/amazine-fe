import { useState, useEffect } from 'react';
import { getResponses, getResponseById } from '../services/response-api';

export const useResponses = () => {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    getResponses()
      .then(fetchedResponses => setResponses(fetchedResponses))
  }, [])

  return {
    responses
  };
};

export const useResponseById = (id) => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    getResponseById(id)
      .then(fetchedResponse => setResponse(fetchedResponse))
  }, [id])

  return {
    response
  };
};