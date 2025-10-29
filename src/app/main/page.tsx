import CurrentPlaying from '@/components/CurrentPlaying';
import MidMenubar from '@/components/MidMenubar';
import Previews from '@/components/Previews';
import TheOthers from '@/components/TheOthers';

export default function Page(){
    return(
        <div className="flex flex-col">
            <CurrentPlaying />
            <div className="flex justify-center">
                <MidMenubar />
            </div>
            <Previews />
                        <Previews />
            <TheOthers />
        </div>
    )
}