import express from 'express';
import * as dotenv from 'dotenv';
import { getRouter, postRouter } from './routes';
import { allowCors } from './utils';

dotenv.config({ path: '.env' });
const app = express();

if (process.env.MODE === 'development') {
  //The following middleware is used for Development purposes only.
  //It allows us to use get requests from react-app.
  app.use(allowCors);
}

app.use(express.static('../sbsm-admin-app/build'));
app.use('/', getRouter);
app.use('/', postRouter);

app.listen(process.env.PORT, (): void => {
  console.log(`Server listening on port: ${process.env.PORT}`);
});
