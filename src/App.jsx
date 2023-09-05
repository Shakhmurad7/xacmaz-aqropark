import { Route, Routes } from "react-router"
import Home from "./Pages/HomePage/Home"
import About from "./Pages/AboutPage/About"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
      </Routes>
    </>
  )
}

export default App
