const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Abhi123s9354s@",
  host: "localhost",
  port: 5432,
  database: "tododb"
});

module.exports = pool;