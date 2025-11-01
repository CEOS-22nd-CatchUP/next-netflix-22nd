import { getPopularMovies } from '@/api/tmdb';
import { CircleSliders } from './carousel/Carousel';

const Previews = async () => {
  const movies = await getPopularMovies();

  return (
    <div className="mt-7">
      <div className="h-26.75px ml-4 w-[111px]">
        <p className="text-title3-sb">Previews</p>
      </div>
      <div className="mt-5 ml-4 flex gap-2">
        <CircleSliders movies={movies} />
      </div>
    </div>
  );
};

export default Previews;
