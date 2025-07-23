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
            <div className="flex my-10 mx-3 w-[316px] h-[165px] bg-white">
                <img src={obj.smImg}  width={120} alt="" />
                <div className="flex flex-col gap-1 pl-2">
                <h1 className="font-light ">{obj.title}</h1>
                <h1><span className="text-md font-semibold mr-2">Price:</span>₹{obj.price}</h1>
                <h1 className="select-none flex "><span className="font-semibold mr-2" >Quantity: </span>
                    <div onClick={()=>dispatch({type:"MINUS",payload:obj})} className="w-[30px] rounded-tl-xl rounded-bl-xl bg-amber-100 text-center h-6 border-1 select-none">-</div> <div className=" text-center select-none w-9 h-6 border-1">{obj.quantity} </div> <div onClick={()=>dispatch({type:"PLUS",payload:obj})} className="text-center rounded-tr-xl rounded-br-xl w-[30px] bg-amber-100 select-none h-6 border-1">+</div>
                    </h1>
                <h1 cla >Size:{size}</h1>
                <img onClick={()=>dispatch({type:'REMOVE',payload: obj.id})}  src="/Delete.png" width={30} alt="" />
                </div>
                
            </div>
        </>
    )
}