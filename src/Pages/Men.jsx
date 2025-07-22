import { Clothes } from "../Components/Clothes"
import { Navbar } from "../Components/Navbar"
import MenProducts from "../DB/Products"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

export const Men =()=>{

        const i = useRef();
    useGSAP(()=>{
        gsap.fromTo(i.current,
            {y:200,opacity:0},
            {
                y:0,
                opacity:1,
                duration:0.5,
                ease:"power4.out"
            }
        )
    })
    
    
    return(
        <>
        <h1 className="font-bold text-2xl p-20 inline-block">New Arrivals for men</h1>
        <div ref={i}  className="flex gap-20 mx-20 flex-wrap justify-center relative ">
            {MenProducts.map(item=>

                <Clothes product={item} />
            )}
        </div>
        </>
    )
}