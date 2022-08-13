import type {GetOptions} from './types';

export const makeGetOptions : (name : string, email : string) => GetOptions = (name, email) => {
  if (typeof name !== 'string' || typeof email !== 'string') throw new Error('Invalid arguments');
  const options = {
    method: 'get',
    url: process.env.API_URL_STUDENT_CURRENT,
    params: {
      snusnu: process.env.API_URL_PASS,
      secret: process.env.API_SECRET,
      name,
      email,
    }
  };
  return options;
}