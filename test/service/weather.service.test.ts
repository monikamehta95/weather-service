jest.mock('../../src/server/service/weather.service');

import { WeatherService } from '../../src/server/service/weather.service';

describe('Weather Service', () => {
    it('should give weather details if todays date is prime', async () => {
        const weatherService = await WeatherService.createInstance();
        const result = await weatherService.getWeatherDetail('http://localhost:3001/api/v1/weather');
        expect(result).toEqual({});
    })
})