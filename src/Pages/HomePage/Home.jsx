import React from 'react'
import LayoutCompanent from '../../layoutCompanent/layoutCompanent'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Home() {
  return (
    <LayoutCompanent>

    <Swiper
      // install Swiper modules
      modules={[Autoplay,Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction:false
    }}
    >
      <SwiperSlide><img src={'./img/Rectangle 18 (1).png'} alt="" /></SwiperSlide>
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
        <i class="fa-solid fa-bars"></i>
    </div>
    </div>
    <div className="swiper-pos"></div>
    </Swiper>
    </LayoutCompanent>
  )
}

export default Home