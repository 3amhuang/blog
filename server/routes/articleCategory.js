import koaRouter from 'koa-router'
import config from '../config'
import controller from '../controllers/articleCategory'

const api = 'category'
const router = new koaRouter()

router.prefix(`/${config.baseApi}/${api}`)

router.get('/', controller.find)
router.post('/create', controller.create)
router.post('/update', controller.update)
router.post('/delete', controller.delete)

export default router
