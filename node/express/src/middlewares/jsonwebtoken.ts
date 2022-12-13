import { type Request, type Response, type NextFunction } from 'express';
import db from 'database';
import { jsonwebtoken } from 'common';

export type JWTPayload = {
  id?: string;
};

const jwt = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers['authorization']) return next();

  const splitted = req.headers['authorization'].split(' ');
  if (splitted.length !== 2) return next();

  const token = splitted[1];
  if (!token) return next();

  const decoded = jsonwebtoken.verifyJwt<JWTPayload>(token);

  if (decoded?.name === 'JsonWebTokenError') {
    return next({ status: 400, message: decoded.name });
  }

  if (decoded?.name === 'TokenExpiredError') {
    if (req.path === '/auth/refresh') {
      return next();
    } else {
      return next({ status: 401, message: decoded.name });
    }
  }

  if (decoded?.id) {
    const user = await db.user.findFirst({
      where: { id: decoded.id, deletedAt: null },
      select: {
        id: true,
        email: true,
        nickname: true,
        role: true,
        createdAt: true,
        deletedAt: true,
        updatedAt: true,
      },
    });

    if (!user) return next({ status: 401, message: 'User not found' });
    req.user = user;
  }

  next();
};

export default jwt;
