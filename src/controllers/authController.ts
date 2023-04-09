import bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';
import { Request, Response } from 'express';
import jwt, { JwtPayload, VerifyOptions } from 'jsonwebtoken';
import { UserModel } from '../models/User.js';

dotenv.config();

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const accessTokenExpiresIn = process.env.ACCESS_TOKEN_EXPIRES_IN || '15m';
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;
const refreshTokenExpiresIn = process.env.REFRESH_TOKEN_EXPIRES_IN || '7d';

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  if (!accessTokenSecret || !refreshTokenSecret) {
    return res
      .status(400)
      .json({ message: 'Access and refresh token secrets are required' });
  }

  const foundUser = await UserModel.findOne({ username }).exec();

  if (!foundUser || !foundUser.active) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const match = await bcrypt.compare(password, foundUser.password);

  if (!match) return res.status(401).json({ message: 'Unauthorized' });

  const accessToken = jwt.sign(
    {
      UserInfo: {
        username: foundUser.username,
        roles: foundUser.roles,
      },
    },
    accessTokenSecret,
    { expiresIn: accessTokenExpiresIn },
  );

  const refreshToken = jwt.sign({ username: foundUser.username }, refreshTokenSecret, {
    expiresIn: refreshTokenExpiresIn,
  });

  const numberOfDays = Number(String(refreshTokenExpiresIn).split('')[0]);

  res.cookie('jwt', refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    maxAge: numberOfDays * 24 * 60 * 60 * 1000,
  });

  res.json({ accessToken });
};

const refresh = (req: Request, res: Response) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) return res.status(401).json({ message: 'Unauthorized' });

  if (!accessTokenSecret || !refreshTokenSecret) {
    return res
      .status(400)
      .json({ message: 'Access and refresh token secrets are required' });
  }

  const refreshToken = cookies.jwt;

  const options: VerifyOptions & { complete: true } = {
    complete: true,
  };

  jwt.verify(
    refreshToken,
    refreshTokenSecret,
    options,
    async (err: Error | null, decoded: JwtPayload | undefined) => {
      if (err) return res.status(403).json({ message: 'Forbidden' });

      const foundUser = await UserModel.findOne({
        username: decoded?.payload?.username,
      }).exec();

      if (!foundUser) return res.status(401).json({ message: 'Unauthorized' });

      const accessToken = jwt.sign(
        {
          UserInfo: {
            username: foundUser.username,
            roles: foundUser.roles,
          },
        },
        accessTokenSecret,
        { expiresIn: accessTokenExpiresIn },
      );

      res.json({ accessToken });
    },
  );
};

const logout = (req: Request, res: Response) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) return res.sendStatus(204);

  res.clearCookie('jwt', { httpOnly: true, sameSite: 'none', secure: true });
  res.json({ message: 'Cookie cleared' });
};

export const authController = { login, logout, refresh };
