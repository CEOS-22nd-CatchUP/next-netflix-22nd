import CurrentPlaying from '@/components/CurrentPlaying';
import MidMenubar from '@/components/MidMenubar';
import Previews from '@/components/Previews';
import TheOthers from '@/components/TheOthers';

export default async function Page(){
    return(
        <div className="flex flex-col bg-black text-white">
            <CurrentPlaying />
            <div className="flex justify-center">
                <MidMenubar />
            </div>
            <Previews />
            <TheOthers />
            <TheOthers />
            <TheOthers />
            <TheOthers />
            <div className="h-20" />
        </div>
    )
}