import { Clothes } from "../Components/Clothes"
import { Navbar } from "../Components/Navbar"
import MenProducts from "../DB/Products"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useEffect, useReducer, useRef } from "react"

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
        Mango:false
    }

    const reducer =(state,action)=>{
        switch(action.type){
            case "ZARA":
                return{
                    ...state,
                    zara:!state.zara
                }
            case "HNM":
                return{
                    ...state,
                    hnm:!state.hnm
                }
            case "MANGO":
                return{
                    ...state,
                    Mango:!state.Mango
                }
            default:
                return{
                    ...state
                }
        }
    }

    const[filter , dispatch ] = useReducer(reducer , initialState);

    const filteredProducts = MenProducts.filter(item =>{
        if(filter.zara && item.brand ==="Zara" ) return true
        if(filter.Mango && item.brand ==="Mango") return true;
        if(filter.hnm && item.brand==="h&m") return true;
        if(!filter.hnm && !filter.zara && !filter.Mango) return true
    })
    
    
    
    return(
        <>
        <div >

        
        <h1 className="font-bold text-2xl p-20 inline-block">New Arrivals for men</h1>
        <div>
            <img className="w-12 absolute left-20 top-50  " src="/filter.png" alt="" />
           
                <div className="absolute top-50 right-40 flex gap-2 z-2">
                    <h1>Brands:</h1>
                    <label htmlFor="">
                    <input onClick={()=>dispatch({type:"HNM"})}  type="checkbox"  value="h&m" />
                    H&M
                </label>
                <label className="has-checked:bg-amber-200 appearance-none" htmlFor="">
                    <input onClick={()=>dispatch({type:"ZARA"})} type="checkbox"   value="zara" />
                    Zara
                </label>
                <label onClick={()=>dispatch({type:"MANGO"})} htmlFor="">
                    <input type="checkbox" className="border-2"  value="Mango" />
                    Mango
                </label>
                </div>
                <div>
                    
                </div>
                
            
        </div>
        <img src="" alt="" />
        <div ref={i}  className="grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-4 lg:gap-20 gap-4 md:gap-10 sm:gap-5  xl:gap-20  lg:mx-15 md:mx-10 sm:mx-5 mx-2 xl:mx-20   relative ">
            {filteredProducts.map(item=>

                <Clothes product={item} />
            )}
        </div>
        
        </div>
        </>
    )
}