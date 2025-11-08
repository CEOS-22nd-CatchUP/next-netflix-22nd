import { BIG_IMAGE_BASE_URL, getMovieDetail } from '@/api/tmdb';
import Image from 'next/image';
import PlayBtn from '@/assets/svgs/previewBar/playButton.svg?url';

interface MovieDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}
export default async function MovieDetailPage({ params }: MovieDetailPageProps) {
  const { id } = await params;
  const movie = await getMovieDetail(id);
  console.log(movie);
  return (
    <div className="flex flex-col items-center text-white">
      <div className="relative flex h-[415px] w-full items-end justify-center bg-black text-white">
        <Image
          src={`${BIG_IMAGE_BASE_URL}${movie.backdrop_path}`}
          alt={movie.title}
          width={1920}
          height={415}
          className="absolute inset-0 h-[415px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>
      <div className="bg-gray-0 hover:bg-gray-1 text-title1-sb flex h-[45px] w-[303px] items-center justify-center gap-[14px] rounded-[5.63px]">
        <Image src={PlayBtn} alt="" />
        <span>Play</span>
      </div>
      <div className="text-title3-sb mt-8 w-[303px]">{movie.title}</div>
      <div className="text-text5-sb mt-7 mb-20 w-[303px]">{movie.overview}</div>
    </div>
  );
}
