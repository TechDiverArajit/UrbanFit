import { HomeProduct } from "../Components/HomeProduct"
import { Navbar } from "../Components/Navbar"
import { Testimonials } from "../Components/Testimonials"
import { createBrowserRouter , Route , Routes } from "react-router-dom"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from "react";
import { useGSAP } from '@gsap/react';
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
export const Home=()=>{

   


     const scope = useRef();

    useGSAP(()=>{
        const t1 = gsap.timeline();
        t1.fromTo(".brand",
            {y:200 , opacity:0},
            {
                y:0,
                opacity:1,
                duration:0.5,
                stagger:0.3,
                ease:"power1.inOut"
            }
        )
        t1.fromTo(".subtitle",
            {
                x:-200,
                opacity:0,
            },
            {
                x:0,
                opacity:1,
                duration:2,
            }
        )
        
        
        
        
    },)


    return(
        <>
        <Navbar/>
        <div className="h-screen ">
            
            <div ref={scope} className="">
            <h1 className="text-[450px] text-amber-50 font-semibold absolute top-90 left-3">
                {['U','r','b','a','n','F','i','t'].map((char,idx)=>(
                    <span key={idx} className="brand inline-block">{char}</span>
                ))}
            </h1>
            <p className="subtitle text-5xl font-extralight  text-amber-50 absolute top-125 left-10">Unleash the Drip.</p>
            {/* <img className="absolute left-130 top-10" src="/adobe.png" width={718} alt="" /> */}
            <video className=" absolute -z-2 top-30" src="/video.mp4" autoPlay loop muted playsInline></video>
        </div>
        </div>
        
        

        <div className=" gap-50 h-[1109px] flex justify-around bg-amber-50  pt-40 ">
            <div>
                <h1 className="font-semibold text-6xl">Minimal.</h1>
                <img src="/src/assets/zara1.jpg" width={400} alt="" />
            </div>
            <div className=" mt-20 ">
                <h1 className="font-semibold text-6xl"> Impactful.</h1>
                <img src="/src/assets/hm1.avif" width={400} alt="" />
            </div>
            <div>
                <h1 className="font-semibold text-6xl mt-40"> Iconic.</h1>
                <img src="/src/assets/zara2.jpg" width={400} alt="" />
            </div>
        </div>
        <div className="flex justify-around pt-27 h-[1000px]">
            <HomeProduct/>
            <HomeProduct/>
            <HomeProduct/>
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
                <span className="ml-5 text-4xl font-semibold pt-10 ">UrbanFit</span>
            <span class="ml-5 text-4xl font-semibold pt-10">UrbanFit</span>
            <span class="ml-5 text-4xl font-semibold pt-10">UrbanFit</span>
            <span class="ml-5 text-4xl font-semibold pt-10">UrbanFit</span>
            <span class="ml-5 text-4xl font-semibold pt-10">UrbanFit</span>
            <span class="ml-5 text-4xl font-semibold pt-10">UrbanFit</span>
            <span class="ml-5 text-4xl font-semibold pt-10">UrbanFit</span>
            <span class="ml-5 text-4xl font-semibold pt-10">UrbanFit</span>
            <span class="ml-5 text-4xl font-semibold pt-10">UrbanFit</span>
            <span class="ml-5 text-4xl font-semibold pt-10">UrbanFit</span>
            </div>

            <div className="h-[113px] bg-amber-100 flex gap-40">
            <span class="ml-5 text-4xl font-semibold pt-10">UrbanFit</span>
            <span class="ml-5 text-4xl font-semibold pt-10">UrbanFit</span>
            <span class="ml-5 text-4xl font-semibold pt-10">UrbanFit</span>
            <span class="ml-5 text-4xl font-semibold pt-10">UrbanFit</span>
            <span class="ml-5 text-4xl font-semibold pt-10">UrbanFit</span>
            <span class="ml-5 text-4xl font-semibold pt-10">UrbanFit</span>
            <span class="ml-5 text-4xl font-semibold pt-10">UrbanFit</span>
            <span class="ml-5 text-4xl font-semibold pt-10">UrbanFit</span>
            <span class="ml-5 text-4xl font-semibold pt-10">UrbanFit</span>
            <span class="ml-5 text-4xl font-semibold pt-10">UrbanFit</span>
            </div>
            </div>

            
            
            
            

            

        </div>
        </>


        
    )
}