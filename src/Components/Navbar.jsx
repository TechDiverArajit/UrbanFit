import { NavLink } from "react-router-dom"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export const Navbar = ()=>{
        
        const navHandler =({isActive})=>{
            return{
                color: isActive?"#C74747":""
            }
        }



        useGSAP(()=>{
            
            gsap.fromTo([".brandsm" , ".hover-underline"],
                {
                  y:-200,
                  x:-200,
                  opacity:0
                },
                {
                    y:0,
                    x:0,
                    opacity:1,
                    duration:1,
                    ease:"power1.inOut",
                    stagger: 0.2
                }
            )

            
        })

        

        return(
            <nav className=" flex sticky top-0 w-screen z-2 gap-20 m-10 h-15 pt-2 ml-0 shadow-2xl bg-amber-100  ">
                <h1 className="brandsm text-4xl font-extrabold pl-15">UrbanFit</h1>
                <div className="flex gap-30 pl-80 text-4xl font-extralight ">
                <NavLink style={navHandler} to="/"  className="hover-underline text-center h-9">Home</NavLink>
                <NavLink style={navHandler} to="/Men"  className="hover-underline h-9" >Men</NavLink>
                <NavLink style={navHandler} to="/Women" className="hover-underline h-9 " >Women</NavLink>
                <NavLink style={navHandler} to="/Blog"  className="hover-underline h-9" >Blog</NavLink>
                </div>
                <h1></h1>
            </nav>
        )
    
}