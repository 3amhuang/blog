import koaRouter from 'koa-router'
import config from '../config'
import articleController from '../controllers/article'

const api = 'article'
const router = new koaRouter()

router.prefix(`/${config.baseApi}/${api}`)

router.get('/', articleController.find)
router.get('/:id', articleController.findById)
router.get('/all', articleController.all)
router.post('/create', articleController.create)
router.post('/update', articleController.update)
router.post('/delete', articleController.delete)

export default router
