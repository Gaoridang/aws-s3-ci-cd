import useMovies from '../MovieShared/hooks/useMovies';

const MovieList = () => {
  const movieList = useMovies();

  return (
    <div className='border-2 border-orange-500'>
      <h1>Movie List</h1>
      <div>
        {movieList?.map((movie) => (
          <p key={movie.id}>{movie.title}</p>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
