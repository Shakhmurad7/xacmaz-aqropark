import React from 'react'
import { Link } from 'react-router-dom'
import '../Style.css'

function ItemContainer() {
  return (
    <div className="Item-Container">
        <div className="item-left">
            <p className='pElement-top'>Haqqımızda</p>
            <h2>Xaçmaz Aqro Biznes</h2>
            <p className='pElamant'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</p>
            <Link to={'/about'}>Ətraflı</Link>
        </div>
        <div className="item-right">
            <img src={"./img/image 19.png"}/>
        </div>
    </div>
  )
}

export default ItemContainer