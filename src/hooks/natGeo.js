import { useState, useEffect } from 'react';
import { getNatGeo } from '../services/natGeo-api';

export const useNatGeo = () => {
  const [natGeo, setNatGeo] = useState([]);

  useEffect(() => {
    getNatGeo()
      .then(fetchedPicture => setNatGeo(fetchedPicture))
  }, [])

  return {
    natGeo
  };
};
