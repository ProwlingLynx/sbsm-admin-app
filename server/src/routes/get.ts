import express from "express";

export const getRouter = express.Router();

getRouter.get("/cat", (req : express.Request, res : express.Response): void => {
  console.log("The cat meowed!");
  res.send("Meow");
});
