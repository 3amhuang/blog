import models from './models/articles'

const show = async (ctx, next) => {
}

const create = async (ctx, next) => {
  await next()
}

const update = async (ctx, next) => {
  await next()
}

const delete = async (ctx, next) => {
  await next()
}

export default {
  show,
  create,
  update,
  delete
}
