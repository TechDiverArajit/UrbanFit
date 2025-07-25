import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import SplitText from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
import { useNavigate } from "react-router-dom";
export const HomeProduct = ({obj})=>{
    const product = useRef();

    const navigate = useNavigate();

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
        <div onClick={()=>navigate(`/Items/${obj.id}`)}  ref={product} className=" mx-auto w-[150px] lg:w-[400px] h-fit ">
            <img className=" w-[200px] md:w-[375px]" src={obj.smImg} width={375} alt="" />
            <h1 className="xl:text-lg md:text-md sm:text-sm text-[12px]"  >{obj.title}</h1>
            <h1 className="xl:text-lg md:text-md sm:text-sm text-[12px]" >₹{obj.price}</h1>
        </div>
        </>
    )
}