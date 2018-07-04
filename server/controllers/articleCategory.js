import models from '../models'
import { returnList, success, badRequest, serverError } from '../utils'
import Sequelize from 'sequelize'

const Op = Sequelize.Op

class ArticleCategoryController {
  /*
   *  Find article category filterd by query string
   *  @param {ctx} Koa HTTP Context
   * */
  async find (ctx) {
    try {
      const query = ctx.request.query
      const page = query.page ? query.page : 0
      const size = query.size ? query.size : 10
      const categories = await models.ArticleCategory.findAndCountAll(
        {limit: size, offset: page, where: query })
      ctx.body = returnList(categories)
    } catch (error) {
      ctx.body = badRequest(error.message)
    }
  }

  /*
   *  Create an article category
   *  @param {ctx} Koa HTTP Context
   * */
  async create (ctx) {
    try {
      const data = ctx.request.body
      const isExist = await checkExistence(data.name, models.ArticleCategory)
      if (isExist) { ctx.body = isExist; return}
      const result = await createCategory(data, models.ArticleCategory)
      ctx.body = success()
    } catch(error) {
      ctx.body = badRequest(error.message)
    }
  }

  /*
   *  update an article category
   *  @param {ctx} Koa HTTP Context
   * */
  async update (ctx) {
    try {
      const data = ctx.request.body
      const isExist = await checkExistence(data.name, models.ArticleCategory)
      if (isExist) { ctx.body = isExist; return}
      const result = await updateCategory(data, models.ArticleCategory)
      if (result) ctx.body = success()
      else { ctx.body = badRequest() }
    } catch (error) {
      ctx.body = badRequest(error.message)
    }
  }

  /*
   *  delete an article category
   *  @param {ctx} Koa HTTP Context
   * */
  async delete (ctx) {
    try {
      const id = ctx.request.body.id
      const isExist = await models.ArticleCategory.findById(id)
      if (!isExist) { ctx.body = badRequest(`id: ${id} does not exist`);return }
      const result = await models.ArticleCategory.destroy({where: {id,}})
      ctx.body = success()
    } catch (error) {
      ctx.body = badRequest(error.message)
    }
  }
}

const isCategoryExist = async (name, model) => {
  if (!name) return false
  const result = await model.find({
    where: { name, }
  })
  return result !== null
}

const createCategory = async (data, model) => {
  const result = await model.create({
    name: data.name,
    categoryDesc: data.categoryDesc
  })
  return result
}

const updateCategory = async (data, model) => {
  if (!data.id || !data.name) return null
  const result = await model.update({
    name: data.name,
    categoryDesc: data.categoryDesc
  }, {where: {id: data.id}})
  return result
}

const checkExistence = async (name, model) => {
  const isExist = await isCategoryExist(name, model)
  if (isExist) return badRequest(`name: ${name} is already exists`)
  else return false
}

export default new ArticleCategoryController()
