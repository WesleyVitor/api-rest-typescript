import { Response } from "express";

export const badRequest = (res: Response, err: string) => {
  res.status(400).json({ err });
};

export const internalServerError = (res: Response, err: string) => {
  res.status(500).json({ err });
};

export const notFound = (res: Response) =>
  res.status(404).json({ msg: "Produto não encontrado" });
