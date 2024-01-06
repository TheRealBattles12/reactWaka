import React, { useState } from 'react';
import { add, subtract } from './Menu';
import "./FoodCard.css"

const Foodcard = (props) => {
  const [number, setNumber] = useState(0); // Initializing 'number' in component state

  const handleAdd = () => {
    const updatedNumber = add(1, number);
    setNumber(updatedNumber);
  };

  const handleSubtract = () => {
    const updatedNumber = subtract(1, number);
    setNumber(updatedNumber);
  };

  return (
    <div className="item">
      <div>
        <h3>{props.meal}</h3>
        <h4>{props.price}</h4>
        <div className="button">
          <button onClick={handleSubtract} id="minus-button">-</button>
          <h1 id="Number-on-Cart1">{number}</h1>
          <button onClick={handleAdd} id="plus-button">+</button>
        </div>
      </div>
      <img src={props.pic} alt="" />
    </div>
  );
};

export default Foodcard;
