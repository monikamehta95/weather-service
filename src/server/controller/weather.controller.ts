import { NextFunction, Request, Response } from 'express';
import httpStatusCodes from 'http-status-codes';
import { WeatherService } from '../service/weather.service';
const logger = require('../logger');
import { Utils } from '../utility/utils';
const CONTROLLER_CONS = 'SR_CWEATHER_' 
import { MsgConstants } from '../utility/msg-constants';

export class WeatherController {
  static createInstance() {
    return new WeatherController();
  }
  async getWeatherDetail(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
    const weatherService = await WeatherService.createInstance();
    const result = await weatherService.getWeatherDetail(request.url);
    if (result['status_code'] !== undefined) {
      response.status(Utils.getStatusCode(result['status_code'])).json(result)
    } else {
      response.status(httpStatusCodes.OK).json(Utils.responseGenerators(result, CONTROLLER_CONS + MsgConstants.CODE_SERVER_OK, MsgConstants.DATA_FETCHED_SUCCESSFULLY , []))
    }
  }
  catch (error){
    logger.error(`Error while fetching weather data - ${error}`)
    response.status(httpStatusCodes.INTERNAL_SERVER_ERROR).json(Utils.responseGenerators([], CONTROLLER_CONS + httpStatusCodes.INTERNAL_SERVER_ERROR, MsgConstants.INTERNAL_SERVER_ERROR , error))
  }
}
}
