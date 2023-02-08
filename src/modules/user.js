import { getMeals, getComment  }  from './api.js';

const meals = document.querySelector('.meals');
window.addEventListener('load', () => {
  getMeals();
});

const comBtn = document.querySelectorAll('comBtn');

meals.addEventListener('click', (e) => {
  if(e.target.closest('.comBtn')) {
    const btn = e.target;
    const {id} = btn;
    console.log(typeof(id));
    console.log(id);
    // console.log('click');
    // console.log(id.type);
    getComment(id);
  }
})