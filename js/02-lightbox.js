import { galleryItems } from './gallery-items.js';
// Change code below this line
const collection = document.querySelector('.gallery');

const listImg = galleryItems.map(({preview, original, description}) => 
`<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`).join('')

collection.insertAdjacentHTML('afterbegin', listImg)
function onOpenLargeImage (event) {
    event.preventDefault();
    if (event.target.classList.contains("gallery__item")) {
        return
    }


}

const lightBox = new SimpleLightbox(collection, {
    captionsData: `alt`,
    captionsDelay: 250,
})
collection.spinner
collection.addEventListener('click', onOpenLargeImage)

console.log(galleryItems);
