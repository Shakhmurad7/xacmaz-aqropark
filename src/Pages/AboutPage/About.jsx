import React, { useState } from "react";
import LayoutCompanent from "../../layoutCompanent/layoutCompanent";
import NavBar from "../NavbarPage/NavBar";
import style from "./About.module.css";
import NavbarContent from "../../layoutCompanent/NavbarContent";
import { Link } from "react-router-dom";
import Tab from "../../layout/Tab";

function About() {
  return (
    <>
      <NavBar />
      <LayoutCompanent>
        <NavbarContent />

        <div className={style["content"]}>
          <div className={style["content-top-text"]}>
            <Link to={"/"}>
              <p className="pElement-content">ana səhifə</p>
            </Link>
            <p className="pElement-bold">haqqımızda</p>
          </div>
          <div className={style["content-text"]}>
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
