const BASE_URL = 'https://api.themoviedb.org/3/movie';

export interface Response<T> {
  dates: {
    maximun: string;
    minimun: string;
  };
  page: number;
  results: T;
  total_pages: number;
  total_results: number;
}

type FetchType = <T>(url: string) => Promise<Response<T>>;
const fetchData: FetchType = async (url) => {
  const response = await (
    await fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
      },
    })
  ).json();
  return response;
};

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  release_date: string;
  title: string;
}

export const fetchMovies = () =>
  fetchData<Movie[]>(`${BASE_URL}/now_playing?language=en-US&page=1`);
