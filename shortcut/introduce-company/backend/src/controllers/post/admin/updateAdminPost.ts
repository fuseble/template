import { type ControllerAPI } from '@fuseble.inc/node';
import { adminCoreFunctions } from 'controllers/_core';

export const updateAdminPostAPI: ControllerAPI = {
  tags: ['Post'],
  schema: 'Post',
  method: 'PUT',
  path: '/admin/posts/:id',
  authorize: 'admin',
  body: [
    { key: 'title', type: 'string' },
    { key: 'content', type: 'string', nullable: true },
    { key: 'userId', type: 'string', nullable: true },
    { key: 'categoryId', type: 'string', nullable: true },
  ],
};

export const updateAdminPost = adminCoreFunctions.Post.update;
