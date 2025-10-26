import { getCategories, getProducts, onCardClick } from './js/handlers';
import { refs } from './js/refs';

//Логіка сторінки Home
getCategories();
getProducts();

refs.productList.addEventListener('click', onCardClick);
