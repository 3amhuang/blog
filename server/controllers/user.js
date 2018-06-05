import models from '../models'

const show = async (ctx, next) => {
  const user = await models.User.findById(1)
  ctx.response.body = {
    data: user
  }
  await next()
}

export default {
  show,
}
