import koaRouter from 'koa-router'
import controller from '../controllers/user'
import config from '../config'

const api = 'user'
const router = new koaRouter()

router.prefix(`/${config.baseApi}/${api}`)

router.get('/', controller.find)

export default router
