import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import SplitText from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
export const HomeProduct = ({img , title , price})=>{
    const product = useRef();

    useGSAP(()=>{
        gsap.fromTo(product.current,{
            scale:0,
            opacity:0
        },{
            scale:1,
            opacity:1,
            duration:1,
            ease:"power1.inOut",
            scrollTrigger:{
                trigger:product.current,
                start: "top 100%",
                end: "bottom 60%",
                markers:true
            }
        })
    })

    return(
        <>
        <div ref={product} className="">
            <img src="/src/assets/zara2sm.jpg" width={375} alt="" />
            <h1>TEXTURED POLO OVERSHIRT</h1>
            <h1>₹ 7,550.00</h1>
        </div>
        </>
    )
}