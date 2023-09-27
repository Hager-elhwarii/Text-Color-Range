const redInput = document.getElementById("red-input");
const greenInput = document.getElementById("green-input");
const blueInput = document.getElementById("blue-input");
const text = document.querySelector(".lorem-text");

let red = 0;
let green = 0;
let blue = 0;

const updateColor = ()=> {
  red = redInput.value;
  green = greenInput.value;
  blue = blueInput.value;

  text.style.color = `rgb(${red},${green},${blue}) `;
}
