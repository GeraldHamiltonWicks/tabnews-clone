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

  try {
    const result = await client.query(queryObject);
    return result;
  } catch (error) {
    console.error("[database.js]: ", error);
  } finally {
    await client.end();
  }
}

export default {
  query,
};
