import { NavLink } from "react-router-dom"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from "gsap/SplitText";
import { useReducer, useState } from "react";
import { cartReducer } from "../Reducer/cartReducer";
import { useCarts } from "../Context/cartContext";
import { CartItems } from "./CartItem";
gsap.registerPlugin(ScrollTrigger,SplitText);
export const Navbar = ()=>{

        const {cart} = useCarts();
        
        const navHandler =({isActive})=>{
            return{
                color: isActive?"#C74747":""
            }
        }
        const[isCartOpened ,setIsCartOpened] = useState(false);

        useGSAP(()=>{
            const split = new SplitText(".hover-underline" , {type:"words"});
            gsap.fromTo([".brandsm" ,split.words,],
                {
                  y:-200,
                  opacity:0
                },
                {
                    y:0,  
                    opacity:1,
                    duration:1,
                    ease:"power1.inOut",
                    stagger: 0.2
                }
            )
        })

        const total = cart.cartProducts.reduce((acc ,curr)=>{
            return acc+curr.price*curr.quantity
        },0)

        

        return(
            <nav className=" flex sticky top-0 w-screen z-2 gap-20 p-10 bg-white h-15 pt-2 ml-0 shadow-2xl   ">
                <h1 className="brandsm text-4xl font-extrabold pl-15">UrbanFit</h1>
                <div className="flex gap-30 pl-80 text-4xl font-extralight ">
                <NavLink style={navHandler} to="/"  className="hover-underline text-center h-9">Home</NavLink>
                <NavLink style={navHandler} to="/Men"  className="hover-underline h-9" >Men</NavLink>
                <NavLink style={navHandler} to="/Women" className="hover-underline h-9 " >Women</NavLink>
                <NavLink style={navHandler} to="/Blog"  className="hover-underline h-9" >Blog</NavLink>
                </div>
                <div onClick={()=>setIsCartOpened(true)} className="absolute right-15 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="50px" height="50px" viewBox="0 0 24 24">
                <path d="M18 7h-3V6a3 3 0 0 0-6 0v1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm-7-1a1 1 0 0 1 2 0v1h-2V6zm6 13H7V9h2v1.5a1 1 0 0 0 2 0V9h2v1.5a1 1 0 0 0 2 0V9h2v10z"/>
                </svg>
                <h1  className={`${cart.cartProducts.length===0?`w-0 h-0`:`w-6 h-6`} transition-all duration-200
                     rounded-xl text-md text-center absolute right-8 top-0 bg-amber-400`}>{cart.cartProducts.length}</h1>
                </div>
                <div>
                    <div className={` ${isCartOpened?`w-[350px]`:`w-0`} overflow-y-auto shadow-[-2px_0_5px_rgba(0,0,0,0.45)] overflow-x-hidden transition-all duration-300 ease-in h-200 bg-[#E2E2E2] fixed top-0 right-0`} >
                    <span onClick={()=>setIsCartOpened(false)} className="font-medium text-lg p-3 cursor-pointer hover:text-gray-700">{`Close >`}</span>
                    {cart.cartProducts.map(item => 
                        <div key={item.id}>
                            <CartItems obj={item} />
                        </div>
                        
                    )}
                    <div className={`${isCartOpened?`w-[350px]`:`w-0`} transition-all duration-300 ease-in shadow-[0_-3px_10px_rgba(0,0,0,0.45)] h-[115px] bg-white fixed bottom-0 right-0`}>
                        <h1 className="p-5"><span className="font-semibold ">SUBTOTAL: ₹</span>{total}</h1>
                        <button className="font-bold w-80 border-2 ml-5 rounded-2xl hover:bg-gray-300 " >Proceed To Payment</button>
                    </div>
                </div>
                
                </div>
            </nav>
        )
    
}