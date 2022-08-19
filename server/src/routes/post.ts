import { Router } from "express";
import { getGas } from "./gas";
import { verify } from "./google";

export const postRouter = Router();

postRouter.post("/verify/user", async (req, res) => {
  try{
    const token = req.get("authorization")?.split(" ")[1]
    const user = await verify(token);
    console.log(user);
    if (process.env.MODE === "development" || process.env.MODE === "test") {
      res.send("Success tokensForTheFuture").status(200); // As long as we send status 200, the client will assume the request was successful.
      //Can add the token to the database here for authentication in the future.
      return;
    }
    const {data} = await getGas(user);
    if (data !== "Admin") throw new Error("Not Authorized");
    res.send("Success tokensForTheFuture").status(200); // As long as we send status 200, the client will assume the request was successful.
    //Can add the token to the database here for authentication in the future.
  } catch (error) {
    console.log(error);
    res.status(410).send("Invalid Token");
  }
});