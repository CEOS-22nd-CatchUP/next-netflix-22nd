const BtmMenubar = () => {
    return(
        // 일단 모바일 부분 btm 살짝 띄워놨어!
        <div className="w-[375px] h-20 pb-[31.7px] px-5 gap-[10] justify-between border absolute bottom-0 flex flex-end">
            <div className="border">Home</div>
            <div className="border">Search</div>
            <div className="border">Comming Soon</div>
            <div className="border">Downloads</div>
            <div className="border">More</div>
        </div>
    )

}

export default BtmMenubar;