const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'edgeapp',
    user: process.env.DB_USER || 'edgeapp',
    password: process.env.DB_PASS || 'edgeapp',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './edgeapp.sqlite',
      operatorsAliases: Op
    }
  }
};
