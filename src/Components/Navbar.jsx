import { NavLink } from "react-router-dom"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger,SplitText);
export const Navbar = ()=>{
        
        const navHandler =({isActive})=>{
            return{
                color: isActive?"#C74747":""
            }
        }



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
                <h1></h1>
            </nav>
        )
    
}