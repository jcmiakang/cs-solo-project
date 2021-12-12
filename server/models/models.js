// MODEL FOR CONNECTING TO POSGRESQL DATABASE

const { Pool } = require('pg');

const PG_URI =
  'postgres://vqvrjqar:Q4y1WH2FbvLRK8YZdqjzFV-k1xq_8NQW@castor.db.elephantsql.com/vqvrjqar';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
