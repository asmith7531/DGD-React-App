module.exports = {
    "development": {
      "username":process.env.username,
      "password": process.env.password,
      "database": process.env.database,
      "host": process.env.host,
      "dialect": process.env.dialect
    },
    "test": {
      "username":process.env.username,
      "password": process.env.password,
      "database": process.env.database,
      "host": process.env.host,
      "dialect": process.env.dialect
    },
    "production": {
      "username":process.env.username,
      "password": process.env.password,
      "database": process.env.database,
      "host": process.env.host,
      "dialect": process.env.dialect
    }
}