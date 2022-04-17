// const categories = document.querySelectorAll("#categories");
const item = document.querySelectorAll(".item");
console.log("Number of categories:", item.length);
const el = item.forEach((itemEl) => {
  console.log("Category:", itemEl.firstElementChild.textContent);

  console.log("Elements:", itemEl.lastElementChild.children.length);
});

// const titleEl = item.firstElementChild;
// console.log(titleEl);
// const titleEl = item.firstChild;

// const titleEl = document.querySelectorAll("h2");

// console.log(titleEl);
