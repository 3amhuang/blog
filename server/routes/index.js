import koaRouter from 'koa-router'

const base = 'api'
const router = new koaRouter()

router.prefix(`/${base}`)

router.get('/data', (ctx, next) => {
  ctx.type = 'application/json'
  ctx.response.body = {
    data: 'hello world'
  }
})

export default router
