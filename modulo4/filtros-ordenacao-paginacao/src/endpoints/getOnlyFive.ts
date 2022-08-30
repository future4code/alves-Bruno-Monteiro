import { Request, Response } from "express";
import { selectOnlyFive } from "../data/selectOnlyFive";

export const getOnlyFive = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const page = req.query.page as string;

    const result = await selectOnlyFive(page);
    res.status(200).send(result);
  } catch (error:any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};