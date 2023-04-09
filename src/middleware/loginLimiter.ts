import { rateLimit } from 'express-rate-limit';
import { FILE_NAMES } from '../utils/constants.js';
import { logEvents } from './logger.js';

export const loginLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5, // Limit each IP to 5 login requests per `window` per minute
  message: {
    message:
      'Too many login attempts from this IP, please try again after a 60 seconds pause',
  },
  handler: (req, res, next, options) => {
    logEvents({
      message: `Too Many Requests: ${options.message.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,
      logFileName: FILE_NAMES.LOGS.errLog,
    });
    res.status(options.statusCode).send(options.message);
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
