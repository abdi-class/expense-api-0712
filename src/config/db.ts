import { Pool } from "pg";

const poolDB = new Pool({
  user: "postgres",
  host: "localhost",
  database: "expense_tracker",
  password: "qweasd",
  port: 5433,
});

export default poolDB;
