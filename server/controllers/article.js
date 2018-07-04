import models from '../models'
import { returnList, success, badRequest, serverError } from '../utils'
import Sequelize from 'sequelize'

const Op = Sequelize.Op

class ArticleController {
  /*
   *  Find article filtered by query string
   *  @param {ctx} Koa HTTP Context
   * */
  async find (ctx) {
    try {
      const query = ctx.request.query
      const page = query.page ? query.page : 0
      const size = query.size ? query.size : 10
      const articles = await models.Article.findAndCountAll({
        limit: size,
        offset: page,
        where: query,
        include: [
          {model: models.ArticleCategory,as: 'category'},
          {model: models.User,as: 'author'}
        ]
      })
      ctx.body = returnList(articles)
    } catch (error) {
      ctx.body = badRequest(error.name)
    }
  }

  /*
   *  Return all the articles
   *  @param {ctx} Koa HTTP Context
   * */
  async all (ctx) {
    try {
      const articles = await models.Article.findAll({
        include: [
          {model: models.ArticleCategory,as: 'category'},
          {model: models.User,as: 'author'}
        ]
      })
      ctx.body = returnList(articles)
    } catch (error) {
      ctx.body = badRequest(error.name)
    }
  }

  /*
   *  Find article by id
   *  @param {ctx} Koa HTTP Context
   * */
  async findById (ctx) {
    try {
      const id = ctx.params.id
      const article = await models.Article.findById(id)
      if (!article) { ctx.body = badRequest(`article id: ${id} does not exist`); return }
      const author = await models.User.findById(article.authorId)
      const category = await models.ArticleCategory.findById(article.categoryId)
      const data = { article, author: author, category: category.name }
      ctx.body = { status: 200, data: data }
    } catch (error) {
      ctx.body = badRequest(error.name)
    }
  }

  /*
   *  Create an article
   *  @param {ctx} Koa HTTP Context
   * */
  async create (ctx) {
    const body = ctx.request.body
    const data = {
      title: body.title,
      authorId: body.authorId,
      categoryId: body.categoryId,
      content: body.content,
      summary: body.summary,
      isPublic: body.isPublic,
      isSticky: body.isSticky
    }
    try {
      const result = await models.Article.create(data)
      ctx.body = success()
    } catch (error) {
      ctx.body = badRequest(error.name)
    }
  }

  /*
   *  Update an article
   *  @param {ctx} Koa HTTP Context
   * */
  async update (ctx) {
    try {
      const data = ctx.request.body
      const isExist = await checkExistence(data.id, models.Article)
      if (!isExist) { ctx.body = badRequest(); return }
      const result = await updateArticle(data, models.Article)
      ctx.body = success()
    } catch(error) {
      ctx.body = badRequest(error.name)
    }
  }

  /*
   *  Delete an article
   *  @param {ctx} Koa HTTP Context
   * */
  async delete (ctx) {
    try {
      const id = ctx.request.body.id
      const isExist = await checkExistence(id, models.Article)
      if (!isExist) ctx.throw(400)
      const result = await models.Article.destroy({where: {id,}})
      ctx.body = success()
    } catch(error) {
      ctx.body = badRequest(error.name)
    }
  }
}

const updateArticle = async (data, model) => {
  const article = {
    title: data.title,
    author: data.author,
    categoryId: data.categoryId,
    content: data.content,
    summary: data.summary,
    isPublic: data.isPublic,
    isSticky: data.isSticky
  }
  const result = await model.update(article, {where: {id: data.id}})
  return result
}

const checkExistence = async (id, model) => {
  const result = await model.findById(id)
  return result !== null
}

export default new ArticleController
