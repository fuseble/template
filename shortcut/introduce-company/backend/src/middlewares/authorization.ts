import type { Request, Response, NextFunction } from 'express';
import { UserRole } from '@prisma/client';
import { ExpressController } from '@fuseble.inc/node';
import bcrypt from 'bcrypt';
import db from 'database';
import config from 'config';

const testUser = {
  email: 'test@fuseble.com',
  password: 'test123',
  nickname: 'test',
  role: UserRole.ADMIN,
};

const Authorization = {
  admin: (req: Request, res: Response, next: NextFunction) => {
    if (!req.user || req.user.role !== 'ADMIN') {
      throw { status: 401, message: '[관리자] 권한이 없습니다.' };
    }
    next();
  },
  user: (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      throw { status: 401, message: '[유저] 권한이 없습니다.' };
    }
    next();
  },
};

export const TestAuthorization: ExpressController = async (req, res, next) => {
  if (!req.user && config.NODE_ENV !== 'prod') {
    console.log(`[TestAuthorization mode]`);
    const findUser = await db.user.findUnique({ where: { email: testUser.email } });
    if (!findUser) {
      const newUser = await db.user.create({
        data: {
          ...testUser,
          password: await bcrypt.hash(testUser.password, config.PASSWORD_SALT_ROUND),
        },
      });
      req.user = newUser;
    } else {
      req.user = findUser;
    }
  }

  next();
};

export default Authorization;
