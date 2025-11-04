import TopNavbar from '@/components/main/TopNavbar';
import BtmNavbar from '@/components/BtmNavbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black">
      <div className="relative flex h-full w-[375px] justify-center overflow-hidden">
        <div className="absolute top-0 z-20 flex">
          <TopNavbar />
        </div>
        <div className="flex-1 overflow-y-auto">{children}</div>
        <BtmNavbar />
      </div>
    </div>
  );
}
