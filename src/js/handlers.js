import { activeFirstBtn } from './helpers';
import { fetchCategories } from './products-api';
import { renderCategories } from './render-function';

export async function getCategories() {
  try {
    const categories = await fetchCategories();
    renderCategories(['All', ...categories]);
    activeFirstBtn();
  } catch (error) {
    console.log(error);
  }
}


