import axios from 'axios';

export const getFoodList = () => {
  return axios.get('../../static/json/food.json', {
    timeout: 2000
  }).then(res => {
    // console.log(res.data.data.food_spu_tags);
    return res.data.data;
  });
};
