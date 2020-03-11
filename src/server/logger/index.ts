'use strict';

// Require modules
const path = require('path');
const winston = require('winston');
require('winston-daily-rotate-file');
const vars = require('../config/vars');
const logDirectory = path.join(__dirname, '/logs/winston');

const transports = [];

const consoleLog = new winston.transports.Console({
  name: 'debug-console',
  level: vars.logLevel,
  timestamp: true,
  prettyPrint(object: object) {
    return JSON.stringify(object);
  },
  handleExceptions: false,
  json: false,
  colorize: true,
});
transports.push(consoleLog);

const fileLog = new winston.transports.DailyRotateFile({
  level: vars.logLevel,
  filename: `${logDirectory}/%DATE%.log`,
  datePattern: 'YYYY-MM-DD',
  timestamp: true,
  handleExceptions: true,
  zippedArchive: true,
  colorized: true,
  prettyPrint(object: object) {
    return JSON.stringify(object);
  },
});

transports.push(fileLog);

// eslint-disable-next-line new-cap
const logger = new winston.createLogger({
  transports,
  exitOnError: false,
});

module.exports = logger;
