import { getMovieDetail } from '@/api/tmdb';
import Image from 'next/image';
import PlayBtn from '@/assets/svgs/previewBar/playButton.svg?url';
import MovieImg from '@/components/movie/MovieImage';

interface MovieDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}
export default async function MovieDetailPage({ params }: MovieDetailPageProps) {
  const { id } = await params;
  const movie = await getMovieDetail(id);

  return (
    <div className="flex cursor-pointer flex-col items-center text-white">
      <MovieImg backdrop_path={movie.backdrop_path} title={movie.title} />
      <div className="bg-gray-0 hover:bg-gray-1 text-title1-sb flex h-[45px] w-[303px] items-center justify-center gap-3.5 rounded-[5.63px] text-black">
        <Image src={PlayBtn} alt="" />
        <span>Play</span>
      </div>
      <div className="text-title3-sb mt-8 w-[303px] leading-8">{movie.title}</div>
      <div className="text-text5-sb mt-5 mb-20 w-[303px] text-white/70">{movie.overview}</div>
    </div>
  );
}
