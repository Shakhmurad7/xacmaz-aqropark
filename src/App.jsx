import { Route, Routes } from "react-router"
import Home from "./Pages/HomePage/Home"
import About from "./Pages/AboutPage/About"
import Contact from "./Pages/Contcat/Contact"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </>
  )
}

export default App
