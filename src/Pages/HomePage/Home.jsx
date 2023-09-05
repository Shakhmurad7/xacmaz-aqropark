import React from 'react'
import LayoutCompanent from '../../layoutCompanent/layoutCompanent'

function Home() {
  return (
    <LayoutCompanent>
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
    </LayoutCompanent>
  )
}

export default Home