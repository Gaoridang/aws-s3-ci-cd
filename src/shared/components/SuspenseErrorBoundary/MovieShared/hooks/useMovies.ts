import { useCallback } from 'react';
import useFetcher from '../../hooks/useFetcher';
import { fetchMovies } from '../api';

const useMovies = () => {
  const memoFetchFc = useCallback(() => fetchMovies(), []);
  const response = useFetcher(memoFetchFc);
  console.log(response);

  return response.data?.results;
};

export default useMovies;
