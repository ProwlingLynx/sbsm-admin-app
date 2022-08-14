import { Router } from "express";

export const postRouter = Router();

postRouter.post("/verify/user", (req, res) => {
  console.log("verify user called: ", req.get("authorization"));
  console.log("Verifying user: ", req.header);
  res.send("verify user called").status(200);
});