import { getCategories } from './js/handlers';

//Логіка сторінки Home
getCategories();

const PRODUCTS_PER_PAGE = 12;
let currentPage = 1;
let products = [];

const  productList = document.querySelector(".products");
const notFound = document.querySelector(".not-found");
const categories = document.querySelector(".categories").addEventListener("click", handlerCick);

export async function handlerCick(e) {
    const findBtn = e.target.closest('.categories   ');
    if (!findBtn ){
        return;
    }
}