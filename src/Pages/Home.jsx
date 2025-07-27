import { HomeProduct } from "../Components/HomeProduct"
import { Navbar } from "../Components/Navbar"
import { Testimonials } from "../Components/Testimonials"
import { createBrowserRouter , Route , Routes } from "react-router-dom"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from "react";
import { useGSAP } from '@gsap/react';
import { useRef } from "react";
import { Minimal } from "../Minimal";
import { HomeProducts } from "../HomeProducts";
import SplitText from "gsap/SplitText";
import { Explore } from "../Components/Explore";
gsap.registerPlugin(ScrollTrigger,SplitText);

export const Home=()=>{

   

     const scope = useRef();
     const mainImg = useRef();

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
            <img ref={mainImg} className="max-w-[400px] md:max-w-[500px]  xl:bottom-0  absolute left-10 xl:left-180 xl:top-1 top-83 xl:max-w-[605px]   z-0 drop-shadow-2xl select-none  "   src="/zara.png"  alt="" />
            {/* <video className=" absolute -z-2 top-30" src="/video.mp4" autoPlay loop muted playsInline></video> */}
            <Explore/>
            <h1 className="sub font-semibold text-[10px] xl:text-[12px] w-80 mx-auto xl:w-100  absolute bottom-30 ml-2 sm:right-8 ">
                Modern fashion reimagined for effortless elegance. Every piece is crafted to blend simplicity with sophistication — versatile, timeless, and made to move with you, from morning coffee to midnight plans.
            </h1>
        </div>
        </div>
        
        <Minimal/>
        <HomeProducts/>
        
        
        <div className="h-[1024px] flex gap-50 bg-gray-300 ">
            <div>
            <img src="/src/assets/hm4.avif" width={682} alt="" />
        </div>
        <div>
            <h1 className="text-6xl pt-20 font-bold">Our Happy Customers</h1>
        </div>
        <div className="absolute left-200 pt-60">
            <Testimonials user={" Zaid R. (Hyderabad)"} review={"“Bro I didn’t even know affordable outfits could look this luxe. My fashion game just leveled up 🧢.”"} />
        </div>
        <div className="absolute left-350 pt-100">
            <Testimonials user={"Riya T. (Delhi)"} review={"“UrbanFit is my new obsession! Every fit feels like it’s made for Insta 😍📸.”"} />
        </div>
        <div className="absolute left-200 pt-150">
            <Testimonials user={" Aarav J., Hyderabad"} review={"“Didn’t expect such premium quality at this price. The packaging, the feel, everything’s 🔥.”"} />
        </div>
        <div className="absolute left-350 pt-200">
            <Testimonials user={" Tanya K., Bangalore"} review={"“Minimal yet bold – exactly my aesthetic. I’ve already ordered three more outfits.”"} />
        </div>
        </div>
        <div className="flex h-[613px]">
            <div className="w-[849px] pt-10 pl-25">
                <h1 className="font-semibold text-2xl">About us</h1>
                <h1 className="font-extralight text-2xl">At UrbanFit, we don’t just showcase outfits — we showcase identities.Born from a 
passion for bold fashion and clean aesthetics, UrbanFit is your digital runway for 
discovering outfits that speak louder than words.
</h1>
            </div>
            <img className=" absolute right-0" src="/hm3.avif" width={411} alt="" />
        </div>
        <div className=" overflow-x-hidden whitespace-nowrap ">
            <div className="flex animate-marquee w-[200%]">
                <div className="h-[113px] bg-amber-100 flex gap-40">
                </div>
            </div>

        </div>
        </>


        
    )
}