import { useParams } from "react-router-dom"
import MenProducts from "../DB/Products";
import WomanProduct from "../DB/WomanProducts";
import { useEffect, useState } from "react";
import { useCarts } from "../Context/cartContext";
export const Items = ()=>{

    const param = useParams();
    console.log(param);
    const joined = [...MenProducts , ...WomanProduct]
    const {selectedSize, setSelectedSize , cart, dispatch} = useCarts();

    const product = joined.find(({id}) => param.id == id);

    const addToCart = ()=>{
        dispatch({type:"ADD-TO-CART" , payload: product})
    }

    useEffect(()=>{
        localStorage.setItem("clothes",JSON.stringify(cart.cartProducts))
    },[cart.cartProducts])

    return(
        <>
        <div >
            <div className="flex relative w-[1250px] h-[870px]  m-auto ">
                <div >
            <img className="absolute" src={product.bigImg} width={520} alt="" />
        </div>
        <div className=" overflow-y-auto mt-20 w-250 h-fit flex flex-col ml-140 gap-5 ">
              <h1 className="text-2xl">{product.title}</h1>
              <h1 className="text-2xl  "> Rs:{product.price}.00</h1>
              <h1 className="text-sm ">MRP inclusive of all taxes</h1>
              <h1 className="text-sm ">Color: <span className="font-normal">{product.color}</span></h1>
              <h1 className="text-sm ">SIZE: <span className="font-normal">{selectedSize}</span> </h1>
               <div className="flex gap-3  ">
                {product.size.map(item => 
                    <button onClick={()=>setSelectedSize(item)} className={ `${selectedSize===item?`border-3`:`border-1`} w-[46px] h-[35x] rounded-2xl border-1 `}>
                        {`${item}`}
                    </button>
                )}
                </div> 

                <h1 className="text-sm  ">Reviews: <span className="font-normal">{product.reviews}</span></h1> 
                <h1 className="text-sm ">{product.ratings}⭐</h1>
                <button className="w-[465px] h-[47px] bg-[#F2EFEF] font-normal text-md transition-all duration-200  rounded-2xl hover:bg-[#D6D6D6] ">ADD TO FAVOURITES</button>
                <button onClick={addToCart} className="w-[465px] h-[47px] bg-[#000] text-white font-normal transition-all duration-200 text-md  rounded-2xl hover:bg-[#2A2929] ">ADD TO BAG</button>
                
                <h1 className=" ">product details: </h1>
                <span className="w-120 break-words ">{product.description}</span>
                <h1 className=" font-bold ">Material: </h1>
                <span className="w-120 break-words  ">{product.material}</span>
                <h1 className=" font-bold ">Delivery: </h1>
                <span className="w-120 break-words  ">{product.delivery}</span>
        </div>
            </div>
            
        </div>
        
        
      
        
        </>
    )
    
}