// Update with your config settings.
require('dotenv').config({path: '../.env'});
// require("dotenv").config();
const mysql = require('mysql');
// {
//       host: 'localhost',
//  database: './data/off-the-cuff.sql',
//       user: 'root',
//       password: 'Futurewinning1$',
//       port: 3306
//     },

module.exports = {
  development: {
    client: mysql,
    useNullAsDefault: true,
    connection: {
      host: '127.0.01',
      port: 3306,
      user: 'root',
      password: 'Futurewinning1$',
      database: 'off-the-cuff'
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },
  production: {
    client: mysql,
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },
  testing: {
    client: mysql,
    connection: {
      database: process.env.DB_TESTING_DATABASE,
      user: process.env.DB_DEV_USER,
      password: process.env.DB_DEV_PASSWORD
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};
