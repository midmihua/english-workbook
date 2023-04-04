import { Request, Response } from 'express';
import { FILE_NAMES } from '../utils/constants.js';
import { logEvents } from './logger.js';

export const errorHandler = (err: Error, req: Request, res: Response) => {
  const options = {
    message: `${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,
    logFileName: FILE_NAMES.LOGS.errLog,
  };

  logEvents(options);

  console.log(err.stack);

  const status = res.statusCode ? res.statusCode : 500;

  res.status(status);
  res.json({ message: err.message });
};
