import React,{ useState, useEffect } from 'react'
import "./gallery.css"

import Tags from './tags/Tags';
import artist from './data/artist';
import beautiful from './data/beautiful';
import special from './data/special';

import Slider from "./slider/Slider"

const Gallery = () => {

  const [ tagChosed, setTagChosed ] = useState(0);
  const [ data, setData ] = useState([]);

  useEffect(() => {
      
      if( tagChosed === 0 ) setData(artist)
      else if( tagChosed === 1 ) setData(beautiful)
      else if( tagChosed === 2 ) setData( special )

  }, [tagChosed])
  

  return (
    <div >
        < Tags tagChosed={tagChosed} setTagChosed={setTagChosed}/>
        < Slider width = { data.length*100 } data = {data} /> 
    </div>
  )
}

export default Gallery