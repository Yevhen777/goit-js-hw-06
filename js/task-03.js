const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryEl = document.querySelector("ul");

const names = images.map((image) => {
  const liEl = document.createElement("li");

  liEl.innerHTML = `<img src="${image.url}" alt="${image.alt}"/>`;

  return liEl;
});
galleryEl.append(...names);

galleryEl.style.display = "flex";
galleryEl.style.backgroundColor = "tomato";
console.log(galleryEl.firstChild);
