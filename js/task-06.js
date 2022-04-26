const inputText = document.querySelector('input[data-length="6"]');

inputText.addEventListener("blur", focusBlur);

function focusBlur(event) {
  const formElement = event.currentTarget.value;
  console.log(formElement);
  console.dir(event);
  if (formElement.length == inputText.dataset.length) {
    inputText.classList.add("valid");
    inputText.classList.remove("invalid");
  } else {
    inputText.classList.remove("valid");
    inputText.classList.add("invalid");
  }
}
