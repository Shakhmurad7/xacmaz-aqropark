import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/footer'
//  

function LayoutCompanent(a) {
  return (
    <>
    <Header/>
    {/* <NavBar/> */}
        <main>{a.children}</main>
    <Footer/>
    </>
  )
}

export default LayoutCompanent