import { Router } from "express";
import { getGas } from "./gas";
import { verify } from "./google";

export const postRouter = Router();

postRouter.post("/verify/user", async (req, res) => {
  try{
    const token = req.get("authorization")?.split(" ")[1]
    const user = await verify(token);
    const {data} = await getGas(user);
    console.log(data);
    res.send(data).status(200);
  } catch (error) {
    console.log(error);
    res.status(410).send("Invalid Token");
  }
});