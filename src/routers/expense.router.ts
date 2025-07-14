import { Router } from "express";
import {
  getByCategory,
  getByDate,
  getData,
} from "../controllers/expense.controller";

const route: Router = Router();

route.get("/", getData);
route.get("/by-category/:category", getByCategory);
route.get("/by-date/:start/:end", getByDate);

export default route;
