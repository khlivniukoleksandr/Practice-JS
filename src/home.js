import { getCategories, getProducts, onCardClick } from './js/handlers';
import { refs } from './js/refs';

//Логіка сторінки Home
getCategories();
getProducts();

refs.form.addEventListener('submit', handleSearchFormSubmit);
refs.input.addEventListener('input', handleSearchInput);
refs.clearBtn.addEventListener('click', handleClearSearch);
refs.productList.addEventListener('click', onCardClick);
