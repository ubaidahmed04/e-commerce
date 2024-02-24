import React from 'react'
import {ourAppImg} from '../assets'

const style ={
    display: 'flex',
    justifyContent: 'center'
}
function OurApp() {
  return (
    <div style={style}>
        <img src={ourAppImg} alt="download-our-app" />
    </div>
  )
}

export default OurApp