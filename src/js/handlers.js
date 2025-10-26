import { activeFirstBtn } from './helpers';
import { fetchCategories, fetchProducts } from './products-api';
import { renderCategories, renderProducts } from './render-function';

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
