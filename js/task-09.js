const bodyChangeColor = document.querySelector("body");
const backgroundColor = document.querySelector(".widget");
const btnCgange = document.querySelector(".change-color");

btnCgange.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {
  bodyChangeColor.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;
}
