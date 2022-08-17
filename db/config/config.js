// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.POSTGRESS_USER,
    password: process.env.POSTGRESS_PASSWORD,
    database: process.env.POSTGRESS_DB,
    host: process.env.POSTGRESS_HOST,
    dialect: 'postgres',
  },
  test: {
    username: process.env.POSTGRESS_USER,
    password: process.env.POSTGRESS_PASSWORD,
    database: process.env.POSTGRESS_DB,
    host: process.env.POSTGRESS_HOST,
    dialect: 'postgres',
  },
  production: {
    username: process.env.POSTGRESS_USER,
    password: process.env.POSTGRESS_PASSWORD,
    database: process.env.POSTGRESS_DB,
    host: process.env.POSTGRESS_HOST,
    dialect: 'postgres',
  },
};
