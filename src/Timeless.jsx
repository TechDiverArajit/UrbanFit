import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import SplitText from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger);

import { useRef } from "react";
export const Timeless = ()=>{



    useGSAP(()=>{
        const split = new SplitText(".article", { type: "lines" ,});
        
        const t1 = new gsap.timeline();
        const t2 = new gsap.timeline();
        
        gsap.from(split.lines,
            {
                y:200,
                stagger:0.1,
                opacity:0,
                ease:"expo.inOut",
                duration:2,
                scrollTrigger:{
                trigger:split.lines,
                start:"top 80%",
                
            }
            }

        )
        gsap.from('.man',{
            y:400,
            opacity:0,
            duration:1,
            ease:"power2.inOut",
            scrollTrigger:{
                trigger:'.man',
                start:"top 80%",
                
            }
        })

        gsap.from('.timeless',
            {
                y:300,
                opacity:0,
                duration:1,
                delay:1,
                ease:"power2.inOut",
                scrollTrigger:{
                    trigger:".timeless",
                    start:"top 80%"
                }
            }
        )
        gsap.from('.iconic',
            {
                x:300,
                opacity:0,
                duration:1,
                delay:2,
                scrollTrigger:{
                    trigger:".iconic",
                    
                    
                }
            }
        )
        gsap.from('.woman',
            {
                y:300,
                opacity:0,
                duration:1,
                ease:"power2.inOut",
                scrollTrigger:{
                    trigger:".woman",
                    start:"top 90%"
                    
                }
            }
        )
        gsap.from('.elegance',
            {
                x:-300,
                opacity:0,
                duration:1,
                delay:1,
                ease:"power4.in",
                scrollTrigger:{
                    trigger:".elegance",
                    start:"top 80%"
                    
                }
            }
        )
    })

    return(
        <>
        <div className=" flex flex-col lg:flex-row overflow-hidden min-h-screen py-8 px-4 w-screen relative bg-white">
            <div className="   flex flex-col  w-[362px] h-fit">
                <div className="flex flex-row   w-[600px]  ">
                <img className="man lg:w-[400px] md:w-[350px] sm:w-[300px] w-[240px] xl:w-[450px]  " src="/zara_1_1.jpg" alt="" />
                <h1 className="timeless  font-extralight lg:text-8xl md:text-7xl sm:text-6xl text-5xl  xl:text-9xl h-fit m-0 my-auto  rotate-90 sm:left-[-110px] left-[-82px] relative md:left-[-130px] lg:left-[-180px]  xl:left-[-210px] " >TIMELESS</h1>
                </div>
                <h1 className="iconic font-extralight lg:text-8xl md:text-7xl sm:text-6xl text-5xl  xl:text-9xl mb-2" >ICONIC</h1>
                
            </div>
            <div className=" lg:text-xl md:text-lg sm:text-md  text-sm px-4  xl:text-2xl h-fit my-5  w-fit  lg:relative lg:left-50 xl:mt-100    text-center font-extralight  ">
                <h1 className="article max-w-200 m-0  lg:mx-auto ">Fashion isn’t about trends—it’s about presence.
                    A blend of comfort, confidence, and calm energy.
                    Each piece moves with intention, shaped by simplicity 
                    and strength. Designed to be worn, felt, and remembered—because 
                    real style doesn’t scream, it resonates.</h1>
            </div>

            <div className="  flex flex-col   items-end h-120 px-4 lg:relative xl:top-10 lg:top-100 xl:right-[-180px] ">
                <h1 className="elegance xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-5xl  font-extralight" >ELEGANCE</h1>
                <img className="woman lg:w-[400px]  md:w-[350px] sm:w-[300px] w-[240px] xl:w-[450px]" src="/wzara-1-1.jpg" alt="" />
            </div>
            {/* <div className="flex flex-row h-fit xl:w-[700px]  w-[362px] ">
                <h1 className="  font-extralight lg:text-8xl md:text-7xl sm:text-6xl text-[55px] h-fit  xl:text-9xl rotate-90  " >ELEGANCE</h1>
                <img className="  lg:w-[400px] md:w-[300px] sm:w-[250px] w-[240px]   xl:w-[500px] \ "  src="/wzara-1-1.jpg" alt="" />
                
            </div> */}
        </div>
        </>
    )
}