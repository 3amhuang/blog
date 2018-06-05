import models from '../models'
import { success, badRequest, serverError } from '../utils'
import Sequelize from 'sequelize'

const Op = Sequelize.Op

const show = async (ctx, next) => {
  try {
    const categories = await models.ArticleCategory.findAll({
    }, {where: {deletedAt: {[Op.ne]: null}}})
    ctx.body = {
      status: 200,
      message: 'success',
      data: categories
    }
  } catch (error) {
    ctx.body = badRequest(error.message)
  }
  await next()
}

const create = async (ctx, next) => {
  const data = ctx.request.body
  try {
    const isExist = await checkExist(data.name, models.ArticleCategory)
    if (isExist) { ctx.body = isExist; return}
    const result = await createCategory(data, models.ArticleCategory)
    ctx.body = success()
  } catch(error) {
    ctx.body = badRequest(error.message)
  }
  await next()
}

const update = async (ctx, next) => {
  const data = ctx.request.body
  try {
    const isExist = await checkExist(data.name, models.ArticleCategory)
    if (isExist) { ctx.body = isExist; return}
    const result = await updateCategory(data, models.ArticleCategory)
    if (result) ctx.body = success()
    else { ctx.body = badRequest() }
  } catch (error) {
    ctx.body = badRequest(error.message)
  }
  await next()
}

const deleteCategory = async (ctx, next) => {
  const id = ctx.request.body.id
  try {
    const isExist = await models.ArticleCategory.findById(id)
    if (!isExist) { ctx.body = badRequest(`id: ${id} does not exist`);return }
    const result = await models.ArticleCategory.destroy({where: {id,}})
    ctx.body = success()
  } catch (error) {
    ctx.body = badRequest(error.message)
  }
  await next()
}

const isCategoryExist = async (name, model) => {
  if (!name) return
  const result = await model.find({
    where: { name: name }
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
  }, {
    where: {
      id: data.id
    }
  })
  return result
}

const checkExist = async (name, model) => {
  const isExist = await isCategoryExist(name, model)
  if (isExist) return badRequest(`name: ${name} is already exists`)
  else return false
}

export default {
  show,
  create,
  update,
  deleteCategory
}
