// import axios, { all } from "axios";
import React, { Suspense, lazy, useEffect, useState } from "react";
// import { connect } from "react-redux";
import LayoutCompanent from "../../layoutCompanent/layoutCompanent";
import NavBar from "../NavbarPage/NavBar";
import NavbarContent from "../../layoutCompanent/NavbarContent";
// import style from "./Qalereya.module.css";
// import { Link } from "react-router-dom";
// import QalereyaCard from "./QalereyaCard";
const url = `https://json-xacmaz.vercel.app/posts2`;
function Qalereya({ user, dispatch }) {

  // const [open , setopen] = useState("img")

  // const tab =(i)=>{
  //   setopen(i)
  // }
  // useEffect(() => {
  //   axios.get(url).then(({ data }) => {
  //     dispatch({
  //       type: "data",
  //       payload: data,
  //     });
  //   });
  // }, []);


  // const Filterdata = user.filter((item)=>{
  //   if(open === 'img'){
  //     return item.catigori === 'img'
  //   }
  //   else{
  //     return item.catigori === "video"
  //   }
  // })
const QalereyaCard = lazy(()=>import('./QalereyaCard'))
  return (
    <>
      <LayoutCompanent>
        <NavBar />
        <NavbarContent />
        <Suspense fallback={<div className="Fallback"><img src={'./img/b620ccb3ae8c14ea5447d159ebb1da58.gif'}/></div>} >
          <QalereyaCard/>
        </Suspense>
      </LayoutCompanent>
    </>
  );
}


export default (Qalereya);
