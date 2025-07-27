import { HomeProduct } from "./HomeProduct"
import { useNavigate, useParams } from "react-router-dom"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useEffect, useRef } from "react"
export const SimilerProducts = ({obj})=>{

    const i = useRef();
    useGSAP(()=>{
        gsap.fromTo(i.current,
            {y:200,opacity:0},
            {
                y:0,
                opacity:1,
                duration:0.5,
                ease:"power4.out"
            }
        )
    })
    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
  // call fetch logic or update selectedProduct etc.
  window.scrollTo(0, 0); // optional: scroll to top
}, [id]); 
    return(
        <>
                <div ref={i} onClick={()=>navigate(`/items/${obj.id}`)} className="">
                    <img className="lg:w-80 md:w-70 sm:w-60 " src={obj.bigImg} alt="" />
                    <h1>{obj.title}</h1>
                    <h1>₹{obj.price}</h1>
                </div>
                
                
            
        
        </>
    )
}