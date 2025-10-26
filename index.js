import"./assets/styles-JE8YjOlG.js";import{a as o}from"./assets/vendor-N5iQpiFS.js";function n(){const t=document.querySelector(".categories__btn");t&&t.classList.add("categories__btn--active")}const e="https://dummyjson.com/",r={CATEGORIES:"products/category-list",PRODUCTS:"products"};o.defaults.baseURL=e;async function i(){const{data:t}=await o(`${r.CATEGORIES}`);return t}async function u(t){const{data:s}=await o(`${r.PRODUCTS}`,{params:{limit:12,skip:(t-1)*12}});return s}const a={categoryList:document.querySelector(".categories"),productList:document.querySelector(".products")};function p(t){const s=t.map(c=>`<li class="categories__item">
   <button class="categories__btn" type="button">${c}</button>
 </li>`).join("");a.categoryList.innerHTML=s}function d(t){const s=t.products.map(c=>`
    <li class="products__item" data-id="${c.id}">
    <img class="products__image" src="${c.thumbnail}" alt=""/>
    <p class="products__title">${c.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:${c.brand}</span></p>
    <p class="products__category">Category: ${c.category}</p>
    <p class="products__price">Price: ${c.price}$</p>
 </li>`).join("");a.productList.innerHTML=s}let l=1;async function _(){try{const t=await i();p(["All",...t]),n()}catch(t){console.log(t)}}async function g(){try{const t=await u(l);d(t)}catch(t){console.log(t)}}_();g();
//# sourceMappingURL=index.js.map
