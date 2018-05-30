import path from 'path'
import koa from 'koa'
import router from './routes'
import logger from 'koa-logger'
import bodyParser from 'koa-bodyParser'
import serve from 'koa-static'

const app = new koa()

const publicPath = path.resolve(__dirname, '../public')

app
  .use(serve(publicPath))
  .use(logger())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(bodyParser())

app.use(async (ctx) => {
})

app.listen(3000, () => {
  console.info('Server Running at port 3000.')
})
