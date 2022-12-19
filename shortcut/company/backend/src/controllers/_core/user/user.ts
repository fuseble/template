import { Types } from 'controllers/_core/types';

export const user: Types.User = {
  function: 'user',
};

export const adminUser: Types.User = {
  function: 'user',
  findMany: {},
  findUnique: {
    where: { id: '$id' },
  },
  delete: {
    where: { id: '$id' },
  },
};
