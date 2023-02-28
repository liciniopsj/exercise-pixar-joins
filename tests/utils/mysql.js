const { createPool } = require('mysql2/promise');

const {
  MYSQL_USER = 'root',
  MYSQL_PASSWORD = 'password',
  MYSQL_HOSTNAME = 'localhost',
  MYSQL_PORT = 3306
} = process.env;

const connectionConfig = {
  host: MYSQL_HOSTNAME,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  port: +MYSQL_PORT,
  multipleStatements: true,
  database: 'pixar',
}

const connection = createPool(connectionConfig);

module.exports = {
  connection,
}