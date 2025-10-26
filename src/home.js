import { getCategories, getProducts } from './js/handlers';

//Логіка сторінки Home
getCategories();
getProducts();

refs.loadMore.addEventListener('click', () => {
  page++;
  getProducts();
});
