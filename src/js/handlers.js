import { activeFirstBtn } from './helpers';
import { fetchCategories, fetchProducts } from './products-api';
import { refs } from './refs';
import { renderCategories, renderProducts } from './render-function';

let page = 1;
let currentQuery = '';

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
    const products = await fetchProducts(page);
    renderProducts(products);
  } catch (error) {
    console.log(error);
  }
}

export async function handleSearchFormSubmit(e) {
  e.preventDefault();
  const query = refs.input.value.trim();

  if (!query) return;

  currentQuery = query;
  try {
    const search = fetchSearch(query);
    if (search.products.length === 0) {
      refs.productList.innerHTML = '';
      refs.notFoundBtn.classList.add('not-found--visible');
      return;
    }
    refs.notFoundBtn.classList.remove('not-found--visible');
    renderProducts(search);

  } catch (error) {
    console.log(error);
    
  }
}

export async function handleClearSearch() {
  refs.input.value = '';
  refs.clearBtn.hidden = true;
  refs.notFound.classList.remove('not-found--visible');
  currentQuery = '';
  currentPage = 1;

  try {
    const products = await fetchProducts(currentPage);
    renderProducts(products);
  } catch (error) {
    console.log(error);
  }
}

export function handleSearchInput(e) {
  const value = e.target.value.trim();
  refs.clearBtn.hidden = !value;
}