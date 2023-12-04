import fetchData from '../api/fetchData';
import { BASE_URL, Movie } from '../../SuspenseErrorBoundary/MovieShared/api';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
  },
};

const resource = fetchData<Movie[]>(`${BASE_URL}/now_playing?language=en-US&page=2`, options);

const PlayingMovieList = () => {
  const movieList = resource.read();
  console.log(movieList);

  return (
    <div className='border-2 border-green-600'>
      {movieList.results.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  );
};

export default PlayingMovieList;
