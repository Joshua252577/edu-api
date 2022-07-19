const env = process.env.ENVIRONMENT || 'development';

const config = require('../../knexfile')[env];

const knex = require('knex')(config);

module.exports = knex;