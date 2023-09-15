import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import LayoutCompanent from '../../layoutCompanent/layoutCompanent'
import NavBar from '../NavbarPage/NavBar'
import NavbarContent from '../../layoutCompanent/NavbarContent'
import { Link } from 'react-router-dom'
import style from './Vakansiyalar.module.css'
import axios from 'axios'
import { connect } from 'react-redux'
const url = 'https://json-xacmaz.vercel.app/post4/'
function VakansiyaSingle({user, dispatch}) {
  const {id} = useParams()
  useEffect(()=>{
    axios.get(url+id).then(({data})=>{
      console.log(data);
      dispatch({
        type:'data',
        payload:data
    })
    })  
  } , [])
  return (
<>

    <LayoutCompanent> 

        <NavBar/>
        <NavbarContent/>

        <div className="content-navbar-block-vakansiyalar">
          <div className="content-top-text-navbar-block">
            <Link to={"/"}>
              <p className="pElement-content-navabr-block">ana səhifə</p>
            </Link>
            <p className="pElement-bold-navbar-block">Vakansiyalar</p>
            <p className="pElement-bold-navbar-block">Lorem Ipsum is simply dummy text</p>
          </div>
          <div className="content-text-navbar-block">
            <p>Vakansiyalar</p>
            <h2>Biz aqrobiznes kommunikasiyaları ilə məşğul oluruq</h2>
          </div>
        </div>



        <h1>{user.price}</h1>
        <h1>{id}</h1>


        
    <div className={style['content']}>
        <div className={style['content-right']}>
          <h2>Əlaqə</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
          <div className={style['content-text-row']}>
              <p>+994 50 123 45 67</p>
              <p>+994 70 123 45 67</p>
              <p>info@xacmazagro.az</p>
          </div>
        </div>
        <div className={style["content-left"]}>
           <h3>Bizi izlə!</h3>
           <div className={style['content-left-row']}>
              <div className={style['content-icon']}>
                <i className="fa-brands fa-linkedin"></i>
                <p>linkedin</p>
              </div>
              <div className={style['content-icon']}>
                  <i className="fa-brands fa-twitter"></i>
                <p>Twitte</p>
              </div>
              <div className={style['content-icon']}>
                <i className="fa-solid fa-envelope"></i>
                <p>E-mail</p>
              </div>
           </div>
        </div>
    </div>
    </LayoutCompanent>
</>
  )
}
const mapstate =(state)=>state
export default connect(mapstate)(VakansiyaSingle)