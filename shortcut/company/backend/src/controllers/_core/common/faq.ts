import { Prisma } from '@prisma/client';
import { Types } from 'controllers/_core/types';
import db from 'database';

export const faq: Types.FAQ = {
  function: 'fAQ',
  findMany: {
    where: { deletedAt: null },
    select: {
      id: true,
      title: true,
      content: true,
      createdAt: true,
      updatedAt: true,
      comments: {
        select: {
          id: true,
          content: true,
          user: {
            select: { id: true, nickname: true, role: true },
          },
          parent: true,
          children: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
    callback: async (req, res, next, options) => {
      const { where, select, orderBy } = options;
      const { skip, take } = req;

      const [count, rows] = await db.$transaction([
        db.fAQ.count({ where }),
        db.fAQ.findMany({
          where,
          orderBy,
          select,
          skip,
          take,
        }),
      ]);

      res.status(200).json(req.pagination({ count, rows }));
    },
  },
  findUnique: {
    where: { id: '$id' },
  },
};

export const adminFAQ: Types.FAQ = {
  function: 'fAQ',
  findMany: {},
  findUnique: {
    where: { id: '$id' },
  },
  create: {
    data: {
      title: '$title',
      content: '$content',
    },
  },
  delete: {
    where: { id: '$id' },
  },
  update: {
    where: { id: '$id' },
    data: {
      title: '$title',
      content: '$content',
    },
  },
};
