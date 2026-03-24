import database from "infra/database.js";

export default async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result.rows);
  console.log("[test] database: ", database);
  response.status(200).send({ chave: "valor" });
}
