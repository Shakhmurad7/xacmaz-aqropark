import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

import style from "./News.module.css"
import { Link } from 'react-router-dom'
const url = `https://json-xacmaz.vercel.app/posts`
function DataNews() {
    const [state , setState ] = useState([])
    useEffect(() => {
      axios.get(url)
        .then(({ data }) => {
          setState(data);
          console.log(data);
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    }, []);
    
  return (
    <>

  
        <div className="content-navbar-block-news">
            <div className="content-top-text-navbar-block">
              <Link to={"/"}>
                <p className="pElement-content-navabr-block">ana səhifə</p>
              </Link>
              <p className="pElement-bold-navbar-block">News</p>
            </div>
            <div className="content-text-navbar-block">
              <p>News</p>
              <h2>Biz aqrobiznes kommunikasiyaları ilə məşğul oluruq</h2>
            </div>
          </div>
  
  
  
        <div className={style['section-big-container']}>
          <div className={style["section-container"]}>
            {
              state.slice(0,2).map(({ text, id, title, img, date, time }) => {
                return (
                  <div key={id} className={style["section-block"]}>
                      <div className={style["section-img"]}>
                          <img src={`./img/${img}.png`}/>
                      </div>
                      <div className={style["section-text"]}>
                          <h2>{title}</h2>
                          <p>{text}</p>
                          <div className={style["section-text-icon"]}>
                               <i className="fa-regular fa-clock"></i>
                              <p>{date}</p>
                              <p>{time}</p>
                          </div>
                      </div>
                  </div>
                  );
                })
              }
              </div>
              
              <div className={style[`section-container-center`]}>
            {
              state.slice(2,6).map(({ text, id, title, img, date, time }) => {
                return (
                  <div key={id} className={style["section-block-center"]}>
                      <div className={style["section-img-center"]}>
                          <img src={`./img/${img}.png`}/>
                      </div>
                      <div className={style["section-text"]}>
                          <h2 className={style['section-h2-text-center']}>{title}</h2>
                          <p>{text}</p>
                          <div className={style["section-text-icon"]}>
                               <i className="fa-regular fa-clock"></i>
                              <p>{date}</p>
                              <p>{time}</p>
                          </div>
                      </div>
                  </div>
                  );
                })
              }
                </div>
  
              <div className={style[`section-container-center`]}>
            {
              state.slice(6,10).map(({ text, id, title, img, date, time }) => {
                return (
                  <div key={id} className={style["section-block-center"]}>
                      <div className={style["section-img-center"]}>
                          <img src={`./img/${img}.png`}/>
                      </div>
                      <div className={style["section-text"]}>
                          <h2 className={style['section-h2-text-center']}>{title}</h2>
                          <p>{text}</p>
                          <div className={style["section-text-icon"]}>
                               <i className="fa-regular fa-clock"></i>
                              <p>{date}</p>
                              <p>{time}</p>
                          </div>
                      </div>
                  </div>
                  );
                })
              }
                </div>
              </div>
          
   </>
  )
}

export default DataNews