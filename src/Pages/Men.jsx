import { Clothes } from "../Components/Clothes"
import { Navbar } from "../Components/Navbar"
import MenProducts from "../DB/Products"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useEffect, useReducer, useRef, useState } from "react"
import { filterReducer } from "../Reducer/filterReducer"

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

    const initialState = {
        zara:false,
        hnm:false,
        Mango:false,
        color:"",
    }

    const[filterOpened , setFilterOpened] = useState(false);

    const[filter , dispatch ] = useReducer(filterReducer , initialState);

    const filteredProducts = MenProducts.filter(item =>{
        if(filter.zara && item.brand ==="Zara" ) return true
        if(filter.Mango && item.brand ==="Mango") return true;
        if( filter.hnm && item.brand==="h&m"  ) return true;
        if(  filter.color===item.acolor) return true;
        if(!filter.hnm && !filter.zara && !filter.Mango &&filter.color==="") return true
    })
    
    
    
    return(
        <>
        <div >
        

        <h1 className="font-bold text-2xl p-20 inline-block">New Arrivals for men</h1>
        <img onClick={()=>setFilterOpened(true)} className="w-[60px] absolute z-1 left-20 top-50" src="/filter.png" alt="" />
        <div className={`${filterOpened?`w-50`:`w-0`} overflow-hidden h-screen fixed shadow-2xl transition-all duration-200 z-1 top-0 left-0 bg-white`}>
            
            <div className="flex  flex-col justify-center items-center gap-8  absolute top-43 left-10">
                <div className="flex flex-col gap-3 items-center">
                    <h1 className="text-xl font-semibold">Brands:</h1>
                    <label className="flex items-center gap-1" htmlFor="">
                    <input checked={filter.hnm} className="peer appearance-none w-5 h-5 border-2 border-gray-400 rounded-2xl checked:bg-black checked:border-black relative " onClick={()=>dispatch({type:"HNM"})}  type="checkbox"   />
                    H&M

                    <svg
                    class="absolute w-3 h-3 text-white ml-1 hidden peer-checked:block pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                        >
                    <path d="M5 13l4 4L19 7" />
                     </svg>
                </label>
                <label className=" flex items-center gap-1" htmlFor="">
                    <input className="peer appearance-none w-5 h-5 border-2 border-gray-400 rounded-2xl checked:bg-black checked:border-black" onClick={()=>dispatch({type:"ZARA"})} checked={filter.zara} type="checkbox"    />
                    Zara
                    <svg
                    class="absolute w-3 h-3 text-white ml-1 hidden peer-checked:block pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                        >
                    <path d="M5 13l4 4L19 7" />
                     </svg>
                </label>
                <label  className="flex items-center gap-1" htmlFor="">
                    <input className="peer appearance-none w-5 h-5 border-2 border-gray-400 rounded-2xl checked:bg-black checked:border-black" onClick={()=>dispatch({type:"MANGO"})}  checked={filter.Mango} type="checkbox"  />
                    Mango
                     <svg
                    class="absolute w-3 h-3 text-white ml-1 hidden peer-checked:block pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                        >
                    <path d="M5 13l4 4L19 7" />
                     </svg>
                </label>
                </div>
                <div className="flex flex-col gap-3 items-center "  >
                    <h1 className="text-xl font-semibold">color:</h1>
                    <div onClick={()=>dispatch({type:"RED"})} className={` ${filter.color=="red"?`border-3`:''} w-10 h-10 flex items-center justify-center rounded-full`}>
                    <div  className=" w-8 h-8  rounded-full bg-red-500 border-2 border-white">

                    </div>
                    </div>

                    <div onClick={()=>dispatch({type:"BLACK"})}  className={` ${filter.color=="black"?`border-3`:''} w-10 h-10 flex items-center justify-center rounded-full`}>
                    <div className=" w-8 h-8 rounded-full bg-black border-2 border-white ">
                    </div>
                    </div>

                    <div onClick={()=>dispatch({type:"CREAM"})}  className={` ${filter.color=="cream"?`border-3`:''} w-10 h-10 flex items-center justify-center rounded-full`}>
                    <div className=" w-8 h-8 rounded-full bg-amber-200 border-2 border-white ">
                        
                    </div>
                    </div>
                    <div onClick={()=>dispatch({type:"BLUE"})}  className={` ${filter.color=="blue"?`border-3`:''} w-10 h-10 flex items-center justify-center rounded-full`}>
                    <div className=" w-8 h-8 rounded-full bg-[#1711C3] border-2 border-white  ">
                        
                    </div>
                    </div>

                    
                </div>
            <div className="overflow-hidden">
                <button onClick={()=>dispatch({type:"CLEAR"})} > x CLEAR</button>
                </div>
        </div>
        </div>
        
        <img src="" alt="" />
        <div ref={i}  className="  grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-4 lg:gap-20 gap-4 md:gap-10 sm:gap-5  xl:gap-20  lg:mx-15 md:mx-10 sm:mx-5 mx-2 xl:mx-20   relative ">
            { filteredProducts.length!=0?filteredProducts.map(item=><Clothes product={item} />  ): <h1 className="text-3xl font-semibold">Sorry , No matching products found</h1> }
        </div>
        
        </div>
        </>
    )
}