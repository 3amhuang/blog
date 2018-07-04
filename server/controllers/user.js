import models from '../models'
import { returnList, success, badRequest, serverError } from '../utils'
import Sequelize from 'sequelize'

const Op = Sequelize.Op

class UserController {
  async find (ctx) {
    try {
      const query = ctx.request.query
    } catch (error) {
      ctx.body = badRequest(error.name)
    }
  }

  async all (ctx) {
  }

  async findById (ctx) {
  }

  async create (ctx) {
  }

  async update (ctx) {
  }

  async delete (ctx) {
  }
}

const checkExistence = async (id, model) => {
}

export default new UserController()
