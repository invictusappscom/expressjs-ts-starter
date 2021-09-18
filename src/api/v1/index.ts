import { Router } from 'express';
import { StatusController } from './controllers/status.controller'
import { TestController } from './controllers/test.controller';
import PostTestValidator from './validators/test.validator';


const v1 = Router();

v1.get('/status', StatusController.status);
v1.post('/test',
    PostTestValidator.validatePostTestSchema(),
    TestController.testPost);


export default v1;
