import { getDiscoverMoviesByGenre, getDiscoverTvByGenre } from '@/libs/tmdb';
import { BigRectangleSliders, RectangleSliders } from '../carousel/Carousel';

export const Crimes = async () => {
  const movies = await getDiscoverMoviesByGenre(80);
  return (
    <div className="mt-7">
      <div className="ml-4 h-[26.75px] w-[200px]">
        <p className="text-title4-sb">Crime Movies</p>
      </div>
      <div className="mt-2.5 ml-3 flex gap-2">
        <RectangleSliders movies={movies} />
      </div>
    </div>
  );
};

export const Thrillers = async () => {
  const movies = await getDiscoverMoviesByGenre(9648);
  return (
    <div className="mt-7">
      <div className="ml-4 h-[26.75px] w-[200px]">
        <p className="text-title4-sb">Mystery Movies</p>
      </div>
      <div className="mt-2.5 ml-3 flex gap-2">
        <RectangleSliders movies={movies} />
      </div>
    </div>
  );
};

export const NetflixOriginal = async () => {
  const movies = await getDiscoverMoviesByGenre(35);
  return (
    <div className="mt-7">
      <div className="ml-4 h-[26.75px] w-[200px]">
        <p className="text-title4-sb">Netflix Originals</p>
      </div>
      <div className="mt-2.5 ml-3 flex gap-2">
        <BigRectangleSliders movies={movies} />
      </div>
    </div>
  );
};
