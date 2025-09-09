const {Pool} = require('pg');

const pool = new Pool ({
  user: 'medido',
  host: 'localhost',
  database: 'inventoryappDB',
  password: '2580',
  port: 5432,
})

module.exports = pool;
