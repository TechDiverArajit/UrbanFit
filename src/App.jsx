import { Home } from "./Pages/Home"
import { Navbar } from "./Components/Navbar"
import { Men } from "./Pages/Men"
import { Women } from "./Pages/Women"
import { Blog } from "./Pages/Blog"
import { Items } from "./Pages/Items"
import { Route , Routes } from "react-router-dom"
function App() {
  

  return (
    <>
            <Navbar/>
             <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Men" element={<Men/>} />
                <Route path="/Women" element={<Women/>} />
                <Route path="/Blog" element={<Blog/>}/>
                <Route path="/Items/:id" element={<Items/>} />
            </Routes>
    </>
  )
}

export default App
