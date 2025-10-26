// API ендпоінти:
// https://dummyjson.com/docs/products - документація бекенду, розділ продукти
// https://dummyjson.com/products?limit=10&skip=10 - отримати всі продукти з пагінацією
// https://dummyjson.com/products/1 - отримати один продукт по ID
// https://dummyjson.com/products/search?q=nail - пошук продукту по ключовому слову
// https://dummyjson.com/products/category-list - отримати список категорій продуктів
// https://dummyjson.com/products/category/smartphones - отримати продукти по категорії

import axios from 'axios';
import { BASE_URL, ENDPOINTS } from './constants';

axios.defaults.baseURL = BASE_URL;

export async function fetchCategories() {
  const { data } = await axios(`${ENDPOINTS.CATEGORIES}`);
  return data;
}

export async function fetchProducts(currentPage) {
  const { data } = await axios(`${ENDPOINTS.PRODUCTS}`, {
    params: {
      limit: 12,
      skip: (currentPage - 1) * 12,
    },
  });
  return data;
}

export async function fetchProductsByCategory(category) {
  try {
    let url;
    if (category === 'All') {
      url = 'https://dummyjson.com/products?limit=100'; 
    } else {
      url = `https://dummyjson.com/products/category/${category}`;
    }

    const { data } = await axios.get(url);

    // повертаємо об'єкт із полем products
    return { products: data.products || [] };

  } catch (error) {
    console.error(error);
    return { products: [] };
  }
}
