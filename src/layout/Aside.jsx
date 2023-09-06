import React from 'react'
import "../Style.css"
import { Link } from 'react-router-dom'
function Aside() {
  return (
   <aside>
        <div className="aside-container">
            <div className="aside-top">
                <p>Nə etdiyimizi bilmək istəyirsiniz?</p>
                <h2>Yeniliklərdən xəbərdar olmaq üçün qeydiyyatdan keçin</h2>
            </div>
            <div className="aside-input">
                <input type="text" placeholder='Ad,Soyad*' />
                <input type="email"  placeholder='Email*'/>
            </div>
            <input type="text" placeholder='Mesaj*'/>
            <Link to={'/'}>
                Göndər
            </Link>
        </div>
   </aside>
  )
}

export default Aside