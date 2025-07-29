import { Navbar } from "../Components/Navbar"

export const About =()=>{
    return(
        <>
        
        <div className="flex flex-col gap-5 p-10 my-20 lg:mx-10 xl:mx-30 w-screen ">
            <h1 className="font-semibold text-3xl  lg:relative lg:left-20 ">About us</h1>
        <img className=" rounded-2xl w-200 m-auto xl:m-10 " src="/hmposter.avif" alt="" />
        <div className="" >
        
                <h1 className="font-extralight text-2xl max-w-270 mx-3 wrap-break-word leading-relaxed ">At <span className="font-semibold">UrbanFit</span>, we don’t just showcase outfits — we showcase identities.Born from a 
passion for bold fashion and clean aesthetics, UrbanFit is your digital runway for 
discovering outfits that speak louder than words. 
</h1>
</div>
</div>
            
        </>
    )
}