const students = require("./00-students.json");

exports.seed = function (knex) {
  return knex('students').del()
    .then(function () {
      return knex('students').insert(students);
    });
};
