import express from "express";
import * as dotenv from "dotenv";
import {getRouter} from "./routes"
// import getRouter from "./routes/get"

dotenv.config({ path: "../.env" });
const app = express();

app.use(express.static('../sbsm-admin-app/public'))
app.use('/', getRouter);


app.listen(process.env.PORT, () : void => {
  console.log(`Server listening on port: ${process.env.PORT}`);
});