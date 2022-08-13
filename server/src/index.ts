import express from "express";

const app = express();

app.get("/cat", (req : express.Request, res : express.Response) : void => {
  res.send("Meow");
});

app.listen(4000, () : void => {
  console.log("Server is running on port 4000");
});