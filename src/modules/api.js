import { ui } from './ui.js';
const urlAllMeals =
  'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

export const getMeals = async () => {
  const allMeals = await fetch(urlAllMeals, {
    method: 'Get',
  });
  const meals = await allMeals.json();
  ui(meals.meals);
  return meals;
};
