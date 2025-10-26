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

export function renderProducts(data) {
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
}
