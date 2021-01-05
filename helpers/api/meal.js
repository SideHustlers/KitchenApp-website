import axios from '../../axios';
const urls = require('../../urls');


module.exports = {

  createMeal: async(date, name, recipes) => {
    try {
      const res = await axios.post(
        urls.MEAL_URL + '/create',
        { date: date,
          name: name,
          recipes: recipes }
      );

      if (res.data.status == 'successful') {
        if (res.data.hasPayload) {
          return res.data.payload;
        }
      } else {
        throw new Error(res);
      }

    } catch (error) {
      throw new Error(error);
    }
  },

  editMeal: async(mealId, name) => {
    try {
      const res = await axios.put(
        urls.MEAL_URL + '/' + mealId + '/edit',
        { name: name}
      );

      if (res.data.status == 'successful') {
        if (res.data.hasPayload) {
          return res.data.payload
        }
      } else {
        throw new Error(res);
      }

    } catch (error) {
      throw new Error(error);
    }
  },

  // TODO: TEST
  moveMeal: async (mealId, date) => {
    try {
      const res = await axios.put(
        urls.MEAL_URL + '/' + mealId + '/move',
        { date: date }
      );

      if (res.data.status == 'successful') {
        if (res.data.hasPayload) {
          return res.data.payload
        }
      } else {
        throw new Error(res);
      }

    } catch(error) {
      throw new Error(error);
    }
  }
}