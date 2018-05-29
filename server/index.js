import koa from 'koa'
import koaRouter from 'koa-router'
import logger from 'koa-logger'
import bodyParser from 'koa-bodyParser'

const app = new koa()
const router = new koaRouter()

router.get('/', (ctx, next) => {
  ctx.body = 'hello world'
})

app
  .use(logger())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(bodyParser())

app.use(async ctx => {
  ctx.body = 'hello world'
})

app.listen(3000, () => {
  console.info('Server Running at port 3000.')
})
