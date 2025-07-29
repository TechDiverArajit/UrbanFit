
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from "react";
import { Minimal } from "../Minimal";
import { HomeProducts } from "../HomeProducts";
import SplitText from "gsap/SplitText";
import { Explore } from "../Components/Explore";
import { Timeless } from "../Timeless";
import { useNavigate } from 'react-router-dom';
import { Whyus } from '../Components/Whyus';
gsap.registerPlugin(ScrollTrigger,SplitText);

export const Home=()=>{

   

     const scope = useRef();
     const mainImg = useRef();
     const navigate = useNavigate();

        useGSAP(()=>{
        const split = new SplitText(".brand", { type: "chars" ,});
        const subtitle = new SplitText(".sub",{type: "lines"});
        const t1 = gsap.timeline();
        const t2 = gsap.timeline();
        

        t1.from(mainImg.current,{
            y:500,
            opacity:0,
            duration:1.5,
            ease:"power4.out"
        })
        t1.from(split.chars, {
        y: 200,
        opacity: 0,
        duration:1,
        stagger: 0.05,
        ease: "power4.out",
       })
       gsap.from(subtitle.lines ,{
            y: 200,
            opacity: 0,
            duration:1,
            stagger: 0.05,
            delay:2,
            ease: "power4.out",
        })
       
        t1.fromTo(".subtitle",
            {
                x:-200,
                opacity:0,
            },
            {
                x:0,
                opacity:1,
                duration:1,
            }
        )
        
    },)


    return(
        <>
        <div className="h-screen  bg-gradient-to-b  bg-white relative overflow-hidden ">
            
            <div ref={scope} className="">
            <div className="  flex flex-col relative px-4 top-40 sm:-top-20  ">
            <h1 className="text-[100px] sm:text-[200px] lg:text-[300px] md:text-[250px] xl:text-[340px] md:h-50 sm:h-40 h-20 lg:h-60  self-start xl:h-70 font-semibold">
                {['U','r','b','a','n'].map((char,idx)=>(
                    <span key={idx} className="brand  inline-block select-none  text-black">{char}</span>
                ))}
                
            </h1>
            <h1 className=" text-[100px] sm:text-[200px] lg:text-[300px] md:text-[250px] md:h-70 sm:h-60 h-30 lg:h-85 xl:h-100 xl:text-[340px] font-semibold " >
                {['F','i','t'].map((char,idx)=>(
                    <span key={idx} className="brand  inline-block select-none  text-black">{char}</span>
                ))}
            </h1>
            <p className="subtitle lg:text-3xl md:text-xl sm:text-md text-sm xl:text-5xl pl-2 sm:pl-5 ">Unleash the Drip.</p>
            </div>
            <button onClick={()=>navigate("/Men")} className='flex items-center absolute z-1 hover:underline text-sm sm:text  m-15 sm:m-2  top-1/2  sm:right-130'>SHOP NOW <span className='absolute pl-19 sm:pl-22 hover:translate-x-2 transition-transform duration-150  w-30'><img className='lg:w-7 md:w-6 sm:w-5 w-4' src="/arrow.png"  alt="" /></span> </button>
            <img ref={mainImg} className="max-w-[400px] md:max-w-[500px]  xl:bottom-0  absolute left-10 xl:left-180 xl:top-1 top-83 xl:max-w-[605px]   z-0 drop-shadow-2xl select-none  "   src="/zara.png"  alt="" />
            {/* <video className=" absolute -z-2 top-30" src="/video.mp4" autoPlay loop muted playsInline></video> */}
            <Explore/>
            <h1 className="sub font-semibold text-[10px] xl:text-[12px] w-80 mx-auto xl:w-100  absolute bottom-30 ml-2 sm:right-8 ">
                Modern fashion reimagined for effortless elegance. Every piece is crafted to blend simplicity with sophistication — versatile, timeless, and made to move with you, from morning coffee to midnight plans.
            </h1>
        </div>
        </div>
        
        <Minimal/>
        <Timeless/>
        <HomeProducts/>
        
        
        
        <div className="w-screen lg:h-[600px] bg-gradient-to-b from-[#FFFFFF] to-[#6d6653] pb-10 ">
            <div className='pt-10'>
            <h1 className='text-2xl font-semibold text-center' >Why choose us</h1>
            <h1 className='text-center text-[15px] font-light m-2 '>
                In a world overflowing with trends, we stand for timeless sophistication.
 Every detail we craft is a tribute to elegance, not noise. Here's why we are
 more than just a choice – we’re a statement.
            </h1>
            </div>
            <div className='flex lg:flex-row flex-col items-center gap-30 justify-around mt-20'>
            <Whyus title={"🌿 Refined Craftsmanship"} des={"Each piece we create is born from a meticulous process. Our artisans don’t rush – they curate. From the stitching on a coat to the finish on a heel, we honor tradition while embracing innovation. This isn’t fast fashion. This is forever fashion."}/>
            <Whyus title={"💫 Minimal Yet Iconic"} des={`We believe less truly is more. Our designs breathe – clean lines, neutral palettes, bold silhouettes. They whisper confidence without ever needing to scream. You don’t wear us to fit in. You wear us to stand out quietly.`} />
            <Whyus title={"💖 Designed for You"} des={"You're not average, and neither are we. Every collection is thoughtfully designed to celebrate individuality – your walk, your flair, your vibe. Whether you’re conquering the boardroom or dancing under moonlight, we’re stitched for your moment."}/>
                </div>
    </div>
        </>


        
    )
}