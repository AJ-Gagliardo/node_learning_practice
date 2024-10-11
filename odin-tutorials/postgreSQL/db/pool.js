const { Pool } = require("pg");
require("dotenv").config();

const sqlUsername = process.env.DB_USER;
const sqlPass = process.env.DB_PASSWORD;
const sqlPort = process.env.PORT;
const sqlDB = process.env.DATABASE;

module.exports = new Pool({
  // host: "localhost", // or wherever the db is hosted
  // user: "<role_name>",
  // database: "top_users",
  // password: "<role_password>",
  // port: 5432, // The default port
  host: "localhost",
  user: sqlUsername,
  database: sqlDB,
  password: sqlPass,
  port: sqlPort,
});
