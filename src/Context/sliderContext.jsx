import { createContext, useContext, useState } from "react";

const sliderContext = createContext();

const SliderContextProvider=({children})=>{
    const[isCartOpened ,setIsCartOpened] = useState(false);
    const[isMenuOpened , setIsMenuOpened] = useState(false);
    return(
        <sliderContext.Provider value={{isCartOpened , setIsCartOpened , isMenuOpened , setIsMenuOpened}}>
            {children}
        </sliderContext.Provider>
    )
}

const useSlider = ()=> useContext(sliderContext);
export {useSlider , SliderContextProvider}