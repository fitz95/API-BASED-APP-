import Object from './resObj.js';

const popupRes = document.querySelector('.popup-reservation-container');
const resPageCloseBtn = document.querySelector('.reservation-page-close-btn');
const popupResImgDiv = document.querySelector('.popup-reservation-img-div');
const name = document.querySelector('.name');
const id = document.querySelector('.id');
const meals = document.querySelector('.meals');

const resBtn = (data) => {
  meals.addEventListener('click', (event) => {
    if (event.target.className === 'resBtn') {
      const ID = event.target.parentElement.id;
      popupRes.classList.add('reservation-container-appear');
      const resPageImg = new Image();
      resPageImg.src = data[ID].strMealThumb;
      popupResImgDiv.innerHTML = '';
      popupResImgDiv.append(resPageImg);
      name.innerHTML = data[ID].strMeal;
      id.innerHTML = `ID${data[ID].idMeal}`;
    }
  });
};

resPageCloseBtn.addEventListener('click', (() => {
  popupRes.classList.remove('reservation-container-appear');
}));

const nameInput = document.querySelector('.Your-name');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');

const element = () => {

};

let array = [];

const listItem = (data) => {
  array = [...array, data];
};

document.querySelector('.form-btn').addEventListener('click', ((e) => {
  const obj = new Object(nameInput.value, startDate.value, endDate.value);
  element(obj);
  listItem(obj);
}));

export default resBtn;
