import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../../../public/img/Frame.png"
import '../../Style.css'

function NavBar({menu , setmenu}) {
  return (
      <div className={`navbar ${menu? `active`:`navbar`}`}>
        <div className="nav-container-top">
           <Link to={'/'}><img src={logo}/></Link> 
            <i className="fa-solid fa-xmark" onClick={()=>setmenu(!menu)}></i>
        </div>
        <div className="nav-container">
        <ul>
            <NavLink to={'/'}><li>Ana Sehve</li></NavLink>
            <NavLink to={'/about'}><li>Haqqımıda</li></NavLink>
            <NavLink to={'/mehsullar'}><li>Məhsullar</li></NavLink>
            <NavLink to={'/news'}><li>Xəbərlər</li></NavLink>
            <NavLink to={'/qalereya'}><li>Qalereya</li></NavLink>
            <NavLink to={'/vakansiyalar'}><li>Vakansiyalar</li></NavLink>
            <NavLink to={'/contact'}><li>Əlaqə</li></NavLink>
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
                    <i className="fa-solid fa-envelope"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-facebook"></i>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default NavBar