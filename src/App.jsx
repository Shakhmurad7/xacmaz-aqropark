import { Route, Routes } from "react-router";
import Home from "./Pages/HomePage/Home";
import About from "./Pages/AboutPage/About";
import Contact from "./Pages/Contcat/Contact";
import News from "./Pages/News/News";
import NotFound from "./Pages/NotFound/NotFound";
import { lazy, Suspense } from "react";

// Remove this assignment
// Qalereya = lazy(() => import('./Pages/Qalereya/Qalereya'));
const Qalereya = lazy(() => import('./Pages/Qalereya/Qalereya'));

function App() {
  return (
    <>
      <Suspense fallback={<div class="spinner">
  <div class="blob top"></div>
  <div class="blob bottom"></div>
  <div class="blob left"></div>
  
  <div class="blob move-blob"></div>
</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/News" element={<News />} />
          <Route path="/Qalereya" element={<Qalereya />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
