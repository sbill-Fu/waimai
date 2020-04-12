import axios from 'axios';

export const getContentList = () => {
  return axios.get('../../static/json/homelist.json', {
    timeout: 2000
  }).then(res => {
    return res.data.data.poilist;
  });
};
