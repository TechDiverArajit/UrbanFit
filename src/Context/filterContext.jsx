import { createContext, useContext } from "react";
import { useReducer } from "react";
import MenProducts from "../DB/Products";
import WomanProduct from "../DB/WomanProducts";
import { filterReducer } from "../Reducer/filterReducer";
const filterContext = createContext();

const FilterContextProvider =({children})=>{

   const initialState = {
        zara:false,
        hnm:false,
        Mango:false,
        color:"",
    }

    

    const[filter , dispatch ] = useReducer(filterReducer , initialState); 

   const MenfilteredProducts = MenProducts.filter(item =>{
        if(filter.zara && item.brand ==="Zara" ) return true
        if(filter.Mango && item.brand ==="Mango") return true;
        if( filter.hnm && item.brand==="h&m"  ) return true;
        if(  filter.color===item.acolor) return true;
        if(!filter.hnm && !filter.zara && !filter.Mango &&filter.color==="") return true
    }) 

    const WomenfilteredProducts = WomanProduct.filter(item =>{
        if(filter.zara && item.brand ==="Zara" ) return true
        if(filter.Mango && item.brand ==="Mango") return true;
        if( filter.hnm && item.brand==="h&m"  ) return true;
        if(  filter.color===item.acolor) return true;
        if(!filter.hnm && !filter.zara && !filter.Mango &&filter.color==="") return true
    })

    
    return(
        <filterContext.Provider value={{filter , dispatch , MenfilteredProducts , WomenfilteredProducts}} >
            {children}
        </filterContext.Provider>
    )
}

const useFilter =() => useContext(filterContext);
export {useFilter , FilterContextProvider }