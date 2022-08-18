import express, { Request } from "express";
import {makeGetOptions} from "../utils";
import axios from "axios";
import { verify } from "./google";
import {fakeData} from "./fake";
export const getRouter = express.Router();

getRouter.get("/get/students", async (req, res) => {
  try{
    const token = req.get("authorization")?.split(" ")[1]
    const user = await verify(token); // can change this to in house server side verification later.
    const {data} = fakeData as any; // Connect Gas logic here.
  } catch (error) {
    console.log(error);
    res.status(410).send("Invalid Token");
  }

})