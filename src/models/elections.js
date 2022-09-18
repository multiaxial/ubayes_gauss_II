const db = require('../config/db_config');

function get_all() {
  return db('elections');
}

function insert(election) {
  return db('elections')
    .insert(election);
}

module.exports = {
  get_all,
  insert
};
