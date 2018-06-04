import path from 'path'
import koa from 'koa'
import router from './routes'
import logger from 'koa-logger'
import bodyParser from 'koa-bodyParser'
import serve from 'koa-static'
import helmet from 'koa-helmet'
import { handleErrors } from './middlewares'

const app = new koa()

const publicPath = path.resolve(__dirname, '../public')

app
  .use(serve(publicPath))
  .use(logger())
  .use(handleErrors)
  .use(bodyParser())
  .use(helmet())
  .use(router.routes())
  .use(router.allowedMethods())

app.use(async (ctx) => {
})

app.listen(3000, () => {
  console.info('✅  The server is running at http://localhost:3000/')
})
