import React, { useState } from "react";
import LayoutCompanent from "../../layoutCompanent/layoutCompanent";
import NavBar from "../NavbarPage/NavBar";
import style from "./index.module.css";
import NavbarContent from "../../layoutCompanent/NavbarContent";
import { Link } from "react-router-dom";
import Tab from "../../layout/Tab";

function About() {
  return (
    <>
      <NavBar />
      <LayoutCompanent>
        <NavbarContent />

        <div className="content-navbar-block-news">
          <div className="content-top-text-navbar-block">
            <Link to={"/"}>
              <p className="pElement-content-navabr-block">ana səhifə</p>
            </Link>
            <p className="pElement-bold-navbar-block">haqqımızda</p>
          </div>
          <div className="content-text-navbar-block">
            <p>Haqqımızda</p>
            <h2>Biz aqrobiznes kommunikasiyaları ilə məşğul oluruq</h2>
          </div>
        </div>

        {/* ----Tab---- */}
        <Tab />

        {/* ----item-Container----- */}
        <div className="Item-Container">
          <div className="item-left">
            <h2>Fəaliyyət istiqamətlərimiz</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to makeLorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s
            </p>
          </div>
          <div className="item-right">
            <img src={"./img/image 2 (1).png"} />
          </div>
        </div>

        <div className={style["Partnyolar"]}>
            <h2>Partnyorlar</h2>

          <div className={style["partnyor-block"]}>
            <div className={style["partnyolar-img"]}>
              <img src={"./img/image 6.png"} />
            </div>

            <div className={style["partnyolar-img"]}>
              <img src={"./img/image 6.png"} />
            </div>

            <div className={style["partnyolar-img"]}>
              <img src={"./img/image 6.png"} />
            </div>

            <div className={style["partnyolar-img"]}>
              <img src={"./img/image 6.png"} />
            </div>
        </div>

        <div className={style["partnyor-block"]}>

            <div className={style["partnyolar-img"]}>
              <img src={"./img/image 6.png"} />
            </div> 

            <div className={style["partnyolar-img"]}>
              <img src={"./img/image 6.png"} />
            </div> 

            <div className={style["partnyolar-img"]}>
              <img src={"./img/image 6.png"} />
            </div> 

            <div className={style["partnyolar-img"]}>
              <img src={"./img/image 6.png"} />
            </div> 
        </div>

        <div className={style["partnyor-block"]}>
            <div className={style["partnyolar-img"]}>
              <img src={"./img/image 6.png"} />
            </div> 

            <div className={style["partnyolar-img"]}>
              <img src={"./img/image 6.png"} />
            </div>
      </div> 

        </div>
      </LayoutCompanent>
    </>
  );
}

export default About;
