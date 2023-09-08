import React from 'react'
import { Link } from 'react-router-dom'
import '../../Style.css'

function NavBar({menu , setmenu}) {
  return (
      <div className={`navbar ${menu? `active`:`navbar`}`}>
        <div className="nav-container-top">
           <Link to={'/'}><img src={`./img/Frame.png`}/></Link> 
            <i class="fa-solid fa-xmark" onClick={()=>setmenu(!menu)}></i>
        </div>
        <div className="nav-container">
        <ul>
            <Link to={'/'}><li>Ana Sehve</li></Link>
            <Link to={'/About'}><li>Haqqımıda</li></Link>
            <Link to={'/About'}><li>Məhsullar</li></Link>
            <Link to={'/About'}><li>Xəbərlər</li></Link>
            <Link to={'/About'}><li>Qalereya</li></Link>
            <Link to={'/About'}><li>Vakansiyalar</li></Link>
            <Link to={'/About'}><li>Əlaqə</li></Link>
        </ul>
        <div className="block-navbar-left">
            <div className="navbar-left-page">
                <h1>Xaçmaz AqroPark</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
            </div>
            <div className="navbar-left-page">
                <p>+994 50 123 45 67 / +994 70 123 45 67</p>
                <p>Lorem Ipsum is simply dummy text of the printing</p>
                <div className="navber-icon-left">
                    <i class="fa-solid fa-envelope"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-facebook"></i>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default NavBar