import { NavLink } from "react-router-dom"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from "gsap/SplitText";
import { useReducer, useState } from "react";
import { cartReducer } from "../Reducer/cartReducer";
gsap.registerPlugin(ScrollTrigger,SplitText);
export const Navbar = ()=>{

        const initialState = {
            cartProducts:[],
        }

        const[cart,dispatch] = useReducer(initialState, cartReducer)
        
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

        

        return(
            <nav className=" flex sticky top-0 w-screen z-2 gap-20 p-10 bg-transparent h-15 pt-2 ml-0 shadow-2xl   ">
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
                <h1 className="w-6 h-6 rounded-xl text-md text-center absolute right-8 top-0 bg-amber-400">1</h1>
                </div>
                <div className={` ${isCartOpened?`w-[350px]`:`w-0`} scroll-auto transition-all duration-300 ease-in h-230 bg-[#E2E2E2] fixed top-0 right-0`} >
                    <span onClick={()=>setIsCartOpened(false)} className="font-medium text-lg p-3">x Close</span>

                </div>
            </nav>
        )
    
}