import { Suspense, lazy } from "react"
// import DataNews from "./dataNews"
const DataNews = lazy(()=>import("./dataNews"))
function News() {
  return (
  <>
  <Suspense fallback={<div class="spinner">
  <div class="blob top"></div>
  <div class="blob bottom"></div>
  <div class="blob left"></div>
  
  <div class="blob move-blob"></div>
  </div>}>
    
    <DataNews/>
  
</Suspense>

  </>
  )
}

export default News