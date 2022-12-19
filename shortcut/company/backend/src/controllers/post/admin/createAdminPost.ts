import { type ControllerAPI } from '@fuseble.inc/node';
import { adminCoreFunctions } from 'controllers/_core';

export const createAdminPostAPI: ControllerAPI = {
  tags: ['Post'],
  schema: 'Post',
  method: 'POST',
  path: '/admin/posts',
  authorize: 'admin',
  body: [
    { key: 'title', type: 'string' },
    { key: 'content', type: 'string', nullable: true },
    { key: 'categoryId', type: 'string', nullable: true },
  ],
};

export const createAdminPost = adminCoreFunctions.Post.create;
