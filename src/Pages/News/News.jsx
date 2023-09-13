import { Suspense, lazy } from "react"
import LayoutCompanent from "../../layoutCompanent/layoutCompanent"
import NavBar from "../NavbarPage/NavBar"
import NavbarContent from "../../layoutCompanent/NavbarContent"
// import DataNews from "./dataNews"
const DataNews = lazy(()=>import("./dataNews"))
function News() {
  return (
  <>

    <LayoutCompanent>
        <NavBar/>
    <NavbarContent/>
  
  <Suspense fallback={<div className="Fallback"><img src={'./img/b620ccb3ae8c14ea5447d159ebb1da58.gif'}/></div>}>
    <DataNews/>
  </Suspense>

  </LayoutCompanent>
  </>
  )
}

export default News