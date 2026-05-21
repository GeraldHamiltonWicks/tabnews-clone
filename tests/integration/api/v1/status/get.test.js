const PORT = "http://localhost:3000";

test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch(`${PORT}/api/v1/status`);
  expect(response.status).toBe(200);
});

test("GET to /api/v1/status should return updated_at", async () => {
  const response = await fetch(`${PORT}/api/v1/status`);

  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();

  // Good way to check isDate
  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);
});

test("GET to /api/v1/status should return database version", async () => {
  const response = await fetch(`${PORT}/api/v1/status`);

  const responseBody = await response.json();
  expect(responseBody.dependencies.database.version).toBeDefined();
});

test("GET to /api/v1/status should return max_db_connections", async () => {
  const response = await fetch(`${PORT}/api/v1/status`);

  const responseBody = await response.json();
  const max_db_connections = responseBody.dependencies.database.max_connections;
  expect(max_db_connections).toBeDefined();
  expect(max_db_connections).toBeGreaterThan(0);
});

test("GET to /api/v1/status should return db_connections_used", async () => {
  const response = await fetch(`${PORT}/api/v1/status`);

  const responseBody = await response.json();
  const max_db_connections = responseBody.dependencies.database.max_connections;

  expect(responseBody.db_connections_used).toBeDefined();
  expect(Number(responseBody.db_connections_used)).toBeLessThanOrEqual(
    Number(max_db_connections),
  );
});
