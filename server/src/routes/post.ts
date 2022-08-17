import { Router } from "express";
import { getGas } from "./gas";
import { verify } from "./google";

export const postRouter = Router();

postRouter.post("/verify/user", async (req, res) => {
  try{
    console.log("verify user called: ", req.get("authorization"));
    console.log("Verifying user: ", req.header);
    const user = await verify(req.get("authorization") as string);
    console.log(user);
    const data = await getGas(user);
    res.send(data).status(200);
  } catch (error) {
    console.log(error);
    res.status(410).send("Invalid Token");
  }
});