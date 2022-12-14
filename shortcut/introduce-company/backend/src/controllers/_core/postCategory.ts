import { Prisma } from '@prisma/client';
import db from 'database';
import { Types } from './types';

export const postCategory: Types.PostCategory = {
  function: 'postCategory',
  findMany: {
    callback: async (req, res, next) => {
      const rows = await db.postCategory.findMany({
        include: {
          children: true,
          _count: true,
        },
        orderBy: [{ seq: 'asc' }, { createdAt: 'asc' }],
      });

      res.status(200).json({ rows });
    },
  },
};

export const adminPostCategory: Types.PostCategory = {
  function: 'postCategory',
  findMany: {},
  findUnique: {
    where: { id: '$id' },
  },
  create: {
    data: {
      seq: '$seq',
      name: '$name',
      parentId: '$parentId',
    } as any,
  },
  delete: {
    where: { id: '$id' },
  },
  update: {
    where: { id: '$id' },
    data: {
      seq: '$seq',
      name: '$name',
      parentId: '$parentId',
    } as any,
  },
};
