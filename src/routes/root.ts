import express from 'express';
import path from 'path';
import {} from '../server.js';
import { __dirname } from '../utils/index.js';

export const rootRouter = express.Router();

rootRouter.get('^/$|/index(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});
