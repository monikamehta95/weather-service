import mongoose from 'mongoose';
const logger = require('./logger');

export interface TInput {
  db: string;
}

export default ({db}: TInput) => {
  const connectDb = () => {
    mongoose
      .connect(
        db,
        { useNewUrlParser: true }
      )
      .then(() => {
        return logger.info(`Successfully connected to ${db}`);
      })
      .catch(error => {
        logger.error('Error connecting to database: ', error);
        return process.exit(1);
      });
  };
  connectDb();

  mongoose.connection.on('disconnected', connectDb);
};
