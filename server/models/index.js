import Sequelize from 'sequelize'
import config from '../config/database.js'

const database = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  operatorsAliases: false,
  pool: config.pool
})

export default database
