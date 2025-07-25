import { useEffect, useState } from "react"
import { useCarts } from "../Context/cartContext";

export const CartItems = ({obj})=>{

    const{selectedSize , dispatch , cart } = useCarts();
    const[size ] = useState(selectedSize);

    useEffect(()=>{
        localStorage.setItem("clothes",JSON.stringify(cart.cartProducts))
    },[cart.cartProducts])

    return(
        <>
            <div className="flex flex-col relative  xl:flex-row my-10 mx-3 w-46 xl:w-[316px] sm:max-w-100% rounded-2xl h-[175px] shadow-lg bg-white">
                <img className="w-[60px] sm:w-[80px] md:w-[100px] xl:w-[120px] rounded-2xl mx-auto" src={obj.smImg}   alt="" />
                <div className="flex flex-col gap-1 pl-2 text-[10px] xl:text-sm">
                <h1 className="font-light text-[12px] mt-0 xl:mt-3 ">{obj.title}</h1>
                <h1><span className="text-md font-semibold mr-2">Price:</span>₹{obj.price}</h1>
                <h1 className="select-none flex "><span className="font-semibold mr-2" >Quantity: </span>
                    <div onClick={()=>dispatch({type:"MINUS",payload:obj})} className="w-[30px] rounded-tl-xl rounded-bl-xl bg-amber-100 text-center h-6  select-none">-</div> <div className=" text-center select-none w-9 h-6 ">{obj.quantity} </div> <div onClick={()=>dispatch({type:"PLUS",payload:obj})} className="text-center rounded-tr-xl rounded-br-xl w-[30px] bg-amber-100 select-none h-6 ">+</div>
                    </h1>
                <h1 cla >Size:{size}</h1>
                <img className="absolute bottom-0 right-3 w-[20px] md:w-[25px] lg:w-[28px] xl:w-[30px]  " onClick={()=>dispatch({type:'REMOVE',payload: obj.id})}   src="/Delete.png" width={30} alt="" />
                </div>
                
            </div>
        </>
    )
}