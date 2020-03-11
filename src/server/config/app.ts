import express = require('express');
import helmet from 'helmet'; // Security
import compression from 'compression'; // compresses requests
import bodyParser from 'body-parser';
import httpStatusCodes from 'http-status-codes';
import { router } from '../route';
import { vars } from './vars';
const logger = require('../logger');
import http from 'http'

// Create a new express application instance
const app: express.Application = express();
const className = '[App]';

app.use(helmet());
app.use(compression());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(vars.appContext, router);

// Enable Cross Origin Resource Sharing
app.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    res.status(httpStatusCodes.OK).end();
  } else {
    next();
  }
});

export const startServer = (cb: Function, port?: number) => {
  let server = null;
  const methodName = '[startServer]';
  logger.info(`${className} - ${methodName} start`);

    server = http.createServer(app);
  // start express server
  port = port ? port : Number(vars.port);
  server = (server || app).listen(port, () => {
    logger.info(`Listening on port  ${vars.port}!`);
  });
  cb(server);
};
