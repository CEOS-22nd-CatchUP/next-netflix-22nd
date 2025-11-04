import CurrentPlaying from '@/components/main/CurrentPlaying';
import { Crimes, NetflixOriginal, Thrillers } from '@/components/main/Genre';
import MidNavbar from '@/components/main/MidNavbar';
import Previews from '@/components/main/Previews';
import TheOthers from '@/components/main/TheOthers';

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
