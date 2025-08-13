import { Router } from "express";
import {
  addData,
  getTotalByCategory,
  getByDate,
  getData,
  updateData,
  removeData,
} from "../controllers/expense.controller";

const route: Router = Router();

route.get("/", getData);
route.post("/add", addData);
route.patch("/:id", updateData);
route.delete("/:id", removeData);
route.get("/by-category/:categoryId", getTotalByCategory);
route.get("/by-date/:start/:end", getByDate);

export default route;
