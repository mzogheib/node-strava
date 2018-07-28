const http = require('../../../http');
const { baseApiUrl } = require('../../config');

module.exports = {
  list: ({ after, before, per_page, access_token }) => http.get({ baseUrl: baseApiUrl, url: '/athlete/activities', headers: { Authorization: `Bearer ${access_token}` }, params: { after, before, per_page } })
}
