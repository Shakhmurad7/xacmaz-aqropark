import React from 'react'
import style from "./Contact.module.css"
import LayoutCompanent from '../../layoutCompanent/layoutCompanent'
import NavBar from '../NavbarPage/NavBar'
import NavbarContent from '../../layoutCompanent/NavbarContent'
import { Link } from 'react-router-dom'
import Iframe from 'react-iframe'


function Contact() {
  return (
    <>
        <LayoutCompanent>
            <NavBar/>
            <NavbarContent/>
        <div className="content-navbar-block-contact">
          <div className="content-top-text-navbar-block">
            <Link to={"/"}>
              <p className="pElement-content-navbar-block">ana səhifə</p>
            </Link>
            <p className="pElement-bold-navbar-block">əlaqə</p>
          </div>
          <div className="content-text-navbar-block">
            <p>Əlaqə</p>
            <h2>Biz aqrobiznes kommunikasiyaları ilə məşğul oluruq</h2>
          </div>
        </div>


        <div className={style["section-map"]}>
            <div className={style["section-map-left"]}>
                 <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19858.571907049376!2d49.856864609697574!3d40.39789998828785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1saz!2saz!4v1694429715833!5m2!1saz!2saz"/>
            </div>
            <div className={style["section-right-block"]}>
                <h2>Əlaqə</h2>
                <p className={style["section-left-p"]}>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                <div className={style['section-right-block-row']}>
                    <p>+994 50 123 45 67</p>
                    <p>+994 70 123 45 67</p>
                    <p>info@xacmazagro.az</p>
                </div>
                <div className={style["right-block-bottom"]}>
                    <h3>Bizi izlə!</h3>
                    <div className={style['right-block-icon']}>
                        <div className={style["right-icon-row"]}>
                            <i class="fa-brands fa-instagram"></i>
                            <p>Instagram</p>
                        </div>
                        <div className={style["right-icon-row"]}>
                             <i class="fa-solid fa-envelope"></i>
                            <p>Email</p>
                        </div>
                        <div className={style["right-icon-row"]}>
                            <i class="fa-brands fa-facebook"></i>
                            <p>Facebook</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </LayoutCompanent>
    </>

  )
}

export default Contact