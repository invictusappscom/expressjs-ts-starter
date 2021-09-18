import { Router } from 'express'
import { CardanoRoute } from './routes/cardano.route'
import { StatusRoute } from './routes/status.route'
import { TestRoute } from './routes/test.route'
import PostTestValidator from './validators/test.validator'


const v1 = Router()

v1.get('/status', StatusRoute.status)
v1.post('/test',
    PostTestValidator.validatePostTestSchema(),
    TestRoute.testPost)

v1.get('/cardano/query/tip', CardanoRoute.mint)


export default v1
