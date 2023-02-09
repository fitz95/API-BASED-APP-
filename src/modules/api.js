import ui from './ui.js';

const urlAllMeals = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
const urlMealrecipe = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

const getMeals = async () => {
  const allMeals = await fetch(urlAllMeals, {
    method: 'Get',
  });
  const meals = await allMeals.json();
  ui(meals.meals);
  return meals;
};

const getRecipe = async (id) => {
  const url = urlMealrecipe + id;
  const comments = await fetch(url, {
    method: 'Get',
  });
  const commentsResponse = await comments.json();
  return commentsResponse;
};
const getComment = async (id) => {
  const comments = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tKVlvnEbmf4TMWB77SE7/comments?item_id=${id}`, {
    method: 'Get',
  });
  const commentsResponse = await comments.json();
  return commentsResponse;
};

export { getMeals, getComment, getRecipe };