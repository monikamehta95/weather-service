# weather-service

# Introduction
This service will be helpful to get weather details from open weather site and insert in audit collection

# Installation
Perform npm install to install dependencies

# Configuration
Add API secret in env file OPEN_WEATHER_API_SECRET_KEY variable
Add db connection string in env file DB_CONNECTION_URL variable

# To run service
Open cmd and type "yarn dev" command
API url - localhost:3001/api/v1/weather (method- GET)

# To run testCases
Type "yarn test" command

# To view API documentation (swagger)
Run service -> Open Browser -> http://localhost:3001/api/api-docs/
