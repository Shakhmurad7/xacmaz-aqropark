import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import LayoutCompanent from "../../layoutCompanent/layoutCompanent";
import NavBar from "../NavbarPage/NavBar";
import NavbarContent from "../../layoutCompanent/NavbarContent";
import style from "./Qalereya.module.css";
import { Link } from "react-router-dom";
const url = `https://json-xacmaz.vercel.app/posts2`;
function Qalereya({ user, dispatch }) {
  useEffect(() => {
    axios.get(url).then(({ data }) => {
      dispatch({
        type: "data",
        payload: data,
      });
    });
  }, []);

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


        <div className={style['section-big-container']}>

        <div className={style["section-container"]}>

          {user.slice(0, 1).map(({ img }) => {
            return <img src={`./img/${img}.png`} />;
          })}

          <div className={style["section-block-left"]}>

            <div className={style["section-col"]}>

              {user.slice(1, 4).map(({ img }) => {
                return <img src={`./img/${img}.png`} />;
              })}

            </div>

            <div className={style["section-col"]}>

              {user.slice(4, 7).map(({ img }) => {
                  return <img src={`./img/${img}.png`} />;
                })}
              
            </div>

          </div>
        </div>

        <div className={style["section-container"]}>
            <div className={style["section-block-left"]}>

            <div className={style["section-col"]}>

            {user.slice(7, 10).map(({ img }) => {
                return <img src={`./img/${img}.png`} />;
            })}

             </div>

                 <div className={style["section-col"]}>

                 {user.slice(10, 13).map(({ img }) => {
                     return <img src={`./img/${img}.png`} />;
                    })}
            </div>
        </div>

        {user.slice(13, 14).map(({ img }) => {
         return <img src={`./img/${img}.png`} />;
            })}


        </div>
         
    
    </div>
      </LayoutCompanent>
    </>
  );
}

const mapstate = (state) => state;

export default connect(mapstate)(Qalereya);
