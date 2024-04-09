import { NextFunction, Request, Response } from 'express';

export default function (err: NodeJS.ErrnoException, req: Request, res: Response, next: NextFunction) {
  if (err.code !== 'EBADCSRFTOKEN') return next(err);

  res.status(403);
  res.send('EBADCSRFTOKEN');
}
