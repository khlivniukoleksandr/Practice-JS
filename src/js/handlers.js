import { activeFirstBtn } from './helpers';
import { fetchCategories, fetchProducts } from './products-api';
import { renderCategories, renderProducts } from './render-function';
import { showModal } from './modal';
import { refs } from './refs';

let page = 1;

export async function getCategories() {
  try {
    const categories = await fetchCategories();
    renderCategories(['All', ...categories]);
    activeFirstBtn();
  } catch (error) {
    console.log(error);
  }
}

export async function getProducts() {
  try {
    const data = await fetchProducts(page);
    renderProducts(data);
  } catch (error) {
    console.log(error);
  }
}

export async function onCardClick(e) {
  try {
    const productCard = e.target.closest('li');
    const currentID = productCard.dataset.id;
    showModal(currentID);
  } catch (error) {
    console.log(error);
  }
}

export function onModalClose() {
  refs.modalWindow.classList.remove('modal--is-open');
  refs.modalCloseBtn.removeEventListener('click', onModalClose);
}
