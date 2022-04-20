const inputTextSize = document.querySelector("input");
const textInput = document.querySelector("span", "#text");

inputTextSize.addEventListener("input", sizeText);

function sizeText(event) {
  const inputForm = event.currentTarget.value;
  textInput.style.fontSize = `${inputForm}px`;
}
