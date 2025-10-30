import { getPopularMovies } from "@/api/tmdb";
import { CircleSliders } from "./carousel/Carousel";

const Previews = async () => {
    const movies= await getPopularMovies();

    return(
        <div className="mt-7">
            <div className="ml-4 w-[111px] h-26.75px">
                <p className="text-title3-sb">
                Previews
                </p>
                </div>
            <div className="ml-4 mt-5 flex gap-2">
            <CircleSliders movies={movies}/>
            </div>
        </div>
    )
}

export default Previews;