import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);


export const Minimal = ()=>{

    const minimal =  useRef();
    const Impactful = useRef();
    const iconic = useRef();

    useGSAP(()=>{
        gsap.fromTo(minimal.current, 
            {
            y:200,
            opacity:0
            },
            {
                y:0,
                opacity:1,
                duration:1,
                ease:"power1.inOut",
                scrollTrigger:{
                    trigger: minimal.current,
                    start: "top 80%",
                    end: "bottom 60%",
                    
                    
                }
            }
        )
        gsap.fromTo(Impactful.current, 
            {
            y:200,
            opacity:0
            },
            {
                y:0,
                opacity:1,
                duration:1,
                ease:"power1.inOut",
                scrollTrigger:{
                    trigger: Impactful.current,
                    start: "top 70%",
                    end: "bottom 60%",
                    
                    
                }
            }
        )

        gsap.fromTo(iconic.current, 
            {
            y:200,
            opacity:0
            },
            {
                y:0,
                opacity:1,
                duration:1,
                ease:"power1.inOut",
                scrollTrigger:{
                    trigger: iconic.current,
                    start: "top 50%",
                    end: "bottom 60%",
                    
                    
                }
            }
        )

        


    })

    return(
        <>
        <div className=" xl:gap-50 lg:gap-40    md:gap-30 sm:gap-20 gap-10 h-fit bg-blue-50 z-2 p-5 md:pt-40 ">
            <div className="m-auto flex flex-col md:flex-row justify-around gap-10 sm:gap-16 md:gap-20 lg:gap-28 xl:gap-36">

            
            <div ref={minimal} className="flex flex-col items-center md:items-start ">
                <h1 className="font-semibold lg:text-4xl text-3xl xl:text-6xl">Minimal.</h1>
                <img className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[400px]" src="/src/assets/zara1.jpg" width={400} alt="" />
            </div>
            <div ref={Impactful} className=" flex flex-col items-center md:items-start md:mt-20 ">
                <h1 className="font-semibold lg:text-4xl text-3xl xl:text-6xl"> Impactful.</h1>
                <img className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[400px]" src="/src/assets/hm1.avif" width={400} alt="" />
            </div>
            <div ref={iconic} className="flex flex-col items-center md:items-start  z-1" >
                <h1 className="font-semibold lg:text-4xl text-3xl xl:text-6xl lg:mt-40 "> Iconic.</h1>
                <img className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[400px]   " src="/src/assets/zara2.jpg" width={400} alt="" />
            </div>
            </div>
        </div>
        </>
    )

}