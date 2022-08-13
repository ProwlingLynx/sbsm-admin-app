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