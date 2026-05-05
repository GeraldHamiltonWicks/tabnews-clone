const PORT = "http://localhost:3000";

test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch(`${PORT}/api/v1/status`);
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();

  // Good way to check isDate
  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);
});
