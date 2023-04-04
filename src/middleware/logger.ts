import { format } from 'date-fns';
import { NextFunction, Request, Response } from 'express';
import fs, { promises as fsPromises } from 'fs';
import path from 'path';
import { v4 as uuid } from 'uuid';
import { FILE_NAMES } from '../utils/constants.js';
import { __dirname } from '../utils/index.js';

type logEventsProps = {
  message: string;
  logFileName: string;
};

export const logEvents = async ({ message, logFileName }: logEventsProps) => {
  const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;

  try {
    if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
      await fsPromises.mkdir(path.join(__dirname, '..', 'logs'));
    }

    await fsPromises.appendFile(path.join(__dirname, '..', 'logs', logFileName), logItem);
  } catch (error) {
    console.error(error);
  }
};

export const logger = (req: Request, res: Response, next: NextFunction) => {
  const options = {
    message: `${req.method}\t${req.url}\t${req.headers.origin}`,
    logFileName: FILE_NAMES.LOGS.reqLog,
  };

  logEvents(options);
  console.log(`${req.method} ${req.path}`);
  next();
};
