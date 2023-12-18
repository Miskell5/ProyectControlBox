const {response} = require("express");
const {Pool} = require("pg");

// Conexión a la base de datos
const pool = new Pool({
  user: "postgres",
  password: "Nicolas200412",
  database: "sql_literary_threads",
  host: "localhost",
  port: 5432,
});

module.exports = pool;