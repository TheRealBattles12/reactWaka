import React from 'react';
import { add, subtract, updateResult } from './Menu';
import "./FoodCard.css"

const Foodcard = (props) => {
  
return (
    <div className="item">
      <div>
        <h3>{props.meal}</h3>
        <h4>{props.price}</h4>
          <div className="button">
          <button onClick={() => subtract(1, number)} id="minus-button">-</button>
        <h1 id="Number-on-Cart1">0</h1>
        <button onClick={() => add(1, number)} id="plus-button">+</button>
          </div>
      </div>
      <img src={props.pic} alt="" />
    </div>
  );
};

export default Foodcard;
