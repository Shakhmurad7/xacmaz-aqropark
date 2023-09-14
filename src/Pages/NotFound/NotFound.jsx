import React from 'react'
import LayoutCompanent from '../../layoutCompanent/layoutCompanent'
import style from './index.module.css'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
        <>
            <LayoutCompanent> 
                <div className={style["section-container"]}>
                <div className={style["section"]}>
                    <div className={style['section-left']}>
                            <h2>Xaçmaz Aqro Biznes</h2>
                            <p>Nə isə düzgün getmədi.... Səhifəni yeniləyin..!</p>
                            <Link to={'/'}>Ana sehve</Link>
                    </div>
                    <div className={style['section-right']}>
                        <img src={'./img/Group 28.png'} /> 
                    </div>
                </div>
                </div>
            </LayoutCompanent>
        </>
  )
}

export default NotFound