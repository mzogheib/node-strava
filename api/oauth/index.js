const querystring = require('querystring');
const http = require('../../http');
const { baseOauthUrl } = require('../config');

const url = ({ client_id, redirect_uri }) => {
  const params = { client_id, redirect_uri, response_type: 'code', scope: 'view_private' };
  return `${baseOauthUrl}/authorize?${querystring.stringify(params)}`;
}

const token = ({ code, client_id, client_secret }) => {
  const data = { code, client_id, client_secret };
  return http.post({ baseUrl: baseOauthUrl, url: '/token', data });
}

const deauthorize = ({ access_token }) => {
  const data = { access_token };
  return http.post({ baseUrl: baseOauthUrl, url: '/deauthorize', data });
}

module.exports = {
  url,
  token,
  deauthorize
};
