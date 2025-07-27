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
            <div ref={item} onClick={()=>navigate(`/Items/${product.id}`)}  className="transition duration-400   max-w-[370px] ">
                <div className="relative w-[370px] h-[500px] overflow-hidden group">
                    <img className="absolute w-full h-full object-cover transition-transform duration-700 ease-in-out translate-x-[-100%] group-hover:translate-x-0" src={product.bigImg}  alt="" />
                    <img className="absolute w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:translate-x-full " src={product.smImg} alt="" />
                </div>
                <h1 className=" xl:text-lg lg:text-md md:text-sm  text-[12px] lg: font-extralight max-w-fit">{product.title}</h1>
                <h1 className=" xl:text-lg lg:text-md md:text-sm  text-[12px] lg: font-extralight max-w-fit" >₹{product.price}</h1>
            </div>
        </>
    )
}