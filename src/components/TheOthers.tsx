import { getPopularMovies } from '@/api/tmdb';
import { RectangleSliders } from './carousel/Carousel';

// const TheOthers =async () => {
//     const movies = await getPopularMovies();

//     return(
//         <div className="mt-7">
//             <div className="ml-4 w-[200px] h-26.75px">
//                 <p className="text-title4-sb">
//                     Trending Now
//                     </p>
//                     </div>
//             <div className="ml-4 mt-2.5 flex gap-2">
//                <RectangleSliders movies={movies}/>
//             </div>
//         </div>
//     )
// }

// export default TheOthers;

export default async function TheOthers() {
  const movies = await getPopularMovies();

  return (
    <div className="mt-7">
      <div className="ml-4">
        <p className="text-title4-sb">Trending Now</p>
      </div>
      <div className="mt-3 ml-3 flex gap-2">
        <RectangleSliders movies={movies} />
      </div>
    </div>
  );
}
