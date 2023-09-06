import React from 'react'
import '../Style.css'
function Section() {
  return (
    <div className="Section-container">
        <div className="section-col">
            <div className="section-block">
                <img src={'./img/Rectangle 9.png'} />
                <h3>Xəbərlər</h3>
                <div className="section-block-row">
                    <p>Ətraflı</p>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
            </div>
            <div className="section-block">
                <img src={'./img/Rectangle 9.png'} />
                <h3>Xəbərlər</h3>
                <div className="section-block-row">
                    <p>Ətraflı</p>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
            </div>
        </div>
        <div className="section-row">
        <div className="section-block-1">
                <img src={'./img/Rectangle 9.png'} />
                <h3>Xəbərlər</h3>
                <div className="section-block-row">
                    <p>Ətraflı</p>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
            </div>
            <div className="section-block-1">
                <img src={'./img/Rectangle 9.png'} />
                <h3>Xəbərlər</h3>
                <div className="section-block-row">
                    <p>Ətraflı</p>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section