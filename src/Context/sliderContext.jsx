import { createContext, useContext, useState } from "react";

const sliderContext = createContext();

const SliderContextProvider=({children})=>{
    const[isCartOpened ,setIsCartOpened] = useState(false);
    const[isMenuOpened , setIsMenuOpened] = useState(false);
    const[filterOpened , setFilterOpened] = useState(false);
    return(
        <sliderContext.Provider value={{isCartOpened , setIsCartOpened , isMenuOpened , setIsMenuOpened , filterOpened , setFilterOpened}}>
            {children}
        </sliderContext.Provider>
    )
}

const useSlider = ()=> useContext(sliderContext);
export {useSlider , SliderContextProvider}