const { Client } = require('pg');

require('dotenv').config();

const client = new Client({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

client.connect().then(console.log('Database connection established')).catch(console.log);

exports.query = async (query) => {
  const { rows } = await client.query(query);

  return rows;
};
