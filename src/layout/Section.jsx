import React from 'react'
import '../Style.css'
import { Link } from 'react-router-dom'
function Section() {
    return (
<div className="section">
    <div className="Section-container">
        <div className="section-col">
            <div className="section-block">
                <img src={'./img/Rectangle 9.png'} />
                <h3>Xəbərlər</h3>
                <Link to ={'/news'}> 
                    <div className="section-block-row">
                        <p>Ətraflı</p>
                        <i className="fa-solid fa-arrow-right"></i>
                    </div>
                </Link>
            </div>
            <div className="section-block">
                <img src={'./img/Rectangle 8.png'} />
                <h3>Xəbərlər</h3>
                <Link to ={'/news'}> 
                    <div className="section-block-row">
                        <p>Ətraflı</p>
                        <i className="fa-solid fa-arrow-right"></i>
                    </div>
                </Link>
            </div>
        </div>
        <div className="section-row">
        <div className="section-block-1">
                <img src={'./img/Rectangle 6.png'} />
                <h3>Xəbərlər</h3>
                <Link to ={'/news'}> 
                    <div className="section-block-row">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        <i className="fa-solid fa-arrow-right"></i>
                    </div>
                </Link>
            </div>
            <div className="section-block-1">
                <img src={'./img/Rectangle 5.png'} />
                <h3>Xəbərlər</h3>
                <Link to ={'/news'}> 
                    <div className="section-block-row">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        <i className="fa-solid fa-arrow-right"></i>
                    </div>
                </Link>
                
            </div>
        </div>
    </div>
</div>
  )
}

export default Section