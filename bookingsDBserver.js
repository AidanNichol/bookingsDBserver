/* global PouchDB */
// export var PouchDB  = require('pouchdb-browser');

var PouchDB = require('pouchdb-core').plugin(require('pouchdb-adapter-http'));

PouchDB.plugin(require('pouchdb-authentication'));
var db;
const settings = require('StEdsSettings');
const Logit = require('logit');
var logit = Logit(__filename);
console.log('logit enabled 2:', logit, logit.enabled);
console.log('PouchDB creating', PouchDB);


const remoteCouch = settings.get('bookings.remote.production');
console.log('DbSettings', remoteCouch);

db = new PouchDB(remoteCouch, {});

// sync();
console.log('PouchDB created', db);
db.info().then(function (info) {
  console.log('Bookings Info', info);
});

module.exports = db;