import { getDiscoverTvByGenre } from "@/api/tmdb";
import { BigRectangleSliders, RectangleSliders } from "./carousel/Carousel";

export const Crimes =async () => {
    const movies = await getDiscoverTvByGenre(80)
    return (
         <div className="mt-7">
                    <div className="ml-4 w-[200px] h-26.75px">
                        <p className="text-title4-sb">
                            Crime TV Series
                            </p>
                            </div>
                    <div className="ml-4 mt-2.5 flex gap-2">
                       <RectangleSliders movies={movies}/>
                    </div>
                </div>
    );
};

export const Thrillers =async () => {
    const movies = await getDiscoverTvByGenre(9648)
    return (    
          <div className="mt-7">
                    <div className="ml-4 w-[200px] h-26.75px">
                        <p className="text-title4-sb">
                         Mystery TV Series
                            </p>
                            </div>
                    <div className="ml-4 mt-2.5 flex gap-2">
                       <RectangleSliders movies={movies}/>
                    </div>
                </div>);}


export const NetflixOriginal =async () => {
    const movies = await getDiscoverTvByGenre(35)
    return (    
          <div className="mt-7">
                    <div className="ml-4 w-[200px] h-26.75px">
                        <p className="text-title4-sb">
                         Netflix Originals
                            </p>
                            </div>
                    <div className="ml-4 mt-2.5 flex gap-2">
                       <BigRectangleSliders movies={movies}/>
                    </div>
                </div>);}
