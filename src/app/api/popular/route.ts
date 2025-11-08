import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page') || '1';

  try {
    const tmdbRes = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=ko-KR&page=${page}`,
      {
        next: { revalidate: 3600 },
      },
    );

    if (!tmdbRes.ok) {
      return NextResponse.json({ error: 'TMDB Error', status: tmdbRes.status }, { status: tmdbRes.status });
    }

    const data = await tmdbRes.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
