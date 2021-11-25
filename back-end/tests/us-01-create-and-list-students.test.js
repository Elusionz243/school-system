const request = require("supertest");

const app = require("../src/app");
const knex = require("../src/db/connection");

describe("US-01 - Create and list students", () => {
  beforeAll(() => {
    return knex.migrate
      .forceFreeMigrationsLock()
      .then(() => knex.migrate.rollback(null, true))
      .then(() => knex.migrate.latest());
  });

  beforeEach(() => {
    return knex.seed.run();
  });

  afterAll(async () => {
    return await knex.migrate.rollback(null, true).then(() => knex.destroy());
  });

  describe("App", () => {
    describe("Not found handler", () => {
      test("returns 404 for non-existent route", async () => {
        const response = await request(app)
          .get("/unknown")
          .set("Accept", "application/json");

          expect(response.status).toBe(404);
          expect(response.body.error).toBe("Path not found: /unknown");
      });
    });
  });

  describe("GET /students", () => {
    test("returns a list of all students in the database", async () => {
      const response = await request(app)
      .get("/students")
      .set("Accept", "application/json");

      expect(response.body.data).toHaveLength(1);
      expect(response.body.data[0].first_name).toBe("Patrica");
      expect(response.status).toBe(200);
    });
  });
});