import { getPopularMovies } from '@/api/tmdb';
import InputSearch from '@/components/search/InputSearch';
import SearchList from '@/components/search/SearchList';

export default async function Page() {
  const popularMovies = await getPopularMovies();

  return (
    <div className="flex h-screen flex-col">
      <div className="top-0 flex-shrink-0">
        <div className="flex w-full justify-center pt-11">
          <InputSearch />
        </div>
        <div>
          <div className="text-title3-sb my-5 ml-2 text-white">Top Searches</div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto pb-17">
        <SearchList initialMovies={popularMovies} />
      </div>
    </div>
  );
}
