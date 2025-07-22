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
            <div ref={item} onClick={()=>navigate(`/Items/${product.id}`)}  className="transition duration-400 hover:-translate-y-3 ">
                <img src={product.bigImg} width={370} alt="" />
                <h1 className="font-extralight text-lg">{product.title}</h1>
                <h1>₹{product.price}</h1>
            </div>
        </>
    )
}