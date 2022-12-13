import type { Request, Response, NextFunction } from 'express';

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

export default Authorization;
