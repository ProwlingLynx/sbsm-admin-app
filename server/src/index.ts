import express from "express";
import * as dotenv from "dotenv";

dotenv.config({ path: "../.env" });
const app = express();

app.get("/cat", (req : express.Request, res : express.Response) : void => {
  res.send("Meow");
});

app.listen(process.env.PORT, () : void => {
  console.log(`Server listening on port: ${process.env.PORT}`);
});