const BASE_URL = 'https://api.themoviedb.org';
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
export const BIG_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

export async function getPopularMovies() {
  const res = await fetch(
    `${BASE_URL}/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=ko-KR`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch movies');
  }

  const data = await res.json();
  console.log(data);
  return data.results;
}