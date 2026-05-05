import database from "infra/database.js";

export default async function status(request, response) {
  const updatedAt = new Date().toISOString();
  const postgresVersionQuery = await database.query("SELECT version();");
  const maxDbConnectionsQuery = await database.query("SHOW max_connections;");
  const dbConnextionsUsed = await database.query(
    "SELECT count(*) FROM pg_stat_activity;",
  );

  response.status(200).send({
    updated_at: updatedAt,
    postgres_version: postgresVersionQuery.rows?.[0]?.version,
    max_db_connections: maxDbConnectionsQuery?.rows?.[0]?.max_connections,
    db_connections_used: dbConnextionsUsed.rows?.[0]?.count,
  });
}
