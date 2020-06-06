const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  username: process.env.SQL_USERNAME,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DATABASE,
  host: process.env.SQL_HOST,
  dialect: process.env.SQL_DIALECT,
  operatorsAliases: false,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
}
