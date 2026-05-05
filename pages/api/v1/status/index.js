import database from "infra/database.js";

export default async function status(request, response) {
  const updatedAt = new Date().toISOString();

  response.status(200).send({
    updated_at: updatedAt,
    // TODO: implement those entries and also add the unit tests for it
    postgres_version: null,
    max_db_connections: 0,
    db_connections_used: 0,
  });
}
