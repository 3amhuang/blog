import koaRouter from 'koa-router'
import userRouter from './user'
import basicRouter from './basic'

const router = new koaRouter()

const routers = [
  basicRouter,
  userRouter,
]

routers.forEach(route => {
  router.use(route.routes(), route.allowedMethods())
})

export default router
