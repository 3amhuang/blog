import koaRouter from 'koa-router'
import controller from '../controllers/auth'

const router = new koaRouter()
router.prefix('/auth')

router.post('/login', controller.login)

export default router
