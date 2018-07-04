import models from '../models'
import { success, failed, badRequest } from '../utils'
import Sequelize from 'sequelize'

class AuthController {
  /*
   *  Login
   *  @param {ctx} Koa HTTP Context
   * */
  async login (ctx) {
    try {
      const body = ctx.request.body
      const username = body.username
      const password = body.password
      const user = await models.User.findOne({
        where: {name: username, password: password}
      })
      if (!user) ctx.body = failed()
      ctx.body = success()
    } catch (error) {
      ctx.body = badRequest(error.name)
    }
  }
}

export default new AuthController
