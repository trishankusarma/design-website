import React from 'react'
import Button from '../button/Button'

import "./tags.css"

const Tags = ({ tagChosed, setTagChosed }) => {
  return (
    <div className='tags'>
        <div onClick={()=>setTagChosed(0)}>
           < Button tag={"artist"}/>
        </div>
        <div onClick={()=>setTagChosed(1)}>
           < Button tag={"beautiful"}/>
        </div>
        <div onClick={()=>setTagChosed(2)}>
           < Button tag={"special"}/>
        </div>
    </div>
  )
}

export default Tags