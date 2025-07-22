import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
export const Clothes = ({product})=>{
    
    const items = useRef();

    useGSAP(()=>{
        gsap.from(items,{
            y:200,
            opacity:0
        })
    })

    return(
        <>
            <div ref={items} className="transition duration-100 hover:scale-1.1 ">
                <img src={product.bigImg} width={370} alt="" />
                <h1 className="font-extralight text-lg">{product.title}</h1>
                <h1>₹{product.price}</h1>
            </div>
        </>
    )
}