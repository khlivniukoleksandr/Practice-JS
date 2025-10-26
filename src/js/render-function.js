import { refs } from './refs';

export function renderCategories(data) {
  const markup = data
    .map(
      element => `<li class="categories__item">
   <button class="categories__btn" type="button">${element}</button>
 </li>`
    )
    .join('');

  refs.categoryList.innerHTML = markup;
}

let page = 1;
const perPage = 12;
let totalPages = 0;

export function renderProducts(data) {
  totalPages = Math.ceil(data.total / perPage);
  const markup = data.products
    .map(
      elem => `
    <li class="products__item" data-id="${elem.id}">
    <img class="products__image" src="${elem.thumbnail}" alt=""/>
    <p class="products__title">${elem.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:${elem.brand}</span></p>
    <p class="products__category">Category: ${elem.category}</p>
    <p class="products__price">Price: ${elem.price}$</p>
 </li>`
    )
    .join('');
  refs.productList.innerHTML = markup;

   if (page < totalPages) {
    refs.loadMore.classList.remove('is-hidden');
  } else {
    refs.loadMore.classList.add('is-hidden');
  }
}
