import TopMenubar from '@/components/TopMenubar';
import BtmMenubar from '@/components/BtmMenubar';

export default function Layout({children} : {children: React.ReactNode}){
    return(
        <div className="w-screen h-screen flex border items-center justify-center">
            <div className="relative flex justify-center h-[812px] w-[375px] border overflow-hidden">
                <div className="absolute top-0 flex z-20">
                    <TopMenubar />
                </div>
                <div className="flex-1 overflow-y-auto">
                    {children}
                </div>
                <BtmMenubar />
            </div>
        </div>
    )
}