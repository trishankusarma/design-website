import React from 'react'
import "./button.css"

const Button = ({tag}) => {
  return (
    <div className="button">
	  <a id="btn1">{tag}</a>
	  <a id="btn2">{tag}</a>
    </div>
  )
}

export default Button