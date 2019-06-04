import React from 'react'
import './ProgressBar.css'

const ProgressBar = ()=> {
  return(
    <div className="progress">
      <div className="progress__bar"/>
      <div className="progress__circle-1"/>
      <div className="progress__circle-2"/>
    </div>
  )
}

export default ProgressBar