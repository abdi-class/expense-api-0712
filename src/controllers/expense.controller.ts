import { Request, Response } from "express";
import { prisma } from "../config/prisma";

export const getData = async (req: Request, res: Response) => {
  try {
    const filterData: any = {};
    if (req.query.title) {
      filterData.title = req.query.title;
    }
    const transactions = await prisma.transactions.findMany({
      where: filterData,
      include: {
        Categories: true,
      },
      omit: {
        categoryId: true,
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

export const updateData = async (req: Request, res: Response) => {
  try {
    const update = await prisma.transactions.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: req.body,
    });

    res.status(200).send("Update Success");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const removeData = async (req: Request, res: Response) => {
  try {
    const remove = await prisma.transactions.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });

    res.status(200).send("Remove Success");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const getTotalByCategory = async (req: Request, res: Response) => {
  try {
    const result = await prisma.transactions.aggregate({
      _sum: {
        nominal: true,
      },
      where: {
        categoryId: parseInt(req.params.categoryId),
      },
    });

    res.status(200).send({
      categoryId: req.params.categoryId,
      total: result._sum.nominal,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const getByDate = (req: Request, res: Response) => {};
