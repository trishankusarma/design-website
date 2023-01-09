import React from 'react'
import "./slider.css"

const Slider = ({width , data}) => {
  return (
    <div className="slider" >
        
            <div className="slides">
                {
                    data.map((img, index)=>(
                        <div id={`#slide-${index}`} key={index}>
                           <img src={img.url} className="img"/>
                        </div>
                    ))
                }
            </div>
  </div>
  )
}

export default Slider