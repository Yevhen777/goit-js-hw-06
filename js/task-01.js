const item = document.querySelectorAll(".item");
console.log("Number of categories:", item.length);
const el = item.forEach((itemEl) => {
  console.log("Category:", itemEl.firstElementChild.textContent);

  console.log("Elements:", itemEl.lastElementChild.children.length);
});
