import React from 'react'
import { Link } from 'react-router-dom'
import imgfooter from '../../public/img/Group.png' 

function Footer() {
  return (
    <footer>
        <div className="Footer-container">
          <div className="footer-ul">
            <ul>
              <Link to={'/About'}> <li>Haqqımızda</li></Link>
              <Link to={'/Mehsullar'}> <li>Məhsullar</li></Link>
              <Link to={'/Qalereya'}> <li>Qalereya</li></Link>
            </ul>
          </div>
          <div className="footer-ul">
            <ul>
              <Link to={'/News'}><li>Xəbərlər</li></Link>
              <Link to={'/Vakansiya'}><li>Vakansiya</li></Link>
              <Link to={'/Contact'}><li>Əlaqə</li></Link>
            </ul>
          </div>

          <div className="footer-text">
              <p>Lorem Ipsum is simply dummy text of the printing</p>
              <div className="footer-text-row">
                  <div className="footr-text-left">
                      <p>+994 50 123 45 67</p>
                      <p>+994 70 123 45 67</p>
                  </div>
                  <div className="footer-text-right">
                      <p>info@xacmazagro.az</p>
                  </div>
              </div>
          </div>
            
        </div>

        <div className="footer-end">
          <div className="footer-end-left">
            <h1>Logo</h1>
            <div className="footer-end-row">
              <p>© 2022 Xaçmaz Aqro</p>
              <p>Müəllif hüquqları qorunur</p>
            </div>
          </div>
            <div className="footer-end-center">
              <p>Site by: <b>JedAi</b></p>
          </div>
          <div className="footer-end-right">
            <p>Bizi izləyin!</p>
            <div className="footer-icon">
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>

        <img src={imgfooter}/>
    </footer>
  )
}

export default Footer