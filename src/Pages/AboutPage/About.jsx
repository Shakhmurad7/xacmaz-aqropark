import React, { useState } from 'react'
import LayoutCompanent from '../../layoutCompanent/layoutCompanent'
import NavBar from '../NavbarPage/NavBar'
import style from "./About.module.css"
import NavbarContent from '../../layoutCompanent/NavbarContent'
import { Link } from 'react-router-dom'
import Tab from '../../layout/Tab'

function About() {
  return (
    <LayoutCompanent>
      <NavbarContent/>
        <NavBar/>
  <div className={style["content"]}>
        <div className={style["content-top-text"]}>
           <Link to={'/'}><p className='pElement-content'>ana səhifə</p></Link> 
            <p className='pElement-bold'>haqqımızda</p>
        </div>
      <div className={style['content-text']}>
          <p>Haqqımızda</p>
          <h2>Biz aqrobiznes kommunikasiyaları ilə məşğul oluruq</h2>
      </div>
  </div>
    {/* ----Tab---- */}
    <Tab/>
    </LayoutCompanent>
  )
}

export default About