import React, { useState } from 'react'
import LayoutCompanent from '../../layoutCompanent/layoutCompanent'
import NavBar from '../NavbarPage/NavBar'
import style from "./About.module.css"
import NavbarContent from '../../layoutCompanent/NavbarContent'

function About() {
  return (
    <LayoutCompanent>
      <NavbarContent/>
  <div className={style["content"]}>

  </div>
        <NavBar/>
    </LayoutCompanent>
  )
}

export default About