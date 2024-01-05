// example.js

export function updateResult(item, number) {
    document.getElementById(`Number-on-Cart${item}`).textContent = number[item - 1];
  }
  
  export function add(item, number) {
    number[item - 1] += 1;
    updateResult(item, number);
  }
  
  export function subtract(item, number) {
    if (number[item - 1] > 0) {
      number[item - 1] -= 0;
    }
    updateResult(item, number);
  }
  