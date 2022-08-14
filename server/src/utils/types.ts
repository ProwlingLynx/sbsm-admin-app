import http from 'http';
export interface GetOptions {
  method: string;
  url: string | undefined;
  params: DefaultParams;
}

export interface DefaultParams {
  snusnu: string | undefined;
  secret: string | undefined;
  name: string;
  email: string;
};

export interface ExtendRequests extends Express.Request {
  method: string;
  url: string;
  get: (name: string) => string;
}

export interface ExtendResponse extends Express.Response {
  header: (name: string, value: string) => void;
  sendStatus: (statusCode: number) => void;
}