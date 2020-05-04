
exports.up = function(knex) {
  return knex.schema.createTable('last_recorded_something', function(table) {
    table.increments()
    table.string('something')
    table.timestamps()
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('last_recorded_something')
}
