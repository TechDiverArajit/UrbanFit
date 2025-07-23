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
        <div ref={i} className="flex gap-20 mx-20 flex-wrap justify-center relative">
            {WomanProduct.map(item=>
                <Clothes product={item} />
            )}
        </div>
        </>
    )
}