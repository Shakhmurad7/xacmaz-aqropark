import React from 'react'
import "../Style.css"


function Header() {
  return (
    <>
    <div className="container-header">
      <div className="header-text">
    <p>+994 50 123 45 67</p>
    <p className='header-text-p'>Lorem Ipsum is simply dummy text of the printing</p>
      </div>
    <div className="header-icon">
      <i className="fa-brands fa-twitter"></i>
      <i className="fa-brands fa-facebook"></i>
      <i className="fa-brands fa-instagram"></i>
    </div>
  </div>

    </>
  )
}

export default Header