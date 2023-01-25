import { galleryItems } from "./gallery-items.js";
// Change code below this line
const mainDiv = document.querySelector(".gallery");
function createGalaryMarkup(array) {
  return array
    .map(
      ({ original, preview, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join("");
}

mainDiv.insertAdjacentHTML("beforeend", createGalaryMarkup(galleryItems));

mainDiv.addEventListener("click", onImgClick);
function onImgClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
        <img
      src="${e.target.dataset.source}"
    />
`);
  instance.show();

  mainDiv.addEventListener("keydown", closeImg);
  function closeImg(e) {
    if (e.code === "Escape") {
      instance.close();
      mainDiv.removeEventListener("keydown", closeImg);
    }
  }
}
