import { type ControllerAPI } from '@fuseble.inc/node';
import { adminCoreFunctions } from 'controllers/_core';

export const getAdminPostAPI: ControllerAPI = {
  tags: ['Post'],
  schema: 'Post',
  method: 'GET',
  path: '/admin/posts/:id',
  authorize: 'admin',
  params: [{ key: 'id', type: 'string' }],
};

export const getAdminPost = adminCoreFunctions.Post.findUnique;
