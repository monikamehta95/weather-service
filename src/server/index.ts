require('dotenv').config();

import { Server } from 'https';
const logger = require('./logger');
import { startServer } from './config/app';
import { vars } from './config/vars';
import connectDb from './connect';

  const connect = async () => {
    startServer((server: Server) => {
      const db = String(vars.dbConnectionUrl)
      connectDb({db});
    
      process.on('SIGINT', () => {
        server.close(() => {
          logger.info('Finished all requests');
        });
      });
    });
  }

  connect()
