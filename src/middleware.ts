import { Request, Response } from 'express';

export const errorHandler = (error: Error, _req: Request, res: Response) => {
  res.status(400).send(error.message);
};
