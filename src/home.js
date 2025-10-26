import { getCategories, getProducts } from './js/handlers';

//Логіка сторінки Home
getCategories();
getProducts();

refs.form.addEventListener('submit', handleSearchFormSubmit);
refs.input.addEventListener('input', handleSearchInput);
refs.clearBtn.addEventListener('click', handleClearSearch);