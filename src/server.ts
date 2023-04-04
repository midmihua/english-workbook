import cookieParser from 'cookie-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { corsOptions } from './config/corsOptions.js';
import { connectDB } from './config/dbConnect.js';
import { errorHandler } from './middleware/errorHandler.js';
import { logEvents, logger } from './middleware/logger.js';
import { notFoundRouter } from './routes/notFound.js';
import { rootRouter } from './routes/root.js';
import { termRoutes } from './routes/termRoutes.js';
import { userRoutes } from './routes/userRoutes.js';
import { FILE_NAMES, ROUTES } from './utils/constants.js';
import { __dirname } from './utils/index.js';

dotenv.config();

const PORT = process.env.PORT;
const DB_URI = process.env.DATABASE_URI || '';

connectDB(DB_URI);

const app = express();

app.use(logger);
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use(ROUTES.BASE, express.static(path.join(__dirname, '..', 'public')));
app.use(ROUTES.BASE, rootRouter);
app.use(ROUTES.USERS, userRoutes);
app.use(ROUTES.TERMS, termRoutes);
app.all(ROUTES.ALL, notFoundRouter);

app.use(errorHandler);

mongoose.connection.once('open', () => {
  console.log('DB connected');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

mongoose.connection.on('error', (err) => {
  console.error(`DB connection error: ${err}`);
  logEvents({
    message: `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
    logFileName: FILE_NAMES.LOGS.mongoErrLog,
  });
});
