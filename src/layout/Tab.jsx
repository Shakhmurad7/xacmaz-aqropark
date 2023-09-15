import React, { useState } from 'react'
import style from '../Pages/AboutPage/index.module.css'

function Tab() {
    const [tab , settab] = useState(1)
    const tabs =(index)=>{
        settab(index)
    }
  return (
    <div className={style["Tab-content"]}>
        <div className={style['tab-text-top-block']}>
            <div className={style["tab-content-text"]}>
                <h3 className={style[tab === 1? `tab-1` : `tab-1-active`]} onClick={()=>tabs(1)} >Haqqımızda</h3>
                <h3 className={style[tab === 2? `tab-1` : `tab-1-active`]} onClick={()=>tabs(2)} >Fəaliyyət istiqamətlərimiz</h3>
                <h3 className={style[tab === 3? `tab-1` : `tab-1-active`]} onClick={()=>tabs(3)} >Partnyor</h3>
            </div>
        </div>

<div className={style["big-tab"]}>
        <div className={style[tab === 1? `tab-container`:`tab-none`]}>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
             <br /> <br /> dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makeLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eversince the 1500s, when an unknown printer took a galley of type and scrambled it to make
            </p>
        </div>

        <div className={style[tab === 2? `tab-container`:`tab-none`]}>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
            <br /> <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
            </p>
        </div>

        <div className={style[tab === 3? `tab-container`:`tab-none`]}>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makeLorem Ipsum is 
            <br /> <br />simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500
            </p>
        </div>
</div>


    </div>
  )
}

export default Tab