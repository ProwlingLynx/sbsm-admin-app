import express from "express";
import * as dotenv from "dotenv";
import {getRouter, postRouter} from "./routes"
// import getRouter from "./routes/get"

dotenv.config({ path: ".env" });
const app = express();

//The following middleware is used for Development purposes only.
//It allows us to use get requests from react-app.
app.use((req, res, next) => {
  const isOptions = req.method.toLocaleLowerCase() === "options";
  if (isOptions) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Methods", "post");
    // res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Requested-With");
    res.header("Access-Control-Allow-Headers", "Authorization");
    res.sendStatus(200);
    return;
  }
  console.log(`Current request: ${req.method} \nat url: ${req.url}`);
  next();
})

app.use(express.static('../sbsm-admin-app/build'))
app.use('/', getRouter);
app.use('/', postRouter);


app.listen(process.env.PORT, () : void => {
  console.log(`Server listening on port: ${process.env.PORT}`);
});