import { Home } from "./Pages/Home"
import { Navbar } from "./Components/Navbar"
import { Men } from "./Pages/Men"
import { Women } from "./Pages/Women"
import { Blog } from "./Pages/Blog"
import { Route , Routes } from "react-router-dom"
function App() {
  

  return (
    <>
             <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Men" element={<Men/>} />
                <Route path="/Women" element={<Women/>} />
                <Route path="/Blog" element={<Blog/>}/>
            </Routes>
    </>
  )
}

export default App
