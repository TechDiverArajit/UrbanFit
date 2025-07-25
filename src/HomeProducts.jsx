import { HomeProduct } from "./Components/HomeProduct";
import MenProducts from "./DB/Products";
import WomanProduct from "./DB/WomanProducts";

export const HomeProducts =()=>{

    const joined = [...MenProducts , ...WomanProduct];

    return(
        <>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 h-screen justify-around py-5 ">
            <HomeProduct obj={joined[1]} />
            <HomeProduct obj={joined[12]} />
            <HomeProduct obj={joined[5]} />
        </div>
        </>
    )
    
}