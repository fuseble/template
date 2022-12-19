import { Prisma, User } from '@prisma/client';
import { Types } from 'controllers/_core/types';
import db from 'database';

export const contact: Types.Contact = {
  function: 'contact',
  findMany: {
    callback: async (req, res, next, options) => {
      const user = req.user as User;
      const rows = await db.contact.findMany({
        where: {
          userId: user.id,
        },
      });

      res.status(200).json({ rows });
    },
  },
  create: {
    data: {
      name: '$name',
      content: '$content',
      email: '$email',
      phoneNumber: '$phoneNumber',
    },
    callback: async (req, res, next, options) => {
      const user = req.user as User | undefined;
      const { name, content, email, phoneNumber } = options.data;

      const data: Prisma.ContactCreateArgs['data'] = {
        name,
        content,
        email,
        phoneNumber,
        userId: user?.id || null,
      };

      const row = await db.contact.create({ data });
      res.status(201).json({ row });
    },
  },
};

export const adminContact: Types.Contact = {
  function: 'contact',
  findMany: {},
  findUnique: {
    where: { id: '$id' },
  },
  create: {
    data: {
      name: '$name',
      content: '$content',
      email: '$email',
      phoneNumber: '$phoneNumber',
      userId: '$userId',
    },
  },
  delete: {
    where: { id: '$id' },
  },
  update: {
    where: { id: '$id' },
  },
};
