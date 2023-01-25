import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galaryList = document.querySelector(".gallery");
function createGalaryMarkup(array) {
  return array
    .map(
      ({
        original,
        preview,
        description,
      }) => `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    )
    .join("");
}
galaryList.insertAdjacentHTML("beforeend", createGalaryMarkup(galleryItems));

galaryList.addEventListener("click", onImgClick);

function onImgClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "A") {
    return;
  }
}
let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
