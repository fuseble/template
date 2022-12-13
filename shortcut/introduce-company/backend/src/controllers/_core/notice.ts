import { Prisma } from '@prisma/client';
import { Types } from './types';

export const notice: Types.Notice = {
  function: 'notice',
};

export const adminNotice: Types.Notice = {
  function: 'notice',
  findMany: {},
  findUnique: {
    where: { id: '$id' },
  },
  create: {
    data: {} as any,
  },
  delete: {
    where: { id: '$id' },
  },
  update: {
    where: { id: '$id' },
    data: {},
  },
};
