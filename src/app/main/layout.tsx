import TopMenubar from '@/components/TopMenubar';
import BtmMenubar from '@/components/BtmMenubar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black">
      <div className="relative flex h-full w-[375px] justify-center overflow-hidden">
        <div className="absolute top-0 z-20 flex">
          <TopMenubar />
        </div>
        <div className="flex-1 overflow-y-auto">{children}</div>
        <BtmMenubar />
      </div>
    </div>
  );
}
