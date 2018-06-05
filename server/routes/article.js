import koaRouter from 'koa-router'
import config from '../config'
import controller from '../controllers/article'

const api = 'article'
const router = new koaRouter()

router.prefix(`/${config.baseApi}/${api}`)

router.get('/', controller.show)
router.post('/create', controller.create)
router.post('/update', controller.update)
router.post('/delete', controller.deleteArticle)

export default router
