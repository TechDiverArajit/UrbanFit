import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);


export const Minimal = ()=>{

    const i = useRef();
    const navigate = useNavigate();

    useGSAP(()=>{
        gsap.fromTo(i.current,
            {
                scale:1.1,
            },
            {
                scale:1,
                duration:0.5,
                ease:"power4.in",
                scrollTrigger:{
                    trigger:i.current,
                    start:"top 20%"
                    
                }
            }
        )
    })

    return(
        <>
        <div ref={i} className="flex flex-col sm:flex-row relative overflow-hidden h-screen">
            <div onClick={()=>navigate("/Men")} className=" cursor-pointer h-1/2 w-full sm:w-1/2 " >
                <div className="absolute text-white left-10 xl:top-120 lg:top-100 md:top-80 sm:top-60 top-40 ">
                    <h1 className="text-6xl h-6 sm:h-2 font-thin">for</h1>
                    <h1 className="xl:text-[200px] lg:text-[170px] md:text-[130px] sm:text-[110px] text-[80px] font-extralight">Men</h1>
                </div>
                
                <img className=" " src="/hm-9-1.avif" alt="" />
                
                
                
            </div>
            <div onClick={()=>navigate("/Women")} className="relative cursor-pointer h-1/2 w-full sm:w-1/2">
                <div className="absolute text-white left-5 sm:left-10 xl:top-120 lg:top-110 md:top-90 sm:top-70 top-50 ">
                    <h1 className="text-6xl h-6 sm:h-2 font-thin">for</h1>
                    <h1 className="xl:text-[200px] lg:text-[180px] md:text-[160px] sm:text-[140px] text-[80px] font-extralight ">Women</h1>
                </div>
                <img className="  " src="/whm-main.avif" alt="" />
                
            </div>
        </div>
        </>
    )

}