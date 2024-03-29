import Koa from 'koa';
import Router from '@koa/router';
import HealthController from './controller/HealthController';
import UerController from './controller/UserController';

const swaggerUi = require('swagger-ui-koa');
import swaggerSpec from '../lib/swagger';

export default async (app: Koa) => {
    const router = new Router();

    router.get('/health', HealthController.ok);
    router.post('/user', UerController.user);
    router.get('/swagger', swaggerUi.setup(swaggerSpec));

    app.use(router.routes());
    app.use(router.allowedMethods());
}
