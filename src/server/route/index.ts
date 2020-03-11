import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger';

import { vars } from '../config/vars';

export const router = express.Router();

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


import('./' + vars.appVersion + '/weather.router').then(route =>
  router.use('', route.weatherRoutes)
);
