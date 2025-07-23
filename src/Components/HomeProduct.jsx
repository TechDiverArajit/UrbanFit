import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import SplitText from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
export const HomeProduct = ({obj})=>{
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

            }
        })
    })

    return(
        <>
        <div ref={product} className="">
            <img src={obj.smImg} width={375} alt="" />
            <h1>{obj.title}</h1>
            <h1>₹{obj.price}</h1>
        </div>
        </>
    )
}