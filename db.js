const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();
const mysqlPool = mysql
  .createPool({
    host: process.env.MY_SQL_HOST,
    user: process.env.MY_SQL_USER,
    password: process.env.MY_SQL_PASSWORD,
    database: process.env.MY_SQL_DB,
  })
  .promise();
console.log(process.env.MY_SQL_PASSWORD);

module.exports = mysqlPool;
