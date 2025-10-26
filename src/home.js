import { getCategories, getProducts } from './js/handlers';
import { renderProducts } from './js/render-function';
import { fetchProductsByCategory } from './js/products-api';
import { getCategories, getProducts, onCardClick } from './js/handlers';
import { refs } from './js/refs';

//Логіка сторінки Home
getCategories();
getProducts();

const PRODUCTS_PER_PAGE = 12;
let allProducts = [];
let currentPage = 1;

let products = [];

document.querySelector('.categories').addEventListener('click', handlerFind);
async function handlerFind(e) {
    const findBth = e.target.closest(".categories__btn");
      if (!findBth)  return;


    document.querySelectorAll(".categories__btn").forEach(btn => btn.classList.remove("categories__btn--active"));
    findBth.classList.add("categories__btn--active");
    const category = findBth.textContent;

  const categoryData = await fetchProductsByCategory(category); 
allProducts = categoryData.products;


    if (!allProducts.length){
      refs.notFound.classList.add('not-found--visible');
  refs.productList.innerHTML = '';
    }else{
   refs.notFound.classList.remove('not-found--visible');
  renderProducts(categoryData);
    }

   
}
refs.productList.addEventListener('click', onCardClick);
