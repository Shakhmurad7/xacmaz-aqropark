import React from 'react'

function rooteredux (state = {user:[]} , action){
    if(action.type === 'data'){
        return {...state , user: action.payload}
    }
    return state
}

export default rooteredux