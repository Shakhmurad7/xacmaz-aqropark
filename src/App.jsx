import { Route, Routes } from "react-router";
import Home from "./Pages/HomePage/Home";
import About from "./Pages/AboutPage/About";
import Contact from "./Pages/Contcat/Contact";
import News from "./Pages/News/News";

import { lazy, Suspense } from "react";
import Mehsullar from "./Pages/Mehsullar/Mehsullar";
import Vakansiyalar from "./Pages/Vakansiyalar/Vakansiyalar";
import VakansiyaSingle from "./Pages/Vakansiyalar/VakansiyaSingle";
import NotFound from "./Pages/NotFound/NotFound";

const Qalereya = lazy(() => import("./Pages/Qalereya/Qalereya"));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="spinner">
            <div className="blob top"></div>
            <div className="blob bottom"></div>
            <div className="blob left"></div>

            <div className="blob move-blob"></div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/News" element={<News />} />
          <Route path="/Qalereya" element={<Qalereya />} />
          <Route path="/Mehsullar" element={<Mehsullar />} />
          <Route path="/Vakansiyalar" element={<Vakansiyalar />} />
          <Route path="/Vakansiyalar/:id" element={<VakansiyaSingle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
