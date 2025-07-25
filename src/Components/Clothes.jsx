import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { useNavigate, useParams } from "react-router-dom"
export const Clothes = ({product})=>{
    
    const navigate = useNavigate();
    const item = useRef();

    useGSAP(()=>{
        gsap.fromTo(item,
            {y:200,opacity:0},
            {
                y:0,
                opacity:1,
                duration:0.5,
                ease:"power4.out"
            }
        )
    })


    

    return(
        <>
            <div ref={item} onClick={()=>navigate(`/Items/${product.id}`)}  className="transition duration-400   max-w-[370px] hover:-translate-y-3 ">
                <img className="w-[370px]" src={product.bigImg}  alt="" />
                <h1 className=" xl:text-lg lg:text-md md:text-sm  text-[12px] lg: font-extralight max-w-fit">{product.title}</h1>
                <h1 className=" xl:text-lg lg:text-md md:text-sm  text-[12px] lg: font-extralight max-w-fit" >₹{product.price}</h1>
            </div>
        </>
    )
}