import axios from 'axios';
import {useState} from 'react';

type apiProps = {
  url: string;
  params?: object;
};

export const useApiRequest = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const sendRequest = async ({url, params}: apiProps) => {
    setLoading(true);

    try {
      const res = await axios.get(url, {params});
      setLoading(false);
      return res.data;
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log('ERROR! -> ', error);
    }
  };

  return {loading, error, sendRequest};
};
