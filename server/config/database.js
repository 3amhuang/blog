export default {
  host: 'localhost',
  port: '3306',
  username: 'root',
  password: null,
  dialect: 'mysql',
  database: 'blog',
  define: {
    underscored: true,
    charset: 'utf8',
    timestamps: true
  },
  pool: {
    min: 0,
    max: 5,
    acquire: 30000,
    idle: 10000
  }
}
