let counterValue = 0;

const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);
const spanButton = document.querySelector("span");
const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);

const ClicIncrement = () => {
  counterValue += 1;
  spanButton.textContent = counterValue;
};
buttonIncrement.addEventListener("click", ClicIncrement);

const ClickDecrement = () => {
  counterValue -= 1;
  spanButton.textContent = counterValue;
};
buttonDecrement.addEventListener("click", ClickDecrement);
