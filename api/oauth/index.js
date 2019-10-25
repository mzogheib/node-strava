const querystring = require('querystring');
const http = require('../../http');
const { baseOauthUrl } = require('../config');

const url = ({ client_id, redirect_uri }) => {
  const params = { client_id, redirect_uri, response_type: 'code', scope: 'read,read_all,activity:read_all' };
  return `${baseOauthUrl}/authorize?${querystring.stringify(params)}`;
}

const token = ({ code, client_id, client_secret }) => {
  const data = { code, client_id, client_secret, grant_type: 'authorization_code' };
  return http.post({ baseUrl: baseOauthUrl, url: '/token', data });
}

const deauthorize = ({ access_token }) => {
  const data = { access_token };
  return http.post({ baseUrl: baseOauthUrl, url: '/deauthorize', data });
}

const refresh = ({ refresh_token, client_id, client_secret }) => {
  const data = { refresh_token, client_id, client_secret, grant_type: 'refresh_token' };
  return http.post({ baseUrl: baseOauthUrl, url: '/token', data });
}

module.exports = {
  url,
  token,
  deauthorize,
  refresh,
};
