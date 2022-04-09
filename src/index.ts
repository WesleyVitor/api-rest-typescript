import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import { apiRouter } from "./routes";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use("/api/v1", apiRouter);
app.get("/", (req: Request, res: Response) => {
  res.json({ msg: "Ok Baby", url: req.url });
});
app
  .listen(PORT)
  .on("listening", () => console.log("Server is running at port " + PORT));
