import HomeIcon from '@/components/icons/HomeIcon';
import SearchIcon from '@/components/icons/SearchIcon';
import CommingSoonIcon from '@/components/icons/CommingSoonIcon';
import DownloadIcon from '@/components/icons/DownloadIcon';
import MoreIcon from '@/components/icons/MoreIcon'

const BtmMenubar = () => {
    return(
        <div className="w-[375px] h-20 pb-[31.7px] px-5 justify-between border absolute bottom-0 flex flex-end bg-gray-3 text-gray-1 text-nav3-sm">
            <div className="">
            <HomeIcon />
            </div>
            <div>
            <SearchIcon />
            </div>
            <div>
            <CommingSoonIcon />
            </div>
            <div>
            <DownloadIcon />
            </div>
            <div>
            <MoreIcon />
            </div>
        </div>
    )

}

export default BtmMenubar;