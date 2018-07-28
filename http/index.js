const axios = require('axios');
const querystring = require('querystring');

const get = ({ baseUrl, url, headers, params }) => new Promise((resolve, reject) => {
  const config = {
    method: 'GET',
    baseURL: baseUrl,
    url,
    headers,
    params
  };
  axios.request(config)
    .then(response => resolve(response.data))
    .catch(error => reject({ status: error.response.status, message: error.response.data.message }));
});

const post = ({ baseUrl, url, auth, headers, data }) => new Promise((resolve, reject) => {
  const config = {
    method: 'POST',
    baseURL: baseUrl,
    url,
    auth,
    headers,
    data: querystring.stringify(data)
  };
  axios.request(config)
    .then(response => resolve(response.data))
    .catch(error => reject({ status: error.response.status, message: error.response.message }));
});

module.exports = {
  get,
  post
}
