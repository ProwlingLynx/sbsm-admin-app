import { Router } from "express";
import { verifyToken } from "./verifyToken";

export const postRouter = Router();

postRouter.post("/verify/user", async (req, res) => {
  const token = req.get("authorization").split(" ")[1];
  console.log("verify user called: ", token);
  console.log("Verifying user: ", req.header);
  try {
    await verifyToken(token);
    res.send("verify user called").status(200);
  } catch (error) {
    console.log(error);
    res.status(500).send("verify user failed");
  }
});