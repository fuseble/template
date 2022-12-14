import { type ControllerAPI, paginationQuery } from '@fuseble.inc/node';
import { adminCoreFunctions } from 'controllers/_core';

export const getAdminPostsAPI: ControllerAPI = {
  tags: ['Post'],
  schema: 'Post[]',
  method: 'GET',
  path: '/admin/posts',
  authorize: 'admin',
  query: paginationQuery,
};

export const getAdminPosts = adminCoreFunctions.Post.findMany;
