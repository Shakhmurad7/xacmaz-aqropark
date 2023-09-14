import React from 'react'
import { useParams } from 'react-router'
import LayoutCompanent from '../../layoutCompanent/layoutCompanent'
import NavBar from '../NavbarPage/NavBar'
import NavbarContent from '../../layoutCompanent/NavbarContent'

function VakansiyaSingle() {
    const {id} = useParams({})
  return (
    <LayoutCompanent>
        <NavBar/>
        <NavbarContent/>
        <h1>{id}</h1>
    </LayoutCompanent>
  )
}

export default VakansiyaSingle