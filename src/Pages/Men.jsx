import { Clothes } from "../Components/Clothes"
import { Navbar } from "../Components/Navbar"
import MenProducts from "../DB/Products"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useEffect, useReducer, useRef, useState } from "react"
import { filterReducer } from "../Reducer/filterReducer"
import { useSlider } from "../Context/sliderContext"
import { useFilter } from "../Context/filterContext"
import { Filter } from "../Components/Filter"

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
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    const{MenfilteredProducts} = useFilter();
    
    
    
    return(
        <>
        <div >
        

        <h1 className="font-bold lg:text-xl md:text-lg sm:text-md text-sm  xl:text-2xl p-20 inline-block">New Arrivals for men</h1>
        
            <Filter/>
        
        <div ref={i}  className="mb-10  grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-4 lg:gap-20 gap-4 md:gap-10 sm:gap-5  xl:gap-20  lg:mx-15 md:mx-10 sm:mx-5 mx-2 xl:mx-20   relative ">
            { MenfilteredProducts.length!=0?MenfilteredProducts.map(item=><Clothes product={item} />  ): <h1 className="text-3xl font-semibold">Sorry , No matching products found</h1> }
        </div>
        
        </div>
        </>
    )
}