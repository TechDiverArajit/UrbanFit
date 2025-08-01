import { Home } from "./Pages/Home"
import { Navbar } from "./Components/Navbar"
import { Men } from "./Pages/Men"
import { Women } from "./Pages/Women"
import { About } from "./Pages/Blog"
import { Items } from "./Pages/Items"
import { Route , Routes } from "react-router-dom"
import { Footer } from "./Components/Footer"
function App() {
  

  return (
    <>
            <Navbar/>
             <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Men" element={<Men/>} />
                <Route path="/Women" element={<Women/>} />
                <Route path="/About" element={<About/>}/>
                <Route path="/Items/:id" element={<Items/>} />
            </Routes>
            <Footer/>
    </>
  )
}

export default App
