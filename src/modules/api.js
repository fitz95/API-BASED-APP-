import ui from './ui.js';
import resBtn from './reservation.js';

const urlAllMeals = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

const postReservations = async (data) => {
  let reservation = '';
  try {
    reservation = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tKVlvnEbmf4TMWB77SE7/reservations/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  // eslint-disable-next-line no-empty
  } catch (error) {
  }
  return reservation;
};

const getReservations = async (id) => {
  const ID = id.toString();
  try {
    const reservation = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tKVlvnEbmf4TMWB77SE7/reservations?item_id=${ID}`, {
      method: 'Get',
    });
    const res = await reservation.json();
    return res;
  } catch (error) {
    return error;
  }
};

const getStrInstruction = async (id) => {
  const ID = id.toString();
  try {
    const reservation = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ID}`, {
      method: 'Get',
    });
    const res = await reservation.json();
    return res.meals[0];
  } catch (error) {
    return error;
  }
};

const getMeals = async () => {
  const allMeals = await fetch(urlAllMeals, {
    method: 'Get',
  });
  const meals = await allMeals.json();
  ui(meals.meals);
  resBtn(meals.meals);
  return meals;
};

export {
  getMeals, postReservations, getReservations, getStrInstruction,
};
