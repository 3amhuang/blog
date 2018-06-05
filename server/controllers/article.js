import models from '../models'

const show = async (ctx, next) => {
  let articles = await models.Article.findAndCountAll({
    limit: 10
  })
  ctx.body = {
    status: 200,
    message: 'Success',
    data: articles
  }
  await next()
}

const create = async (ctx, next) => {
  console.log(ctx.request.body)
  await next()
}

const update = async (ctx, next) => {
  await next()
}

const deleteArticle = async (ctx, next) => {
  await next()
}

export default {
  show,
  create,
  update,
  deleteArticle
}
