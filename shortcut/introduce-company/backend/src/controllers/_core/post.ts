import { Prisma } from '@prisma/client';
import db from 'database';
import { Types } from './types';

export const post: Types.Post = {
  function: 'post',
  findMany: {
    callback: async (req, res, next, options) => {
      const { skip, take } = options;
      const categoryId = req.query.catgoryId as string | undefined;

      const where: Prisma.PostFindManyArgs['where'] = {
        deletedAt: null,
      };
      if (categoryId) {
        const findCategory = await db.postCategory.findFirst({
          where: { id: categoryId },
        });
        if (!findCategory) {
          throw { status: 404, message: '게시판을 찾을 수 없습니다.' };
        }
        where.categoryId = categoryId;
      }

      const [count, rows] = await Promise.all([
        db.post.count({ where }),
        db.post.findMany({
          where,
          select: {
            id: true,
            title: true,
            user: {
              select: { id: true, nickname: true },
            },
            createdAt: true,
          },
          skip,
          take,
          orderBy: { createdAt: 'desc' },
        }),
      ]);

      res.status(200).json(req.pagination({ count, rows }));
    },
  },
  findUnique: {
    where: { id: '$id' },
    callback: async (req, res, next, options) => {
      const row = await db.post.findFirst({
        where: {
          ...options.where,
          deletedAt: null,
        },
        include: {
          category: {
            select: { id: true, name: true },
          },
          user: {
            select: { id: true, nickname: true },
          },
        },
      });

      if (!row) {
        throw { status: 404, message: '게시글을 찾을 수 없습니다.' };
      }

      res.status(200).json({ row });
    },
  },
  create: {
    data: {
      title: '$title',
      content: '$content',
      categoryId: '$categoryId',
    } as any,
    callback: async (req, res, next) => {
      const { title, content, categoryId } = req.body;

      const data: Prisma.PostCreateArgs['data'] = {
        title,
        content,
        userId: req.user.id,
      };

      if (categoryId) {
        const findCategory = await db.postCategory.findUnique({ where: { id: categoryId } });
        if (!findCategory) {
          throw { status: 404, message: '카테고리를 찾을 수 없습니다.' };
        }

        data.categoryId = categoryId;
      }

      const row = await db.post.create({ data });

      res.status(201).json({ row });
    },
  },
  delete: {
    where: { id: '$id' },
    callback: async (req, res, next, options) => {
      const row = await db.post.findFirst({
        where: { ...options.where, userId: req.user.id },
      });
      if (!row) {
        throw { status: 404, message: '게시글을 찾을 수 없습니다.' };
      }

      await db.post.delete({ where: options.where });

      res.status(204).end();
    },
  },
  update: {
    where: { id: '$id' },
    callback: async (req, res, next, options) => {
      const { title, content, categoryId } = req.body;

      const row = await db.post.findFirst({
        where: { ...options.where, userId: req.user.id },
      });
      if (!row) {
        throw { status: 404, message: '게시글을 찾을 수 없습니다.' };
      }

      const data: Prisma.PostUpdateArgs['data'] = {};

      if (row.title !== title) data.title = title;
      if (row.content !== content) data.content = content;
      if (categoryId && row.categoryId !== categoryId) {
        const findCategory = await db.postCategory.findUnique({ where: { id: categoryId } });
        if (!findCategory) {
          throw { status: 404, message: '카테고리를 찾을 수 없습니다.' };
        }
        data.categoryId = categoryId;
      }

      await db.post.update({ where: options.where, data });

      res.status(204).end();
    },
  },
};

export const adminPost: Types.Post = {
  function: 'post',
  findMany: {},
  findUnique: {
    where: { id: '$id' },
    include: { category: true },
  },
  create: {},
  delete: {
    where: { id: '$id' },
  },
  update: {
    where: { id: '$id' },
  },
};
