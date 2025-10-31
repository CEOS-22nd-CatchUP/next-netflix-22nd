import { BTM_MENU_ITEMS } from "@/constants/menuItems";

const BtmMenubar = () => {
    return(
        <div className="py-3 gap-[7px] w-[375px] justify-center flex absolute bottom-0 items-center bg-gray-3 text-gray-1 text-nav3-sm">
            {BTM_MENU_ITEMS.map((item) => {
                const Icon = item.icon;
                return(
                    <div key={item.label} className="w-[63.8px] h-10 items-center">
                    <div className={`flex flex-col items-center ${item.adjustTop ? '-mt-px' : ''}`}>
                        <div className="cursor-pointer">
                        <Icon />
                        </div>
                        <p className={`${item.mtClass} cursor-pointer`}>{item.label}</p>
                    </div>
                    </div>
                );
            })}
        </div>
    )

}

export default BtmMenubar;