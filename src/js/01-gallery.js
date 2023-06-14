import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';

const galleryEl = document.querySelector('.gallery');

const mapGalleItem = galleryItems
  .map(element => {
    return `<li class = "gallery__item">
    <a class = "gallery__link" href = "${element.original}">
        <img
            class = "gallery__image"
            src = "${element.preview}"
            alt = "${element.description}"
        />
    </a>
</li>`;
  })
  .join('');

galleryEl.innerHTML = mapGalleItem;
galleryEl.style.listStyle = 'none';

new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionDelay: '250',
});
