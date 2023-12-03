import useMovies from '../MovieShared/hooks/useMovies';

const MovieList = () => {
  const movieList = useMovies();

  return (
    <>
      <h1>Movie List</h1>
      <div>
        {movieList?.map((movie) => (
          <p key={movie.id}>{movie.title}</p>
        ))}
      </div>
    </>
  );
};

export default MovieList;
