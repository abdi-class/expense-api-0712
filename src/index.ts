import express, { Application, Request, Response } from "express";
import expenseRouter from "./routers/expense.router";

const PORT: string = "6600";

const app: Application = express();

// define middleware
app.use(express.json());

// define routes
app.get("/", (req: Request, res: Response) => {
  res.status(200).send("<h1>Expense API</h1>");
});

app.use("/expense", expenseRouter);

// API listen
app.listen(PORT, () => {
  console.log("EXPENSE API RUNNING", PORT);
});
