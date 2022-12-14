import { type ControllerAPI } from '@fuseble.inc/node';
import { adminCoreFunctions } from 'controllers/_core';

export const deleteAdminPostAPI: ControllerAPI = {
  tags: ['Post'],
  schema: 'Post',
  method: 'DELETE',
  path: '/admin/posts/:id',
  authorize: 'admin',
  params: [{ key: 'id', type: 'string' }],
};

export const deleteAdminPost = adminCoreFunctions.Post.delete;
