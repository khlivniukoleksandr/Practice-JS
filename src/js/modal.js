import { fetchProductById } from './products-api';
import { renderModalCard } from './render-function';
import { refs } from './refs';
import { onModalClose } from './handlers';

export async function showModal(id) {
  const product = await fetchProductById(id);
  const productEl = renderModalCard(product);

  if (productEl) {
    refs.modalCard.innerHTML = productEl;
    refs.modalWindow.classList.add('modal--is-open');
    refs.modalCloseBtn.addEventListener('click', onModalClose);
  }
}
