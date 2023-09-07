import React from 'react'
import { Link } from 'react-router-dom'

function NavBar({menu , setmenu}) {
  return (
      <div className={`navbar ${menu? `active`:`navbar`}`}>


        <div className="nav-container-top">
            <img src={`./img/Frame.png`}/>
            <i class="fa-solid fa-xmark" onClick={()=>setmenu(!menu)}></i>
        </div>
        <div className="nav-container">
        <ul>
            <Link to={'/'}><li>Home</li></Link>
            <Link to={'/About'}><li>About</li></Link>
            <Link to={'/About'}><li>About</li></Link>
            <Link to={'/About'}><li>About</li></Link>
            <Link to={'/About'}><li>About</li></Link>
            <Link to={'/About'}><li>About</li></Link>
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