import koaRouter from 'koa-router'
import config from '../config'
import controller from '../controllers/articleCategory'

const api = 'category'
const router = new koaRouter()

router.prefix(`/${config.baseApi}/article/${api}`)

router.get('/', controller.show)
router.post('/create', controller.create)
router.post('/update', controller.update)
router.post('/delete', controller.deleteCategory)

export default router
