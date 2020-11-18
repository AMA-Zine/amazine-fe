import { useState, useEffect } from 'react';
import { getNatGeo } from '../services/natGeo-api';

export const NatGeo = () => {
  const [natGeo, setNatGeo] = useState([]);

  useEffect(() => {
    getNatGeo()
      .then(fetchedPicture => setNatGeo(fetchedPicture))
  }, [])

  return {
    natGeo
  };
};
