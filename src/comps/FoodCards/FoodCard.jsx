import React from 'react';
import { add, subtract, updateResult } from './Menu';
import "./FoodCard.css"

const Foodcard = (props) => {
  const subtract = (value) => {
    // Define your subtract logic here
  };

  const add = (value) => {
    // Define your add logic here
  };

  return (
    <div className="item">
      <div>
        <h3>{props.meal}</h3>
        <h4>{props.price}</h4>
          <div className="button">
          <button onClick={() => subtract(1, number)} id="minus-button">-</button>
        <h1 id="Number-on-Cart1">{Number(0)}</h1>
        <button onClick={() => add(1, number)} id="plus-button">+</button>
          </div>
      </div>
      <img src={props.pic} alt="" />
    </div>
  );
};

export default Foodcard;
