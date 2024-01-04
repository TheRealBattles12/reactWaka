import React from 'react'

const Foodcard = (props) => {
  return (
    <div className="item">
        <div>
            <h3>{props.meal}</h3>
            <h4>{props.price}</h4>
        </div>
            <img src={props.pic} alt=""/>
    </div>
  )
}

export default Foodcard

