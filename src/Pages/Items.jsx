import { useParams } from "react-router-dom"
import MenProducts from "../DB/Products";
import WomanProduct from "../DB/WomanProducts";
import { useEffect, useRef, useState } from "react";
import { useCarts } from "../Context/cartContext";
import { useGSAP } from "@gsap/react";
import { SimilerProducts } from "../Components/SimilerProducts";
import gsap from "gsap";
export const Items = ()=>{

    const item = useRef();
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

    useGSAP(()=>{
        gsap.fromTo(item.current,{
            y:100,
            opacity:0,
            duration:0.3
        },{
            y:0,
            opacity:1,
            duration:0.4
        })
    })

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])

    return(
        <>
        <section>
            <div ref={item} className="flex flex-col md:flex-col  lg:flex-row  xl:flex-row  max-w-[1250px] overflow-x-hidden  m-auto ">
                <div className="mx-auto max-w-[530px] " >
            <img className="sm:w-[370px] w-[320px] md:w-[420px] lg:w-[470px] xl:w-[520px] " src={product.bigImg}  alt="" />
            </div>
        <div className="  mt-20 max-w-250  flex flex-col right-0 mx-5 sm:mx-auto xl:ml-10 gap-5 ">
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
                <button className="max-w-[465px] h-[47px] mx-3 bg-[#F2EFEF] font-normal text-md transition-all duration-200  rounded-2xl hover:bg-[#D6D6D6] ">ADD TO FAVOURITES</button>
                <button onClick={addToCart} className="max-w-[465px] h-[47px] mx-3 bg-[#000] text-white font-normal transition-all duration-200 text-md  rounded-2xl hover:bg-[#2A2929] ">ADD TO BAG</button>
                
                <h1 className=" ">product details: </h1>
                <span className="max-w-120 break-words ">{product.description}</span>
                <h1 className=" font-bold ">Material: </h1>
                <span className="max-w-120 break-words  ">{product.material}</span>
                <h1 className=" font-bold ">Delivery: </h1>
                <span className="max-w-120 break-words  ">{product.delivery}</span>
        </div>
            </div>
            
        </section>
        <section className="m-5">
            <h1 className="text-2xl font-bold  mt-30">Similar Products</h1>
            <div className="  px-2 xl:pl-15 grid xl:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:gap-8 md:gap-6 sm:gap-4 gap-4 xl:gap-10 mt-2">
                {product.similer.map(item=>
                    <SimilerProducts obj={joined[item]}/>
                )}

            </div>
            
        </section>
        
        
      
        
        </>
    )
    
}