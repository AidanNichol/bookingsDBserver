/* global PouchDB */
// export var PouchDB  = require('pouchdb-browser');

var PouchDB = require('pouchdb-core').plugin(require('pouchdb-adapter-http'));

PouchDB.plugin(require('pouchdb-authentication'));
var db;
const {
  getSettings,
  setSettings,
  DbSettings,
  mode
} = require('StEdsSettings');
const Logit = require('logit');
var logit = Logit(__filename);

logit('PouchDB creating', PouchDB);

logit('DbSettings', mode, DbSettings);

const remoteCouch = `http://${DbSettings.remotehost}:5984/${DbSettings.remotename}`;
db = new PouchDB(remoteCouch, {});

// sync();
logit('PouchDB created', db);
db.info().then(function (info) {
  logit('Bookings Info', info);
});

module.exports = db;