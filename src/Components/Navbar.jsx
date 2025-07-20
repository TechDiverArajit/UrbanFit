import { NavLink } from "react-router-dom"
export const Navbar = ()=>{
        
        const navHandler =({isActive})=>{
            return{
                color: isActive?"#C74747":""
            }
        }

        return(
            <nav className=" flex sticky top-0 w-screen z-2 gap-20 m-10 h-15 pt-2 ml-0 shadow-2xl bg-amber-100  ">
                <h1 className=" text-4xl font-extrabold pl-15">UrbanFit</h1>
                <div className="flex gap-30 pl-80 text-4xl font-extralight ">
                <NavLink className="hover-underline text-center h-9">Home</NavLink>
                <NavLink className="hover-underline h-9" >Men</NavLink>
                <NavLink className="hover-underline h-9 " >Women</NavLink>
                <NavLink  className="hover-underline h-9" >About Us</NavLink>
                </div>
                <h1></h1>
            </nav>
        )
    
}