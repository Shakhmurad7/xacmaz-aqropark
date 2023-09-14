import React, { Suspense, lazy } from 'react'
import LayoutCompanent from '../../layoutCompanent/layoutCompanent'
import NavbarContent from '../../layoutCompanent/NavbarContent'
import NavBar from '../NavbarPage/NavBar'
import { Link } from 'react-router-dom'


const VakansiyalarCard = lazy(()=>import('./VakansiyalarCard'))
function Vakansiyalar() {
  return (
    <>
    <LayoutCompanent>
        <NavBar/>
        <NavbarContent/>

        <div className="content-navbar-block-vakansiyalar">
          <div className="content-top-text-navbar-block">
            <Link to={"/"}>
              <p className="pElement-content-navabr-block">ana səhifə</p>
            </Link>
            <p className="pElement-bold-navbar-block">Vakansiyalar</p>
          </div>
          <div className="content-text-navbar-block">
            <p>Vakansiyalar</p>
            <h2>Biz aqrobiznes kommunikasiyaları ilə məşğul oluruq</h2>
          </div>
        </div>
<Suspense fallback={<div className="Fallback"><img src={'./img/b620ccb3ae8c14ea5447d159ebb1da58.gif'}/></div>} > 
         <VakansiyalarCard/>
</Suspense>

    </LayoutCompanent>
    
    </>
  )
}

export default Vakansiyalar