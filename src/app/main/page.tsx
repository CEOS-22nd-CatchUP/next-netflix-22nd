import CurrentPlaying from '@/components/CurrentPlaying';
import { Crimes, NetflixOriginal, Thrillers } from '@/components/Genre';
import MidNavbar from '@/components/MidNavbar';
import Previews from '@/components/Previews';
import TheOthers from '@/components/TheOthers';

export default async function Page() {
  return (
    <div className="flex flex-col bg-black text-white">
      <CurrentPlaying />
      <div className="flex justify-center">
        <MidNavbar />
      </div>
      <Previews />
      <TheOthers />
      <Crimes />
      <NetflixOriginal />
      <Thrillers />
      <div className="h-20" />
    </div>
  );
}
