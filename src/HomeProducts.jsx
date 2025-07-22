import { HomeProduct } from "./Components/HomeProduct";

export const HomeProducts =()=>{

    

    return(
        <>
        <div className="flex justify-around pt-27 h-[1000px]">
            <HomeProduct/>
            <HomeProduct/>
            <HomeProduct/>
        </div>
        </>
    )
    
}