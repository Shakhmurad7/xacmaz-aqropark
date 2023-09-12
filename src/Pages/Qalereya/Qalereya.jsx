import axios from 'axios'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
const url = `https://json-xacmaz.vercel.app/posts2`
function Qalereya({user , dispatch}) {
    useEffect(()=>{
        axios.get(url).then(({data})=>{
            dispatch({
                type:'data',
                payload: data
            }
            )
        })
    } , [])


  return (
        <>
            {
                user.map(({img})=>{
                return(
                        <img src={`./img/${img}.png`}  />
                )
                })
            }
        </>
  )
}

const mapstate =(state)=> state 


export default connect(mapstate)(Qalereya)