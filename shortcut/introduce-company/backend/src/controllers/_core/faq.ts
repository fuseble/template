import { Prisma } from '@prisma/client';
import { Types } from 'controllers/_core/types';
import db from 'database';

export const faq: Types.FAQ = {
  function: 'fAQ',
  findMany: {},
  findUnique: {
    where: { id: '$id' },
    include: {},
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
