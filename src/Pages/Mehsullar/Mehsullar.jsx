import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import style from './Mehsullar.module.css'
import LayoutCompanent from '../../layoutCompanent/layoutCompanent'
import NavBar from '../NavbarPage/NavBar'
import NavbarContent from '../../layoutCompanent/NavbarContent'
const url = `https://json-xacmaz.vercel.app/post3`
function Mehsullar({user , dispatch}) {

    const [open , setopen] = useState('all')
    const tab =(i)=>{
        setopen(i)
    }

    useEffect(()=>{
        axios.get(url).then(({data})=>{
            dispatch(
                {
                    type:'data',
                    payload:data
                }
            )
        })
    } , [])


    const Filterdata = user.filter((item)=>{
        if(open === 'all'){
            return user
        }
        else{
            return item.category === open
        }
    })

  return (
    <>
    <LayoutCompanent>
    <NavBar/>
    <NavbarContent/>

    <div className={style["content-big"]}>
        <div className={style['content-container']}>
            <p className={style[open=== 'all'? `active` : `pElement`]} onClick={()=>tab("all")} >Hamsi</p>
            <p className={style[open === 'sud'? `active` : `pElement`]} onClick={()=>tab("sud")} >Təzə süd</p>
            <p className={style[open === 'et'? `active` : `pElement`]} onClick={()=>tab("et")} >Ət istehsalı</p>
            <p className={style[open === 'arpa'? `active` : `pElement`]} onClick={()=>tab("arpa")} >Dənlik arpa</p>
            <p className={style[open === 'qargidali'? `active` : `pElement`]} onClick={()=>tab("qargidali")} >Dənlik qarğıdalı</p>
            <p className={style[open === 'Sireli'? `active` : `pElement`]} onClick={()=>tab("Sireli")} >Şirəli yemlər</p>
            <p className={style[open === 'Yonca'? `active` : `pElement`]} onClick={()=>tab("Yonca")} >Yonca otu</p>
        </div>
    </div>

    <div className={style['section-big-container']}>
        {
            Filterdata.slice(0,1).map(({img , item , text})=>{
                return(
                    <>
                        <div className={style['section-block']} >
                            <div className={style['section-img-left']}>
                                     <img src={`./img/${img}.png`} alt="" />
                            </div>
                            <div className={style['section-tetx']}>
                                <h2>{item}</h2>
                                <p>{text}</p>
                            </div>
                        </div>
                    </>
                )
            })
        }
         {
            Filterdata.slice(1,2).map(({img , item , text})=>{
                return(
                    <>
                        <div className={style['section-block']}>
                            <div className={style['section-tetx']}>
                                <h2>{item}</h2>
                                <p>{text}</p>
                            </div>
                            
                            <div className={style['section-img-right']}>
                                     <img src={`./img/${img}.png`} alt="" />
                            </div>
                        </div>
                    </>
                )
            })
        }

        {
            Filterdata.slice(2,3).map(({img , item , text})=>{
                return(
                    <>
                        <div className={style['section-block']}>
                            <div className={style['section-img-left']}>
                                     <img src={`./img/${img}.png`} alt="" />
                            </div>
                            <div className={style['section-tetx']}>
                                <h2>{item}</h2>
                                <p>{text}</p>
                            </div>
                        </div>
                    </>
                )
            })
        }

            {
            Filterdata.slice(3,4).map(({img , item , text})=>{
                return(
                    <>
                        <div className={style['section-block']}>
                            <div className={style['section-tetx']}>
                                <h2>{item}</h2>
                                <p>{text}</p>
                            </div>
                            
                            <div className={style['section-img-right']}>
                                     <img src={`./img/${img}.png`} alt="" />
                            </div>
                        </div>
                    </>
                )
            })
        }

            {
            Filterdata.slice(4,5).map(({img , item , text})=>{
                return(
                    <>
                        <div className={style['section-block']}>
                            <div className={style['section-img-left']}>
                                     <img src={`./img/${img}.png`} alt="" />
                            </div>
                            <div className={style['section-tetx']}>
                                <h2>{item}</h2>
                                <p>{text}</p>
                            </div>
                        </div>
                    </>
                )
            })
        }

            {
            Filterdata.slice(5,6).map(({img , item , text})=>{
                return(
                    <>
                        <div className={style['section-block']}>
                            <div className={style['section-tetx']}>
                                <h2>{item}</h2>
                                <p>{text}</p>
                            </div>
                            
                            <div className={style['section-img-right']}>
                                     <img src={`./img/${img}.png`} alt="" />
                            </div>
                        </div>
                    </>
                )
            })
        }   
        </div>
        </LayoutCompanent>
    </>
  )

}

const mapstate = (state)=> state

export default connect(mapstate)(Mehsullar)