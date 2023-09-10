import React from 'react'
import style from "./Contact.module.css"
import LayoutCompanent from '../../layoutCompanent/layoutCompanent'
import NavBar from '../NavbarPage/NavBar'
import NavbarContent from '../../layoutCompanent/NavbarContent'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <>
        <LayoutCompanent>
            <NavBar/>
            <NavbarContent/>
        <div className="content-navbar-block">
          <div className="content-top-text-navbar-block">
            <Link to={"/"}>
              <p className="pElement-content-navbar-block">ana səhifə</p>
            </Link>
            <p className="pElement-bold-navbar-block">haqqımızda</p>
          </div>
          <div className="content-text-navbar-block">
            <p>Haqqımızda</p>
            <h2>Biz aqrobiznes kommunikasiyaları ilə məşğul oluruq</h2>
          </div>
        </div>

        </LayoutCompanent>
    </>

  )
}

export default Contact