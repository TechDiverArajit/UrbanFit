import { HomeProduct } from "./Components/HomeProduct";
import MenProducts from "./DB/Products";
import WomanProduct from "./DB/WomanProducts";

export const HomeProducts =()=>{

    const joined = [...MenProducts , ...WomanProduct];

    return(
        <>
        <div className="flex justify-around pt-27 h-[1000px]">
            <HomeProduct obj={joined[1]} />
            <HomeProduct obj={joined[12]} />
            <HomeProduct obj={joined[5]} />
        </div>
        </>
    )
    
}