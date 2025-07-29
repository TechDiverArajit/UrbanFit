import { useRef } from "react"
import { Clothes } from "../Components/Clothes"
import { Navbar } from "../Components/Navbar"
import WomanProduct from "../DB/WomanProducts"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useEffect } from "react"
import { Filter } from "../Components/Filter"
import { useFilter } from "../Context/filterContext"
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
    useEffect(()=>{
            window.scrollTo(0,0);
        },[])

    const {WomenfilteredProducts} = useFilter();
    return(
        <>
        
        <h1 className="font-bold lg:text-xl md:text-lg sm:text-md text-sm  xl:text-2xl p-20 inline-block" >New Arrivals for women</h1>
        <Filter/>
        <div ref={i} className="mb-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:gap-20 gap-4 md:gap-10 sm:gap-5  xl:gap-20 lg:mx-15 md:mx-10 sm:mx-5 mx-2 flex-wrap justify-center relative">
             { WomenfilteredProducts.length!=0?WomenfilteredProducts.map(item=><Clothes product={item} />  ): <h1 className="text-3xl font-semibold">Sorry , No matching products found</h1> }
        </div>
        </>
    )
}