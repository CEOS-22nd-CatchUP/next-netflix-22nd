const BASE_URL = 'https://api.themoviedb.org';
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
export const BIG_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

export async function getPopularMovies(page: number = 1) {
  const res = await fetch(
    `${BASE_URL}/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=ko-KR&page=${page}`,
    {
      next: { revalidate: 3600 },
    },
  );

  if (!res.ok) {
    throw new Error('Failed to fetch movies');
  }

  const data = await res.json();
  return data.results;
}

export async function getPopularMoviesInClient(page: number = 1) {
  const res = await fetch(`/api/popular?page=${page}`);

  if (!res.ok) {
    throw new Error('Failed to fetch popular movies from internal API');
  }

  const data = await res.json();
  return data.results;
}

export async function getDiscoverTvByGenre(genreId: number | string) {
  const res = await fetch(
    `${BASE_URL}/3/discover/tv?api_key=${process.env.TMDB_API_KEY}&language=ko-KR&sort_by=popularity.desc&with_genres=${genreId}&watch_region=KR`,
    {
      next: { revalidate: 3600 },
    },
  );

  if (!res.ok) {
    throw new Error('Failed to fetch TV series by genre');
  }
  const data = await res.json();
  return data.results;
}

export async function getDiscoverMoviesByGenre(genreId: number | string) {
  const res = await fetch(
    `${BASE_URL}/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&language=ko-KR&sort_by=popularity.desc&with_genres=${genreId}&watch_region=KR`,
    {
      next: { revalidate: 3600 },
    },
  );

  if (!res.ok) {
    throw new Error('Failed to fetch movies by genre');
  }
  const data = await res.json();
  return data.results;
}

export async function getMovieDetail(id: number | string) {
  const res = await fetch(`${BASE_URL}/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=ko-KR`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch movie detail');
  }

  return res.json();
}
export async function searchMovie(query: string, page: number = 1) {
  const res = await fetch(`/api/search?query=${encodeURIComponent(query)}&page=${page}`);

  if (!res.ok) {
    throw new Error('Search failed');
  }

  const data = await res.json();
  return data.results;
}
