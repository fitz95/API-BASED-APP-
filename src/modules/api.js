import ui from './ui.js';
import resBtn from './reservation.js';
// tKVlvnEbmf4TMWB77SE7
const urlAllMeals = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

const getMeals = async () => {
  const allMeals = await fetch(urlAllMeals, {
    method: 'Get',
  });
  const meals = await allMeals.json();
  console.log(meals);
  ui(meals.meals);
  resBtn(meals.meals);
  return meals;
};

export default getMeals;
