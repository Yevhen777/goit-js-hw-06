const inputEl = document.querySelector("input, #name-input");
const AnonymousTitle = document.querySelector("#name-output");
console.log(AnonymousTitle);

inputEl.addEventListener("input", inputElement);

function inputElement(event) {
  const formElement = event.currentTarget.value;
  AnonymousTitle.textContent = formElement;

  if (formElement === "") {
    AnonymousTitle.textContent = "Anonymous";
  }
}
