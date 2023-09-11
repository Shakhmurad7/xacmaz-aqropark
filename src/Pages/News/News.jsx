import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LayoutCompanent from '../../layoutCompanent/layoutCompanent'
import NavBar from '../NavbarPage/NavBar'
import NavbarContent from '../../layoutCompanent/NavbarContent'
import style from "./News.module.css"
const url = "https://json-xacmaz.vercel.app/posts"
function News() {
    const [state , setState ] = useState([])
    useEffect(() => {
      axios.get(url).then(({ data }) => {
        setState(data);
      });
    }, []);
    
  return (
  <>
  <LayoutCompanent>
      <NavBar/>
      <NavbarContent/>
      <div className={style['section-big-container']}>
        <div className={style["section-container"]}>
          {
            state.slice(0,2).map(({ text, id, title, img, date, time }) => {
              return (
                <div className={style["section-block"]}>
                    <div className={style["section-img"]}>
                        <img src={`./img/${img}.png`}/>
                    </div>
                    <div className={style["section-text"]}>
                        <h2>{title}</h2>
                        <p>{text}</p>
                        <div className={style["section-text-icon"]}>
                             <i class="fa-regular fa-clock"></i>
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
                <div className={style["section-block-center"]}>
                    <div className={style["section-img-center"]}>
                        <img src={`./img/${img}.png`}/>
                    </div>
                    <div className={style["section-text"]}>
                        <h2 className={style['section-h2-text-center']}>{title}</h2>
                        <p>{text}</p>
                        <div className={style["section-text-icon"]}>
                             <i class="fa-regular fa-clock"></i>
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
                <div className={style["section-block-center"]}>
                    <div className={style["section-img-center"]}>
                        <img src={`./img/${img}.png`}/>
                    </div>
                    <div className={style["section-text"]}>
                        <h2 className={style['section-h2-text-center']}>{title}</h2>
                        <p>{text}</p>
                        <div className={style["section-text-icon"]}>
                             <i class="fa-regular fa-clock"></i>
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
        
  </LayoutCompanent>
  </>
  )
}

export default News