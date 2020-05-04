// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'mysql',
    connection: {
      host:     process.env.DB_HOST,
      database: process.env.DB_NAME,
      user:     process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: process.env.CLEARDB_DATABASE_URL,
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
