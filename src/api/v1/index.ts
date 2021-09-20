import { Router } from 'express'
import { StatusRoute } from './routes/status.route'
import { TestRoute } from './routes/test.route'
import PostTestValidator from './validators/test.validator'


const v1 = Router()

v1.get('/status', StatusRoute.status)
v1.post('/test',
    PostTestValidator.validatePostTestSchema(),
    TestRoute.testPost)

export default v1
