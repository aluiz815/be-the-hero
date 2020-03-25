const knex = require('knex')
require('dotenv/config')
const env = process.env.NODE_ENV || 'development'
const configuration = require('../../knexfile')[env]
const connection = knex(configuration)
module.exports = connection