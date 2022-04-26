const bodyChangeColor = document.querySelector("body");
const backgroundColor = document.querySelector(".widget");
const btnCgange = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

btnCgange.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {
  const colorRandom = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  colorSpan.textContent = colorRandom;

  bodyChangeColor.style.backgroundColor = colorRandom;
}
