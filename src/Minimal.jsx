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
                    markers:true
                    
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
        <div className=" gap-50 h-[1109px] flex justify-around bg-amber-50 z-2  pt-40 ">
            <div ref={minimal}>
                <h1 className="font-semibold text-6xl">Minimal.</h1>
                <img src="/src/assets/zara1.jpg" width={400} alt="" />
            </div>
            <div ref={Impactful} className=" mt-20 ">
                <h1 className="font-semibold text-6xl"> Impactful.</h1>
                <img src="/src/assets/hm1.avif" width={400} alt="" />
            </div>
            <div ref={iconic}>
                <h1 className="font-semibold text-6xl mt-40"> Iconic.</h1>
                <img src="/src/assets/zara2.jpg" width={400} alt="" />
            </div>
        </div>
        </>
    )

}