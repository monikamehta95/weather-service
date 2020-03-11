export const vars = {
  port: process.env.PORT || 3001,
  appVersion: process.env.APP_VERSION || 'v1',
  appContext: process.env.APP_CONTEXT || '/api',
  logLevel: process.env.LOG_LEVEL || 'warn',
  dbConnectionUrl: process.env.DB_CONNECTION_URL || 'mongodb://localhost:27017/sride',
  openWeatherApiSecretKey: process.env.OPEN_WEATHER_API_SECRET_KEY || '',
  getWeatherData: process.env.GET_WEATHER_DATA || 'https://api.openweathermap.org/data/2.5/weather'
};