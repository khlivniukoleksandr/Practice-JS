import { refs } from './refs';

export function renderCategories(data) {
  const markup = data
    .map(
      element => `<li class="categories__item">
   <button class="categories__btn" type="button">${element}</button>
 </li>`
    )
    .join('');

  refs.categoryList.innerHTML = markup;
}
