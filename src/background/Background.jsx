import React from 'react'
import "../Styles/background.css"
import video from "../assets/bg-universe.mp4"
import fallback from "../assets/fallback-image.png"

const Background = () => {
  return (
    <>
        <div className='shadow-overlay'></div>
        <video playsInline autoPlay muted loop preload='auto' id='bg' poster={fallback}><source src={video} type='video/mp4'/></video>
    </>
  )
}

export default Background
