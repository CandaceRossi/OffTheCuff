// Update with your config settings.
require('dotenv').config({path: './.env'});
// require("dotenv").config();
// const mysql = require('mysql2');


module.exports = {
  development: {
    client: "mysql2",
    useNullAsDefault: true,
    connection: {
      host: process.env.DB_DEV_HOST,
      port: process.env.DB_DEV_PORT,
      user: process.env.DB_DEV_USER,
      password: process.env.DB_DEV_PASSWORD,
      database: process.env.DB_DEV_DATABASE,
      // multipleStatements: true
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
  // ,
  // production: {
  //   client: "mysql2",
  //   connection: process.env.DATABASE_URL,
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: "knex_migrations",
  //     directory: "./data/migrations"
  //   },
  //   seeds: {
  //     directory: "./data/seeds"
  //   }
  // },
  // testing: {
  //   client: mysql,
  //   connection: {
  //     database: process.env.DB_TESTING_DATABASE,
  //     user: process.env.DB_DEV_USER,
  //     password: process.env.DB_DEV_PASSWORD
  //   },
  //   useNullAsDefault: true,
  //   migrations: {
  //     directory: "./data/migrations"
  //   },
  //   seeds: {
  //     directory: "./data/seeds"
  //   }
  // }
};
