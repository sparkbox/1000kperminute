const environment = process.env.APP_ENV || 'development'
const config = require('./knexfile.js')[environment]

module.exports = require('knex')(config)
