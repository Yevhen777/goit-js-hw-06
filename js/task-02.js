const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("ul");

const newList = ingredients.map((element) => {
  const list = document.createElement("li");
  list.textContent = element;
  list.classList.add("item");

  return list;
});

listEl.append(...newList);
