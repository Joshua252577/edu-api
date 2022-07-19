module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: 'development.sqlite3'
    },
    pool: {
      afterCreate: function(connection, cb) {
        connection.run('PRAGMA foreign_keys = ON', cb);
      }
    },
    migrations: {
      directory: __dirname + '/src/databases/migrations'
    }
  }
}