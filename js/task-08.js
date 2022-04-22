const form = document.querySelector(".login-form");

form.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();
  const passwordValue = event.currentTarget.elements.password.value;
  const emailValue = event.currentTarget.elements.email.value;
  console.log(event.currentTarget.elements.password.value);

  if (passwordValue === "" || emailValue === "") {
    alert("Поля должны быть заполнены.");
  }

  const email = emailValue;
  const password = passwordValue;

  const formDate = {
    email,
    password,
  };
  event.currentTarget.reset();
}
