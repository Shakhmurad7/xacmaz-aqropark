import axios from 'axios'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
const url = 'https://json-xacmaz.vercel.app/post4'
import style from './Vakansiyalar.module.css'
import { Link } from 'react-router-dom'
function VakansiyalarCard({user , dispatch}) {

useEffect(()=>{
    axios.get(url).then(({data})=>{
        dispatch({
            type:'data',
            payload:data
        })
    })
} , [])


  return (
    <>
    <div className={style['section-big-container']}>

<div className={style["section-conatiner"]}>
        {
            
            user.slice(0,3).map(({id , item , text , price, next , time , endtime})=>{
                return(
                    <div key={id} className={style['section-block']}>
                        <h3>{item}</h3>
                        <div className={style["section-text-row"]}>
                            <p>{price}</p>
                            <Link to={`/Vakansiyalar/${id}`}><b>{next}</b></Link>
                        </div>
                        <p>{text}</p>
                        <div className={style["section-end-text"]}>
                            <p>{time}</p>
                            <p>{endtime}</p>
                        </div>
                    </div>
                   
                   )
                   
                })
            }

 </div>
<div className={style["section-conatiner"]}>
        {
            
            user.slice(3,6).map(({id , item , text , price, next , time , endtime})=>{
                return(
                    <div key={id} className={style['section-block']}>
                        <h3>{item}</h3>
                        <div className={style["section-text-row"]}>
                            <p>{price}</p>
                            <Link to={`/Vakansiyalar/${id}`}><b>{next}</b></Link>
                        </div>
                        <p>{text}</p>
                        <div className={style["section-end-text"]}>
                            <p>{time}</p>
                            <p>{endtime}</p>
                        </div>
                    </div>
                   
                   )
                   
                })
            }

 </div>
    </div>
    </>
  )
}
const mapstate =(state)=>state
export default connect(mapstate)(VakansiyalarCard)