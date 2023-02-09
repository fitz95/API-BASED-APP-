import ui from './ui.js';

const urlAllMeals = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
const urlMealrecipe = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
const getMeals = async () => {
const id = 'tKVlvnEbmf4TMWB77SE7';
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

const getMealsInfo = async () => {
  const allMeals = await fetch(urlAllMeals, {
    method: 'Get',
  });
  const likes = await getLikes();
  const meals = await allMeals.json();
  ui(meals.meals, likes);
};

 const addLike = async (index) => {
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

export { getMeals, getComment, getRecipe, addLike, getMealsInfo  };