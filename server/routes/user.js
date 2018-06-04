import koaRouter from 'koa-router'
import user from '../controllers/user'
import config from '../config'

const api = 'user'
const router = new koaRouter()

router.prefix(`/${config.baseApi}/${api}`)

router.get('/', user.show)

export default router
