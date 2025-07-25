import { useRef } from "react"
import { Clothes } from "../Components/Clothes"
import { Navbar } from "../Components/Navbar"
import WomanProduct from "../DB/WomanProducts"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
export const Women =()=>{
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
        
        <h1 className="font-bold text-2xl p-20 inline-block" >New Arrivals for women</h1>
        <div ref={i} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:gap-20 gap-4 md:gap-10 sm:gap-5  xl:gap-20 lg:mx-15 md:mx-10 sm:mx-5 mx-2 flex-wrap justify-center relative">
            {WomanProduct.map(item=>
                <Clothes product={item} />
            )}
        </div>
        </>
    )
}