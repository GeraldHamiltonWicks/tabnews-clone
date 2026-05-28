import database from "infra/database.js";

export default async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const databaseVersionResult = await database.query("SELECT version();");
  const maxDbConnectionsQuery = await database.query("SHOW max_connections;");

  const databaseName = process.env.POSTGRES_DB;

  const databaseOpenedConnectionsQuery = await database.query({
    text: "SELECT count(*) FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });

  response.status(200).send({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: databaseVersionResult.rows?.[0]?.version,
        max_connections: Number(
          maxDbConnectionsQuery?.rows?.[0]?.max_connections,
        ),
        opened_connections: Number(
          databaseOpenedConnectionsQuery?.rows?.[0]?.count,
        ),
      },
    },
  });
}
