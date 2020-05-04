const knex = require('../knex')

module.exports = function captureForGoodMeasure(request, response) {
  const something = request.body.something

  knex('last_recorded_something').insert({ something })

  response.status(200).end()
}
