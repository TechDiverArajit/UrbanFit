export const Footer = ()=>{

    return(
        <>
            <div className="w-screen relative flex  items-center justify-center md:justify-around gap-5 sm:gap-30 h-50 mt-20 bg-amber-100 " >
                <div className="flex flex-col font-semibold ">
                <h1 className="md:text-[40px] sm:text-[30px] text-[25px] font-black">
                    Urban
                </h1>
                <h1 className="md:text-[40px] sm:text-[30px] text-[25px] font-black" >
                    Fit
                </h1>
                </div>
                <div className="flex gap-5 sm:gap-20">

                
                <div>
                    <h1 className="sm:text-2xl  text-md font-medium" >
                        Shop Links
                    </h1>
                    <div className="sm:text-md text-[12px] font-extralight mt-1 sm:mt-2" >
                        <h1 className="cursor-pointer hover:underline" >
                            Men
                        </h1>
                        <h1 className="cursor-pointer hover:underline" >Women</h1>
                        <h1 className="cursor-pointer hover:underline">Best Sellers</h1>
                        <h1 className="cursor-pointer hover:underline">Trending Now</h1>
                    </div>
                </div>
                <div >
                    <h1 className="sm:text-2xl text-md font-medium" >customer services</h1>
                    <div className="sm:text-md text-[12px] font-extralight mt-1 sm:mt-2">
                        <h1 className="cursor-pointer hover:underline" >shipping info</h1>
                        <h1 className="cursor-pointer hover:underline">track your orders</h1>
                        <h1 className="cursor-pointer hover:underline">profile</h1>
                        <h1 className="cursor-pointer hover:underline">return and refunds</h1>
                    </div>
                </div>
                </div>
                <div className="flex flex-col gap-2">
                <h1 className="font-semibold sm:text-[22px] text-md md:text-2xl">Our Socials</h1>
                
                    <img src="/facebook.png" width={30} alt="" />
                    <img src="/instagram.png" width={30} alt="" />
                    <img src="/twitter.png" width={30} alt="" />
                </div>
                
            </div>
        </>
    )
}