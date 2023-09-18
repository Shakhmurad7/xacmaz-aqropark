import { Route, Routes } from "react-router";
import Home from "./Pages/HomePage/Home";

import Contact from "./Pages/Contcat/Contact";
import News from "./Pages/News/News";

import { lazy, Suspense } from "react";
import Mehsullar from "./Pages/Mehsullar/Mehsullar";
import Vakansiyalar from "./Pages/Vakansiyalar/Vakansiyalar";
import VakansiyaSingle from "./Pages/Vakansiyalar/VakansiyaSingle";
import NotFound from "./Pages/NotFound/NotFound";
import About from "./Pages/AboutPage/About";

const Qalereya = lazy(() => import("./Pages/Qalereya/Qalereya"));

function App() {
  //test
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
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/qalereya" element={<Qalereya />} />
          <Route path="/mehsullar" element={<Mehsullar />} />
          <Route path="/vakansiyalar" element={<Vakansiyalar />} />
          <Route path="/vakansiyalar/:id" element={<VakansiyaSingle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
