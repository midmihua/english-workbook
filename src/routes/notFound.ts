import express from 'express';
import path from 'path';
import { __dirname } from '../utils/index.js';

export const notFoundRouter = express.Router();

notFoundRouter.all('*', (req, res) => {
  res.status(404);

  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, '..', 'views', '404.html'));
  } else if (req.accepts('json')) {
    res.send({ message: '404 Not found' });
  } else {
    res.type('txt').send('404 Not found');
  }
});
