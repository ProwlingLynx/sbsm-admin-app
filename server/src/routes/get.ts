import express from "express";
import {makeGetOptions} from "../utils";
import axios from "axios";

export const getRouter = express.Router();

getRouter.get("/cat", (req : express.Request, res : express.Response): void => {
  console.log("The cat meowed!");
  res.send("Meow");
});

getRouter.get("/fakeGas", async (req : express.Request, res : express.Response): Promise<void> => {
  const options = makeGetOptions("something fakeName", "something@fakeMail.com");
  try {
    const {data} = await axios(options);
    console.log("this was data: ", data);
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});