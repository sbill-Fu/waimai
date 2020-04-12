import axios from 'axios';

export const getOrderList = () => {
  return axios.get('../../static/json/orders.json', {
    timeout: 2000
  }).then(res => {
    console.log(res.data.data.digestlist);
    return res.data.data.digestlist;
  });
};
