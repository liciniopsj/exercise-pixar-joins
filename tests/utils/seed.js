const { readFileSync } = require("node:fs");
const path = require("node:path");
const { connection } = require("./mysql");

const restoreDump = () => {
  const sql = readFileSync(path.join(__dirname, '..', '..', 'database.sql'), 'utf-8');
  return connection.query(sql, { type: 'raw', logging: console.log });
}

const seedDatabase = async () => {
  try {
    await restoreDump();
  }
  catch (error) {
    console.log('Erro ao restaurar o dump!');
    console.log(error);
  }
}

module.exports = {
  seedDatabase, 
}