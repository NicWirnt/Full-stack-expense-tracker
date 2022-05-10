import express from "express";

const app = express();
const PORT = process.env.PORT || 8000; //if there is falsely value we use 8000

// setups middleware (between request and response)
import cors from "cors";
import morgan from "morgan";

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

// DB Connection
import { dbConnection } from "./config/db.js";
dbConnection();

// APIs
import router from "./src/routers/userRouter.js";
import expensesRouter from "./src/routers/expensesRouter.js";
app.use("/api/v1/users", router);
app.use("/api/v1/expenses", expensesRouter);

app.get("*", (req, res) => {
  res.status(404).send("<h1> 404 Not Found</h1>");
});

app.listen(PORT, (error) => {
  error && console.log(error);

  console.log(`server is running on port ${PORT}`);
});
