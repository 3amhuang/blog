export default {
  host: '',
  port: '',
  username: '',
  password: '',
  dialect: 'mysql',
  database: 'blog',
  pool: {
    min: 0,
    max: 5,
    acquire: 30000,
    idle: 10000
  }
}
