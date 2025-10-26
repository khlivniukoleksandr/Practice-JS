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

export function renderModalCard(product) {
  const productTags = product.tags.map(tag => `<li>${tag}</li>`).join('');
  return `
  <img class="modal-product__img" src="${product.thumbnail}" alt="${product.title}" />
      <div class="modal-product__content">
        <p class="modal-product__title">${product.title}</p>
        <ul class="modal-product__tags">${productTags}</ul>
        <p class="modal-product__description">${product.description}</p>
        <p class="modal-product__shipping-information">Shipping: ${product.shippingInformation}</p>
        <p class="modal-product__return-policy">Return Policy: ${product.returnPolicy}</p>
        <p class="modal-product__price">Price: $${product.price}</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>  
    `;
}
