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


1 итерация
  const list = document.createElement("li");
  list.textContent = "Potatoes";
  list.classList.add("item");

return list;
  
---получается єто: newList=[<li class="item">Patatos</li>]


2 итерация
  const list = document.createElement("li");
  list.textContent = "Mushrooms";
  list.classList.add("item");

return list;
  
--- получается єто: newList = [<li class="item">Patatos</li>,
<li class="item">Mashroms</li>]




listEl.append(...newList);
