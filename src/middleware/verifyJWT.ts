import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { AuthUserInfoProps } from '../types/index.js';

declare module 'express-serve-static-core' {
  interface Request {
    username: string;
    roles: string[];
  }
}

export const verifyJWT = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = (req.headers.authorization || req.headers.Authorization) as
    | string
    | undefined;

  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const token = (authHeader as string).split(' ')[1];
  const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

  if (!accessTokenSecret) {
    return res.status(400).json({ message: 'Access token secret is required' });
  }

  jwt.verify(token, accessTokenSecret, (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Forbidden' });

    req.username = (decoded as AuthUserInfoProps).UserInfo.username;
    req.roles = (decoded as AuthUserInfoProps).UserInfo.roles;

    next();
  });
};
