import React from 'react'
import LayoutCompanent from '../../layoutCompanent/layoutCompanent'
import NavBar from '../NavbarPage/NavBar'
import NavbarContent from '../../layoutCompanent/NavbarContent'

function Video() {
  return (
    <LayoutCompanent>
        <NavBar />
        <NavbarContent />

        
        <div className="content-navbar-block-qalereya">
          <div className="content-top-text-navbar-block-qalereya">
            <Link to={"/"}>
              <p className="pElement-content-navabr-block-qalereya">ana səhifə</p>
            </Link>
            <p className="pElement-bold-navbar-block-qalereya">Qalereya</p>
          </div>
          <div className="content-text-navbar-block">
            <p>Qalereya</p>
            <h2>Biz aqrobiznes kommunikasiyaları ilə məşğul oluruq</h2>
          </div>
        </div>
        </LayoutCompanent>
  )
}

export default Video