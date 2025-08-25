let display = document.querySelector(".display");

const appendValue = (text) => {
  if (display.innerText === "0" || display.innerText === "Error" || display.innerText === "Infinity") {
    display.innerText = text;
  } else {
    display.innerText = `${display.innerText}${text}`;
  }
};
const clearDisplay = () => {
  display.innerText = "0";
};
const calculate = () => {
  try {
    display.innerText = eval(display.innerText);
  } catch (error) {
    display.innerText = "Error";
  }
};
