let randomBtn = document.querySelector(".randomBtn");
let colorInput = document.querySelector("#colorInput");
let applyBtn = document.querySelector(".applyBtn");
let currentColorValue = document.querySelector(".currentColorValue");
let container = document.querySelector(".container");
const colorArray = ["red", "blue", "green", "yellow", "lightseagreen", "cyan", "tomato", "lightcoral", "maroon", "white", "black", "pink", "skyblue"];

// const ganerateRandomColor = () => {
//   const randomNumber = Math.floor(Math.random() * colorArray.lenght);
//   return colorArray[randomNumber];
// };

const generateRandomColor = () => {
  const randomNumber = Math.floor(Math.random() * colorArray.length);
  return colorArray[randomNumber];
};

const handleColorChange = (color) => {
  container.style.backgroundColor = color;
  currentColorValue.innerText = color;
};

const handleApplyBtn = () => {
  let color = colorInput.value;
  handleColorChange(color);
};

const handleRandomColor = () => {
  let color = generateRandomColor();
  handleColorChange(color);
};
randomBtn.addEventListener("click", handleRandomColor);
applyBtn.addEventListener("click", handleApplyBtn);
