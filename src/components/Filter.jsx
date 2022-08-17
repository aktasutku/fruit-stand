import React from 'react'
import "./filter.css"
import filter from "../filter.json"

const Filter = () => {
  return (
    <div className="filter">
        {filter.map(item=>{ 
          return(
            <div className='filter_circle'>
              <div className="filter_title">{item.name}</div>
              <img src={item.icon}/>
            </div>
          )
          })}
    </div>
  )
}

export default Filter