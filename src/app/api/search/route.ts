import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');

  if (!query) {
    return NextResponse.json({ results: [] });
  }

  const tmdbRes = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&language=ko-KR&query=${encodeURIComponent(
      query,
    )}&page=1&include_adult=false`,
  );

  if (!tmdbRes.ok) {
    return NextResponse.json({ error: 'TMDB Error' }, { status: tmdbRes.status });
  }

  const data = await tmdbRes.json();
  return NextResponse.json(data);
}
