import { Request, Response, NextFunction } from "express";
import { items, Item } from "../models/item";

export const createItem = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.body;

    const newItem: Item = { id: Date.now(), name };

    items.push(newItem);
    res.status(201).json(newItem);
  } catch (error) {
    next(error);
  }
};

export const getItems = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(items);
  } catch (error) {
    next(error);
  }
};
