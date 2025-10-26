import"./assets/styles-JE8YjOlG.js";import{a}from"./assets/vendor-N5iQpiFS.js";function e(){const t=document.querySelector(".categories__btn");t&&t.classList.add("categories__btn--active")}const i="https://dummyjson.com/",r={CATEGORIES:"products/category-list",PRODUCTS:"products"};a.defaults.baseURL=i;async function d(){const{data:t}=await a(`${r.CATEGORIES}`);return t}async function l(t){const{data:c}=await a(`${r.PRODUCTS}`,{params:{limit:12,skip:(t-1)*12}});return c}async function u(t){const{data:c}=await a(`${r.PRODUCTS}/${t}`);return c}const s={categoryList:document.querySelector(".categories"),productList:document.querySelector(".products"),modalWindow:document.querySelector(".modal"),modalCard:document.querySelector(".modal-product"),modalCloseBtn:document.querySelector(".modal__close-btn")};function p(t){const c=t.map(o=>`<li class="categories__item">
   <button class="categories__btn" type="button">${o}</button>
 </li>`).join("");s.categoryList.innerHTML=c}function m(t){const c=t.products.map(o=>`
    <li class="products__item" data-id="${o.id}">
    <img class="products__image" src="${o.thumbnail}" alt=""/>
    <p class="products__title">${o.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:${o.brand}</span></p>
    <p class="products__category">Category: ${o.category}</p>
    <p class="products__price">Price: ${o.price}$</p>
 </li>`).join("");s.productList.innerHTML=c}function _(t){const c=t.tags.map(o=>`<li>${o}</li>`).join("");return`
  <img class="modal-product__img" src="${t.thumbnail}" alt="${t.title}" />
      <div class="modal-product__content">
        <p class="modal-product__title">${t.title}</p>
        <ul class="modal-product__tags">${c}</ul>
        <p class="modal-product__description">${t.description}</p>
        <p class="modal-product__shipping-information">Shipping: ${t.shippingInformation}</p>
        <p class="modal-product__return-policy">Return Policy: ${t.returnPolicy}</p>
        <p class="modal-product__price">Price: $${t.price}</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>  
    `}async function g(t){const c=await u(t),o=_(c);o&&(s.modalCard.innerHTML=o,s.modalWindow.classList.add("modal--is-open"),s.modalCloseBtn.addEventListener("click",n))}let y=1;async function f(){try{const t=await d();p(["All",...t]),e()}catch(t){console.log(t)}}async function $(){try{const t=await l(y);m(t)}catch(t){console.log(t)}}async function C(t){try{const o=t.target.closest("li").dataset.id;g(o)}catch(c){console.log(c)}}function n(){s.modalWindow.classList.remove("modal--is-open"),s.modalCloseBtn.removeEventListener("click",n)}f();$();s.productList.addEventListener("click",C);
//# sourceMappingURL=index.js.map
