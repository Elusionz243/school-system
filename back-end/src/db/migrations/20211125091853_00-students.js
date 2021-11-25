exports.up = function(knex) {
  return knex.schema.createTable("students", (table) => {
    table.increments("student_id").primary();
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("city").notNullable();
    table.string("state").notNullable();
    table.string("address").notNullable();
    table.integer("grade").notNullable();
    table.specificType("grades", "integer ARRAY");
    table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("students");
};
