import { getMeals, getComment } from './api.js';
import getRecipe from './commentpopup.js';

const meals = document.querySelector('.meals');
window.addEventListener('load', () => {
  getMeals();
});

meals.addEventListener('click', (e) => {
  if (e.target.closest('.comBtn')) {
    const btn = e.target;
    const { id } = btn;
    getComment(id);
    getRecipe(id);
  }
});