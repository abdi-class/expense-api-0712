import { Request, Response } from "express";
import { readDB } from "../config/db";

export const getData = (req: Request, res: Response) => {
  const data = readDB();
  res.status(200).send({
    success: true,
    result: data,
  });
};

export const getByCategory = (req: Request, res: Response) => {
  const data = readDB();

  const filter = data.filter((val: any) => {
    return val.category === req.params.category;
  });

  let total = 0;
  filter.forEach((val: any) => {
    total += val.nominal;
  });

  res.status(200).send({
    success: true,
    total,
    result: filter,
  });
};

export const getByDate = (req: Request, res: Response) => {
  const data = readDB();

  const startDate = new Date(req.params.start).getTime();
  const endDate = new Date(req.params.end).getTime();
  const filter = data.filter((val: any) => {
    const valDate = new Date(val.date).getTime();
    return startDate <= valDate && endDate >= valDate;
  });

  let totalExpense = 0,
    totalIncome = 0;
  filter.forEach((val: any) => {
    if (val.type === "income") {
      totalIncome += val.nominal;
    } else {
      totalExpense += val.nominal;
    }
  });

  res.status(200).send({
    success: true,
    totalIncome,
    totalExpense,
    result: filter,
  });
};
