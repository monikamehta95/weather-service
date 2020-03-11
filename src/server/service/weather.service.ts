const requestPromise = require('request-promise')
var ip = require('ip');

const logger = require('../logger');
import AuditRepository from '../repository/audit'
import { vars } from '../config/vars';
import { QueryMethodEnum } from '../enum/queryMethod.enum';
import { Utils } from '../utility/utils';
import { MsgConstants } from '../utility/msg-constants';
const SERVICE_CONS = 'SR_SWEATHER_'
export class WeatherService {
  static async createInstance() {
    return new WeatherService();
  }
  async getWeatherDetail(url: string) {
    const todayDate = new Date().getDate();
    if(await checkNoIsPrimeORNot(todayDate)){
      logger.debug(`Today's date is prime`)
      const response = await fetchWeatherData()
      logger.info(`Weather Details - ${JSON.stringify(response)}`)    
      await AuditRepository.InsertAuditData(generateAuditJson(response, url))
      return Utils.responseGenerators(response, SERVICE_CONS + MsgConstants.CODE_SERVER_OK, MsgConstants.DATA_FETCHED_SUCCESSFULLY , [])  
    } else {
      return Utils.responseGenerators([], SERVICE_CONS + MsgConstants.CODE_BAD_REQUEST, MsgConstants.DATA_NOT_PRIME , [])
    }
  }
}

const generateAuditJson = (documentJson: {}, url: string) => {
  const ipAddress = ip.address()
  const document = JSON.stringify(documentJson)
  return {
    document: document,
    created_by: 'SYSTEM',
    ip_address: ipAddress,
    query_method: QueryMethodEnum.insert,
    collection_name: 'audit',
    created_on: new Date(),
    is_active: true,
    url: url,
    client_url: ''
  }
}

const fetchWeatherData = async () => {
  let apiOptions = {
    method: 'GET',
    url: vars.getWeatherData,
    qs: {
      appid: vars.openWeatherApiSecretKey,
      lat: 35,
      lon: 139
    },
    json: true
  }
  try {
    const response = await requestPromise(apiOptions)
    logger.info('Weather data has been retrieved successfully: %j', response)
    return response
  } catch (err) {
    logger.error('Error occurred while fetching weather data', err)
    throw err
  }
}

const checkNoIsPrimeORNot = async (todayDate: number) => {
  for (let i = 2; i <= Math.sqrt(todayDate); i++) { 
    if (todayDate % i == 0) { 
        return false 
    } 
}
return true
}