import swaggerJSDoc from 'swagger-jsdoc';

// swagger definition
const options = {
  // List of files to be processed.
  apis: ['**/*.ts'],
  basePath: '/',
  host: "localhost:3001",
  swaggerDefinition: {
    info: {
      description: 'Swagger Doc for weather microservice',
      swagger: '2.0',
      title: 'WEATHER API DOC',
      version: '1.0.0',
    },
  },
};
// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

export { swaggerSpec };
