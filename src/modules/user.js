import { getMealsInfo, addLike, getLikes } from './api.js';

const meals = document.querySelector('.meals');

window.addEventListener('load', () => {
  getMealsInfo();
});

meals.addEventListener('click', async (e) => {
  // trash icon
  if (e.target.closest('.like-icon')) {
    const likeText = e.target.closest('.like-icon').nextElementSibling;
    const { id } = likeText;
    const createLike = await addLike(id);
    while (createLike.type !== 'cors');
    const likeVal = await getLikes();
    likeText.innerHTML = `${likeVal[id].likes} likes`;
  }
});
