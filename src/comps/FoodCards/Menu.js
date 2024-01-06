// example.js

export function updateResult(item, number) {
    document.getElementById(`Number-on-Cart${item}`).textContent = number;
  }
  
  export function add(item, number) {
    number += 1;
    updateResult(item, number);
    return number; // Return updated number value
  }
  
  export function subtract(item, number) {
    if (number > 0) {
      number -= 1;
      updateResult(item, number);
    }
    return number; // Return updated number value
  }
  