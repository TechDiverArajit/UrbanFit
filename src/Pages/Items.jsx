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
        <div>
              <h1 className="text-2xl absolute top-40 left-140 ">{product.title}</h1>
              <h1 className="text-2xl font-normal absolute top-50 left-140 "> Rs:{product.price}.00</h1>
              <h1 className="text-sm absolute top-57 left-140 ">MRP inclusive of all taxes</h1>
              <h1 className="text-sm absolute top-67 left-140 font-bold ">Color: <span className="font-normal">{product.color}</span></h1>
              <h1 className="text-sm absolute top-75 left-140 font-bold ">SIZE: <span className="font-normal">{selectedSize}</span> </h1>
               <div className="flex gap-3 absolute top-84 left-140 ">
                {product.size.map(item => 
                    <button onClick={()=>setSelectedSize(item)} className={ `${selectedSize===item?`border-3`:`border-1`} w-[46px] h-[35x] rounded-2xl border-1 `}>
                        {`${item}`}
                    </button>
                )}
                </div> 

                <h1 className="text-sm absolute top-95 left-140 font-bold ">Reviews: <span className="font-normal">{product.reviews}</span></h1> 
                <h1 className="text-sm absolute top-95 left-250 font-bold">{product.ratings}⭐</h1>
                <button className="w-[465px] h-[47px] bg-[#F2EFEF] font-normal text-md transition-all duration-200 absolute top-105 left-140 rounded-2xl hover:bg-[#D6D6D6] ">ADD TO FAVOURITES</button>
                <button onClick={addToCart} className="w-[465px] h-[47px] bg-[#000] text-white font-normal transition-all duration-200 text-md absolute top-120 left-140 rounded-2xl hover:bg-[#2A2929] ">ADD TO BAG</button>
                
                <h1 className="absolute top-140 left-140 font-bold ">product details: </h1>
                <span className="w-120 break-words absolute top-150 left-140 ">{product.description}</span>
                <h1 className="absolute top-183 left-140 font-bold ">Material: </h1>
                <span className="w-120 break-words absolute top-190 left-140 ">{product.material}</span>
                <h1 className="absolute top-200 left-140 font-bold ">Delivery: </h1>
                <span className="w-120 break-words absolute top-210 left-140 ">{product.delivery}</span>
        </div>
            </div>
            
        </div>
        
        
      
        
        </>
    )
    
}