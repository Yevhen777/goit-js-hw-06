const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("ul");

const newlist = [];

for (let i = 0; i < ingredients.length; i++) {
  const list = document.createElement("li");

  list.textContent = ingredients[i];
  list.classList.add("item");

  newlist.push(list);
}

listEl.append(...newlist);
console.log(newlist);
