import { HomeProduct } from "./HomeProduct"

export const SimilerProducts = ({obj})=>{
    return(
        <>
                <div className="">
                    <img className="lg:w-80 md:w-70 sm:w-60 " src={obj.bigImg} alt="" />
                    <h1>{obj.title}</h1>
                    <h1>₹{obj.price}</h1>
                </div>
                
                
            
        
        </>
    )
}