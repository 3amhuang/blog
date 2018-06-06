import koaRouter from 'koa-router'
import { login } from '../controllers/auth.js'

const router = new koaRouter({
  prefix: '/'
})

router.post('login', login)

export default router
