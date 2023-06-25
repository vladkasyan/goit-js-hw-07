import { galleryItems } from './gallery-items.js';
// Change code below this line
const collection = document.querySelector('.gallery');

const listImg = galleryItems.map(({preview, original, description}) => 
`<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`).join('')

collection.insertAdjacentHTML('afterbegin', listImg)

collection.addEventListener("click", onOpenLargeImage)

function onOpenLargeImage (event) {
    event.preventDefault();
    if (event.target.classList.contains("gallery__item")) {
        return
    }

    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" alt="${event.target.description}" data-source="${event.target.dataset.source}" width="800" heigth="600">`,
    {
        onShow : () => {
            document.addEventListener("keydown", onEsc)
        },
        onClose : () => {
            document.removeEventListener("keydown", onEsc)
        },
    });
    instance.show()

    function onEsc(event) {
        if(event.code === "Escape"){
            instance.close();
        }
    }
}

console.log(galleryItems);
