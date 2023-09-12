import { Route, Routes } from "react-router"
import Home from "./Pages/HomePage/Home"
import About from "./Pages/AboutPage/About"
import Contact from "./Pages/Contcat/Contact"
import News from "./Pages/News/News"
import NotFound from "./Pages/NotFound/NotFound"
import Qalereya from "./Pages/Qalereya/Qalereya"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/News" element={<News/>} />
        <Route path="/Qalereya" element={<Qalereya/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App
