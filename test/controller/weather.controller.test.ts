jest.mock('../../src/server/service/weather.service');

import { WeatherController } from '../../src/server/controller/weather.controller';
import { Request, Response } from 'express';

describe('Weather Controller ', () => {
    it('should get weather details if today date is prime', async () => {
        const request = {} as Request;
        const response = {} as Response;
        response.status = jest.fn().mockReturnThis();
        response.json = jest.fn().mockReturnThis();
        const nextFunc = jest.fn();
        request.body = {};
        const weatherController = WeatherController.createInstance();
        await weatherController.getWeatherDetail(request, response, nextFunc);
        expect(response.status).toBeCalled();
        expect(response.json).toBeCalled();
    })

})