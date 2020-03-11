import express from 'express';
import { WeatherController } from '../../controller/weather.controller';

export const weatherRoutes: express.Router = express.Router();

const weatherController = WeatherController.createInstance();
/**
 * @swagger
 *
 * /api/v1/weather:
 *   get:
 *     description: Checks if today's date is prime no or not. If its prime get weather details and insert audit data in mongodb sride db
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Data successfully inserted
 *       400:
 *         description: Today's date is not prime.
 */
weatherRoutes.route('/v1/weather').get(weatherController.getWeatherDetail);
