import axios from 'axios';

export const getCategory = () => {
  return axios.get('../../static/json/head.json', {
    timeout: 2000
  }).then(res => {
    // console.log(res.data.data.primary_filter);
    return res.data.data.primary_filter;
  });
  // 不想使用返回 Promise 的方式，直接返回不是更直接吗？
  // .then(data => {
  //   return new Promise(resolve => {
  //     resolve(data);
  //     console.log('data: ', data);
  //   });
  // );
};
