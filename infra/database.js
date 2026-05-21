import { Client } from "pg";

// Todo: Checar informaçãoes que podem estar sendo vazadar
// ler documentação do node-postgres
async function query(queryObject) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD, //"zqFcRjyQBvTbNCtn",
  });
  await client.connect();

  const result = await client.query(queryObject);
  client.end();
  return result;
}

export default {
  query,
};
