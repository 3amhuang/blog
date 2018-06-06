import koaRouter from 'koa-router'
import authRouter from './auth'
import userRouter from './user'
import articleRouter from './article'
import articleCategoryRouter from './articleCategory'

const router = new koaRouter()

const routers = [
  authRouter,
  articleRouter,
  articleCategoryRouter,
  userRouter
]

routers.forEach(route => {
  router.use(route.routes(), route.allowedMethods())
})

export default router
