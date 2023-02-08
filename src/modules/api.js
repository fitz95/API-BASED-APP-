import { ui } from './ui.js';


const urlAllMeals =
  'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

const getMeals = async () => {
  const allMeals = await fetch(urlAllMeals, {
    method: 'Get',
  });
  const meals = await allMeals.json();
  ui(meals.meals);
  console.log(meals);
  return meals;
};

const getComment = async (id) => {
  console.log(id);
  const comments = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tKVlvnEbmf4TMWB77SE7/comments?item_id=52959`,{
    method: 'Get',
  });
  const commentsResponse = await comments.json();
  console.log(commentsResponse);
  return commentsResponse;
}

export {getMeals, getComment};