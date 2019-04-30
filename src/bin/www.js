import mongoose, { Mongoose } from 'mongoose';
import dotenv from 'dotenv';
import app from '../app';
import logger from '../logger';

dotenv.config();

// get the host and port name
const hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 6666;

const connectionUrl = process.env.NODE_ENV === 'test'
  ? process.env.DB_URL_TEST : process.env.MONGO_URL;

mongoose.connect(connectionUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
}, () => {
  logger.info('Connected to database successfully');
});

app.listen(port, () => {
  logger.info(`App listening on ${hostname}:${port}`);
});

process.on('SIGINT', () => {
  mongoose.connection.close(); // close the db properly
  logger.info('Shutting down server...');
  logger.info('Server successfully shutdown');
  process.exit(0);
});
