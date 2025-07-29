import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from './Context/cartContext.jsx'
import { SliderContextProvider } from './Context/sliderContext.jsx'
import { FilterContextProvider } from './Context/filterContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <CartContextProvider>
      <SliderContextProvider>
        <FilterContextProvider>
           <App />
        </FilterContextProvider>
      </SliderContextProvider>
    </CartContextProvider>

    </BrowserRouter>
  </StrictMode>,
)
