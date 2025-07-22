import { Clothes } from "../Components/Clothes"
import { Navbar } from "../Components/Navbar"
import MenProducts from "../DB/Products"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

export const Men =()=>{

    const items = useRef();

    
    return(
        <>
        <h1 className="font-bold text-2xl p-20">New Arrivals for men</h1>
        <div  className="flex gap-20 mx-20 flex-wrap justify-center ">
            {MenProducts.map(item=>
                <Clothes product={item} />
            )}
        </div>
        </>
    )
}