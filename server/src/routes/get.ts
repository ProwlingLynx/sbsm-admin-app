import express from "express";

const router = express.Router();

router.get("/cat", (req : express.Request, res : express.Response) => {
  res.send("Meow");
});
