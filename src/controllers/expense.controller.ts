import { Request, Response } from "express";
import poolDB from "../config/db";

export const getData = async (req: Request, res: Response) => {
  try {
    const sqlScript = "select * from transactions order by id asc;";
    const data = await poolDB.query(sqlScript);

    console.log(data);

    res.status(200).send(data.rows);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const getByCategory = (req: Request, res: Response) => {};

export const getByDate = (req: Request, res: Response) => {};
