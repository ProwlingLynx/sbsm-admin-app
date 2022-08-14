import type { GetOptions, ExtendRequests, ExtendResponse } from './types';

export const makeGetOptions: (name: string, email: string) => GetOptions =
  (name, email) => {
  if (typeof name !== 'string' || typeof email !== 'string') throw new Error('Invalid arguments');
  const options = {
    method: 'get',
    url: process.env.API_URL_STUDENT_CURRENT,
    params: {
      snusnu: process.env.API_URL_PASS,
      secret: process.env.API_SECRET,
      name,
      email,
    },
  };
  return options;
};

export const allowCors: (req: ExtendRequests, res: ExtendResponse, next: Function) => void = (
  req,
  res,
  next
) => {
  const isOptions = req.method.toLocaleLowerCase() === 'options';
  if (isOptions) {
    // res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'post');
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Requested-With");
    // res.header('Access-Control-Allow-Headers', 'Authorization');
    res.sendStatus(200);
    return;
  }
  console.log(`Current request: ${req.method} \nat url: ${req.url}`);
  next();
};
