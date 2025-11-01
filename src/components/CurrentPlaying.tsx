export const dynamic = 'force-dynamic';

import Image from 'next/image';
import top10Logo from '@/svgs/menuBar/top10Logo.svg';
import { BIG_IMAGE_BASE_URL, getPopularMovies } from '@/api/tmdb';

const CurrentPlaying = async () => {
  const movies = await getPopularMovies();

  const top10Movies = movies.slice(0, 10);

  const randomIndex = Math.floor(Math.random() * top10Movies.length);
  const movie = top10Movies[randomIndex];
  const rank = randomIndex + 1;

  return (
    <div className="flex h-[415px] w-full flex-col items-center justify-between">
      <Image
        src={`${BIG_IMAGE_BASE_URL}${movie.backdrop_path}`}
        alt={movie.title}
        width={1920}
        height={415}
        className="brightness- z-0 h-[415px] w-full object-cover"
      />

      {/* backgroundIMG */}
      <div className="items-center justify-center"></div>
      <div className="text-title2-sb relative z-10 flex">
        <Image src={top10Logo} alt="top10" className="mr-1" />#{rank} in Korea Today
      </div>
    </div>
  );
};

export default CurrentPlaying;
