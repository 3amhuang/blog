import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize'
import config from '../config/database.js'

const basename = path.basename(module.filename)

let database = {}

const sequelize = new Sequelize({
  database: config.database,
  username: config.username,
  password: config.password,
  host: config.host,
  port: config.port,
  dialect: config.dialect,
  operatorsAliases: false,
  pool: config.pool
})

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0 && (file !== basename) && (file.slice(-3) === '.js'))
  })
  .forEach(file => {
    let model = sequelize.import(path.join(__dirname, file))
    database[model.name] = model
  })

export default database
