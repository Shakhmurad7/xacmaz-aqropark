import axios, { all } from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import LayoutCompanent from "../../layoutCompanent/layoutCompanent";
import NavBar from "../NavbarPage/NavBar";
import NavbarContent from "../../layoutCompanent/NavbarContent";
import style from "./Qalereya.module.css";
import { Link } from "react-router-dom";
const url = `https://json-xacmaz.vercel.app/posts2`;
function Qalereya({ user, dispatch }) {

  const [open , setopen] = useState("img")

  const tab =(i)=>{
    setopen(i)
  }
  useEffect(() => {
    axios.get(url).then(({ data }) => {
      dispatch({
        type: "data",
        payload: data,
      });
    });
  }, []);


  const Filterdata = user.filter((item)=>{
    if(open === 'img'){
      return item.catigori === 'img'
    }
    else{
      return item.catigori === "video"
    }
  })

  return (
    <>
      <LayoutCompanent>
        <NavBar />
        <NavbarContent />

        
        <div className="content-navbar-block-qalereya">
          <div className="content-top-text-navbar-block-qalereya">
            <Link to={"/"}>
              <p className="pElement-content-navabr-block-qalereya">ana səhifə</p>
            </Link>
            <p className="pElement-bold-navbar-block-qalereya">Qalereya</p>
          </div>
          <div className="content-text-navbar-block">
            <p>Qalereya</p>
            <h2>Biz aqrobiznes kommunikasiyaları ilə məşğul oluruq</h2>
          </div>
        </div>

      <div className={style['content']}>
        <div className={style['content-container']}>
            <p className={style[open === "img"? `pElement`: `active`]}   onClick={()=>tab('img')} > Fotoqalereya</p>
            <p className={style[open === 'video'? `pElement`: `active`]}   onClick={()=>tab('video')} > Videoqalereya</p>
        </div>
      </div>


        <div className={style['section-big-container']}>

          <div className={style["section-container"]}>

          {Filterdata.slice(0, 1).map(({ img }) => {
            return <img src={`./img/${img}.png`} />;
          })}

          <div className={style["section-block-left"]}>

            <div className={style["section-col"]}>

              {Filterdata.slice(1, 4).map(({ img }) => {
                return <img src={`./img/${img}.png`} />;
              })}

            </div>

            <div className={style["section-col"]}>

              {Filterdata.slice(4, 7).map(({ img }) => {
                  return <img src={`./img/${img}.png`} />;
                })}
              
            </div>

          </div>
        </div>

        <div className={style["section-container"]}>
            <div className={style["section-block-left"]}>

            <div className={style["section-col"]}>

            {Filterdata.slice(7, 10).map(({ img }) => {
                return <img src={`./img/${img}.png`} />;
            })}

             </div>

                 <div className={style["section-col"]}>

                 {Filterdata.slice(10, 13).map(({ img }) => {
                     return <img src={`./img/${img}.png`} />;
                    })}
            </div>
        </div>

        {Filterdata.slice(13, 14).map(({ img }) => {
         return <img src={`./img/${img}.png`} />;
            })}


        </div>
    </div>


        <div className={style['video-content']}>
            {Filterdata.slice(14, 18).map(({ img }) => {
                 return <img src={`./img/${img}.png`} />;
             })}
        </div>



      </LayoutCompanent>
    </>
  );
}

const mapstate = (state) => state;

export default connect(mapstate)(Qalereya);
