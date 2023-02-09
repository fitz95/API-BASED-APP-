import { getMealsInfo, addLike } from './api.js';

const meals = document.querySelector('.meals');

window.addEventListener('load', () => {
  getMealsInfo();
});

meals.addEventListener('click', async (e) => {
  // trash icon
  if (e.target.closest('.like-icon')) {
    const likeText = e.target.closest('.like-icon').nextElementSibling;
    const likeIcon = e.target.closest('.like-icon');
    const { id } = likeText;
    addLike(id);
    const likeNbr = parseInt(likeText.innerHTML, 10) + 1;
    likeText.innerHTML = `${likeNbr} likes`;
    likeIcon.className = 'fa fa-heart';
  }
});
