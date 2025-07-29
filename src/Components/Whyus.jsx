export const Whyus =({title , des})=>{

    return(
        <>
        <div className="w-[390px] lg:[270px] xl:h-[218px] p-3 hover:shadow-2xl transition-all duration-200 bg-white shadow-md rounded-2xl">
            <h1 className="font-semibold text-[18px] p-3">{title}</h1>
            <h1 className="font-light text-[16px]" >{des}</h1>
        </div>
        </>
    )
}