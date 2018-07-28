const http = require('../../http');
const { baseApiUrl } = require('../config');

module.exports = {
  get: ({ id, access_token }) => http.get({ baseUrl: baseApiUrl, url: `/activities/${id}`, headers: { Authorization: `Bearer ${access_token}` }})
}
