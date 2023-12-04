import useFetcher from '../../hooks/useFetcher';
import { fetchMovies } from '../api';

const useMovies = () => {
  const response = useFetcher(fetchMovies);

  return response.data?.results;
};

export default useMovies;
