const show = async (ctx, next) => {
  ctx.response.body = {
    data: 'hello world'
  }
  await next()
}

export default {
  show,
}
