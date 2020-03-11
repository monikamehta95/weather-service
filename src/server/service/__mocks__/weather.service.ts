export class WeatherService {
  static async createInstance() {
    return {
      getWeatherDetail: jest.fn().mockReturnValue({})
    };
  }
}
