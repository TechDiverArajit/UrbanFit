import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSlider } from "../Context/sliderContext";
export const Menu =()=>{
    const {isMenuOpened , setIsMenuOpened , setIsCartOpened} = useSlider();
    const navHandler =({isActive})=>{
            return{
                color: isActive?"#C74747":""
            }
        }
    
    const menuHandler=()=>{
        setIsCartOpened(false);
        setIsMenuOpened(true);
    }
    
    return(
        <>
        
                    <div className="block sm:hidden fixed left-2 top-2 pt-2 ">
                    <img onClick={menuHandler} className=" w-[25px]"  src="/menu.svg" alt="" />
                    </div>
                    <div className= {`  ${isMenuOpened?`w-[180px]`:`w-0`} z-4 transition-all duration-200 ease-in overflow-hidden h-screen fixed bg-gray-300 top-0 left-0 flex flex-col pt-20 gap-10 shadow-[0_0_20px_rgba(0,0,0,0.3)]`}>
                        <img onClick={()=>setIsMenuOpened(false)} className="w-8 absolute top-2 right-2 " src="/left.png" alt="" />
                        <NavLink onClick={()=>setIsMenuOpened(false)} style={navHandler} to="/"  className="text-2xl h-9 transition-all pl-10 pt-10  duration-150 hover:text-blue-400">Home</NavLink>
                        <NavLink onClick={()=>setIsMenuOpened(false)} style={navHandler} to="/Men"  className="text-2xl h-9 transition-all pl-10 pt-10  duration-150 hover:text-blue-400" >Men</NavLink>
                        <NavLink onClick={()=>setIsMenuOpened(false)} style={navHandler} to="/Women" className="text-2xl h-9 transition-all pl-10 pt-10 duration-150 hover:text-blue-400 " >Women</NavLink>
                        <NavLink onClick={()=>setIsMenuOpened(false)} style={navHandler} to="/Blog"  className="text-2xl h-9 transition-all pl-10 pt-10 duration-150 hover:text-blue-400" >Blog</NavLink>
                        <h1 className=" relative top-200 text-lg lg:text-4xl font-extrabold p-2 lg:pl-15">UrbanFit</h1>
                    </div>
                    
                    </>
                
    )
}