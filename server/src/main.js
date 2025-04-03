import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import errorMiddleware from "./middlewares/error.middleware.js";
import router from "./routes/index.js";

async function main() {
  const app = express();
  const port = process.env.PORT || 5000;

  app.use(cors());
  app.use(express.json());

  app.use("/api", router);

  app.use(errorMiddleware);

  const server = app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
  });
}

main();
