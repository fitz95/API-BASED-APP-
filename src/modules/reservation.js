import Object from './resObj.js';

const API = require('./api.js');

const popupRes = document.querySelector('.popup-reservation-container');
const resPageCloseBtn = document.querySelector('.reservation-page-close-btn');
const popupResImgDiv = document.querySelector('.popup-reservation-img-div');
const name = document.querySelector('.name');
const meals = document.querySelector('.meals');

let array = [];

const resBtn = (data) => {
  array = data;
};

let index = '';

const element = (data) => {
  document.querySelector('.reservations-div').innerHTML = '';
  if (Array.isArray(data)) {
    document.querySelector('.res-count').innerHTML = `(${data.length})`;
    data.forEach((element) => {
      const div = document.createElement('div');
      div.classList = 'reservations';
      const startDate = document.createElement('h2');
      startDate.innerHTML = element.date_start;
      const endDate = document.createElement('h2');
      endDate.innerHTML = `~${element.date_end}`;
      const name = document.createElement('h2');
      name.classList = 'byName';
      name.innerHTML = `by "${element.username}"`;
      div.append(startDate, endDate, name);
      document.querySelector('.reservations-div').appendChild(div);
    });
  } else {
    document.querySelector('.res-count').innerHTML = '(0)';
  }
};

meals.addEventListener('click', async (event) => {
  if (event.target.className === 'resBtn') {
    index = parseInt(event.target.parentElement.id, 10);
    const ID = event.target.id;
    popupRes.classList.add('reservation-container-appear');
    const resPageImg = new Image();
    resPageImg.src = array[ID].strMealThumb;
    popupResImgDiv.innerHTML = '';
    popupResImgDiv.append(resPageImg);
    name.innerHTML = array[ID].strMeal;
    const reservation = await API.getReservations(index);
    element(reservation);
  }
});

resPageCloseBtn.addEventListener('click', (() => {
  popupRes.classList.remove('reservation-container-appear');
}));

const nameInput = document.querySelector('.Your-name');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');

document.querySelector('.form-btn').addEventListener('click', (async () => {
  if (nameInput.value !== '' && startDate.value !== '' && endDate.value !== '') {
    const obj = new Object(index, nameInput.value, startDate.value, endDate.value);
    await API.postReservations(obj);
    const reservation = await API.getReservations(index);
    element(reservation);
    nameInput.value = '';
    startDate.value = '';
    endDate.value = '';
  }
}));

export default resBtn;