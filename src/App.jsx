import { Route, Routes } from "react-router"
import Home from "./Pages/HomePage/Home"
import About from "./Pages/AboutPage/About"
import Contact from "./Pages/Contcat/Contact"
import News from "./Pages/News/News"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/News" element={<News/>} />
      </Routes>
    </>
  )
}

export default App
