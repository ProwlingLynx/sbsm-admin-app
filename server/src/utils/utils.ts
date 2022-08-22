import { RequestHandler } from 'express';
import type { GetOptions } from './types';

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

export const allowCors: RequestHandler= (
  req,
  res,
  next
) => {
    res.header('Access-Control-Allow-Origin', req.get('Origin'));
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Requested-With, Origin");
  next();
};
