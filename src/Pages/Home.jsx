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
                <div className="relative -top-30">
            <h1 className=" text-[120px] lg:text-[250px] xl:text-[340px] text-amber-50 font-semibold absolute xl:top-0 top-50 left-3">
                {['U','r','b','a','n'].map((char,idx)=>(
                    <span key={idx} className="brand  inline-block select-none  text-black">{char}</span>
                ))}
                
            </h1>
            <h1 className=" text-[120px] md:text-[1] lg:text-[250px] xl:text-[340px] text-amber-50 font-semibold absolute lg:top-96  xl:top-65 top-80   left-3" >
                {['F','i','t'].map((char,idx)=>(
                    <span key={idx} className="brand  inline-block select-none  text-black">{char}</span>
                ))}
            </h1>
            </div>
            <p className="subtitle xl:text-5xl text-xl font-extralight select-none   text-black absolute xl:top-135 top-90 left-5  xl:left-10">Unleash the Drip.</p>
            <img ref={mainImg} className="w-[600px]  xl:bottom-0  absolute left-10 xl:left-180 xl:top-1 top-83 xl:w-[605px]   z-0 drop-shadow-2xl select-none  "   src="/zara.png"  alt="" />
            {/* <video className=" absolute -z-2 top-30" src="/video.mp4" autoPlay loop muted playsInline></video> */}
            <Explore/>
            <h1 className="sub font-semibold text-[11px] xl:text-[12px] w-80  xl:w-100  absolute bottom-30 right-8 ">
                Modern fashion reimagined for effortless elegance. Every piece is crafted to blend simplicity with sophistication — versatile, timeless, and made to move with you, from morning coffee to midnight plans.
            </h1>
        </div>
        </div>
        
        <Minimal/>
        <HomeProducts/>
        <div>
                
        </div>
        
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