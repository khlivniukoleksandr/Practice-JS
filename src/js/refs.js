import { document } from "postcss";

export const refs = {
  categoryList: document.querySelector('.categories'),
  productList: document.querySelector('.products'),
  notFoundBtn: document.querySelector('.not-found'),
  searchForm: document.querySelector('.search-form'),
  searchFormInput: document.querySelector('.search-form__input'),
  clearBtn: document.querySelector('.search-form__btn-clear'),
  modalWindow: document.querySelector('.modal'),
  modalCard: document.querySelector('.modal-product'),
  modalCloseBtn: document.querySelector('.modal__close-btn'),
};
