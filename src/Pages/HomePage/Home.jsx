import React, { useState } from 'react'
import LayoutCompanent from '../../layoutCompanent/layoutCompanent'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import ItemContainer from '../../layout/ItemContainer';
import Section from '../../layout/Section';
import Aside from '../../layout/Aside';
import NavBar from '../NavbarPage/NavBar';

function Home() {
  const [menu , setmenu] = useState(false)

  return (
  <>
      <NavBar menu={menu} setmenu={setmenu} />

    <LayoutCompanent>


    <Swiper
      // install Swiper modules
      modules={[Autoplay,Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction:false
    }}
    >
      <SwiperSlide><img src={'./img/Rectangle 122.png'} alt="" /></SwiperSlide>
      <SwiperSlide><img src={'./img/Rectangle 18 (2).png'} alt="" /></SwiperSlide>
      <SwiperSlide><img src={'./img/Rectangle 12.png'} alt="" /></SwiperSlide>
      <SwiperSlide><img src={'./img/Rectangle 18.png'} alt="" /></SwiperSlide>
      <div className="header-content">
        <img src={'./img/Group 169.png'} />
      <div className="header-menu-icon">
        <div className="header-lag">
          <p>En</p>
          <p>Ru</p>
        </div>
        <div className="menu-icon" onClick={()=> setmenu(!menu)}>
          <i className="fa-solid fa-bars"></i>
        </div>
    </div>
    </div>
    <div className="swiper-pos"></div>
    <div className="header-text-pos">
      <p>Məhsullar</p>
      <h1>Biz aqrobiznes kommunikasiyaları ilə məşğul oluruq</h1>
      <Link to={"/about"} >Haqqımızda</Link>
    </div>
    </Swiper>

      <div className="content">
          <div className="content-block">
            <img src={"./img/Group 164.png"}/>
            <h2>ət məhsulları</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
          </div>
          <div className="content-block">
            <img src={"./img/Group 165.png"}/>
            <h2>süd məhsulları</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
          </div>
          <div className="content-block">
            <img src={"./img/Group 166.png"}/>
            <h2>əkinçilik</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
          </div>
      </div>

{/* ----Item----- */}
      <ItemContainer/>

{/* ----section---- */}
      <Section/>

{/* ---Aside---- */}
      <Aside/>

      
    </LayoutCompanent>
      </>
  )
}

export default Home