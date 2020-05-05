const knex = require('../knex')

module.exports = function captureForGoodMeasure(request, response) {
  const something = request.body.something

  return knex('last_recorded_something')
    .insert({ something })
    .then(() => response.status(200).end())
}
