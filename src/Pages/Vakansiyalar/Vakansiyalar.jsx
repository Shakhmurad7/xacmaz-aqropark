import React, { Suspense, lazy } from 'react'
import LayoutCompanent from '../../layoutCompanent/layoutCompanent'
import NavbarContent from '../../layoutCompanent/NavbarContent'
import NavBar from '../NavbarPage/NavBar'
import { Link } from 'react-router-dom'
import style from './Vakansiyalar.module.css'

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

    <div className={style['content']}>
        <div className={style['content-right']}>
          <h2>Əlaqə</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
          <div className={style['content-text-row']}>
              <p>+994 50 123 45 67</p>
              <p>+994 70 123 45 67</p>
              <p>info@xacmazagro.az</p>
          </div>
        </div>
        <div className={style["content-left"]}>
           <h3>Bizi izlə!</h3>
           <div className={style['content-left-row']}>
              <div className={style['content-icon']}>
                <i className="fa-brands fa-linkedin"></i>
                <p>linkedin</p>
              </div>
              <div className={style['content-icon']}>
                  <i className="fa-brands fa-twitter"></i>
                <p>Twitte</p>
              </div>
              <div className={style['content-icon']}>
                <i className="fa-solid fa-envelope"></i>
                <p>E-mail</p>
              </div>
           </div>
        </div>
    </div>

    </LayoutCompanent>
    
    </>
  )
}

export default Vakansiyalar