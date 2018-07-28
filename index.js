const oauth = require('./api/oauth');
const athlete = require('./api/athlete');
const activities = require('./api/activities');

module.exports = class NodeStrava {
  constructor({ client_id, client_secret, redirect_uri }) {
    this.oauth = {
      url: () => oauth.url({ client_id, redirect_uri }),
      token: ({ code }) => oauth.token({ code, client_id, client_secret, redirect_uri }),
      deauthorize: ({ access_token }) => oauth.deauthorize({ access_token })
    }
    this.athlete = athlete;
    this.activities = activities;
  }
}
