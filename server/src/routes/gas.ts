import axios from "axios";
import { makeGetOptions } from "../utils";

interface User {
  email: string;
  name: string;
}
export const getGas: ({email, name}: User) => Promise<any> = async ({email, name}) => {
  try{
    const options = makeGetOptions(name, email);
    const data = await axios(options);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}