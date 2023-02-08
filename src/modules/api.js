import ui from './ui.js';

const id = 'tKVlvnEbmf4TMWB77SE7';
const urlAllMeals = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
const invApiUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${id}/likes`;
// const ides = ['52959', '52819', '52944', '53043', '52802', '52918'];

export const getLikes = async () => {
  const allLikes = await fetch(invApiUrl, {
    method: 'Get',
  });
  return allLikes.json();
};

export const getMeals = async () => {
  const allMeals = await fetch(urlAllMeals, {
    method: 'Get',
  });

  const meals = await allMeals.json();
  const likes = await getLikes();
  ui(meals.meals, likes);
  return meals;
};
