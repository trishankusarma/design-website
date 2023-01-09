import React from 'react'
import "./header.css"

const Header = () => {
  return (
   <div>
        <div className="header">
          <div className="waviy">
              <span style={{"animationDelay" : "calc(.1s)" }}>B</span>
              <span style={{"animationDelay" : "calc(.2s)" }}>R</span>
              <span style={{"animationDelay" : "calc(.3s)" }}>I</span>
              <span style={{"animationDelay" : "calc(.4s)" }} className="right">S</span>
              <span style={{"animationDelay" : "calc(.5s)" }} className="right">H</span>
              <span style={{"animationDelay" : "calc(.6s)" }} className="left">T</span>
              <span style={{"animationDelay" : "calc(.7s)" }} className="left">I</span>
          </div>
        </div>
        <div className='header_pov'>
             POV : It's Bristi !! Not Brishti !! Okay !! 
        </div>
   </div>
  )
}

export default Header