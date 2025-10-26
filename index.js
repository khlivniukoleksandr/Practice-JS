import"./assets/styles-JE8YjOlG.js";import{a as e}from"./assets/vendor-N5iQpiFS.js";function c(){const t=document.querySelector(".categories__btn");t&&t.classList.add("categories__btn--active")}const a="https://dummyjson.com/",n={CATEGORIES:"products/category-list"};e.defaults.baseURL=a;async function r(){const{data:t}=await e(`${n.CATEGORIES}`);return t}const i={categoryList:document.querySelector(".categories")};function u(t){const o=t.map(s=>`<li class="categories__item">
   <button class="categories__btn" type="button">${s}</button>
 </li>`).join("");i.categoryList.innerHTML=o}async function g(){try{const t=await r();u(["All",...t]),c()}catch(t){console.log(t)}}g();
//# sourceMappingURL=index.js.map
