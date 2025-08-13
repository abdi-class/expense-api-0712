import { Request, Response } from "express";
import { prisma } from "../config/prisma";

export const getData = async (req: Request, res: Response) => {
  try {
    const transactions = await prisma.transactions.findMany({
      include: {
        Categories: true,
      },
    });

    res.status(200).send(transactions);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const addData = async (req: Request, res: Response) => {
  try {
    const newData = await prisma.transactions.create({
      data: { ...req.body, date: new Date(req.body.date) },
    });

    res.status(200).send(newData);
  } catch (error) {
    console.log(error);
  }
};

export const getByCategory = (req: Request, res: Response) => {};

export const getByDate = (req: Request, res: Response) => {};
