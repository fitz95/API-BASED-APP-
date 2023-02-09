import ui from './ui.js';

const id = 'tKVlvnEbmf4TMWB77SE7';
const urlAllMeals = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
const invApiUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${id}/likes`;
export const ides = ['52959', '52819', '52944', '53043', '52802', '52918'];

export const getLikes = async () => {
  try {
    const allLikes = await fetch(invApiUrl, {
      method: 'Get',
    });
    return allLikes.json();
  } catch (error) {
    return error;
  }
};

export const getMealsInfo = async () => {
  const allMeals = await fetch(urlAllMeals, {
    method: 'Get',
  });
  const likes = await getLikes();
  const meals = await allMeals.json();
  ui(meals.meals, likes);
};

export const addLike = async (index) => {
  try {
    const userPost = await fetch(invApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: `${ides[index]}`,
      }),
    });
    return userPost;
  } catch (error) {
    return error;
  }
};
