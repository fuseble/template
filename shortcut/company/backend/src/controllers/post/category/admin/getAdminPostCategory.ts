import { type ControllerAPI } from '@fuseble.inc/node';
import { adminCoreFunctions } from 'controllers/_core';

export const getAdminPostCategoryAPI: ControllerAPI = {
  tags: ['PostCategory'],
  schema: 'PostCategory',
  method: 'GET',
  path: '/admin/post-categories/:id',
  authorize: 'admin',
  params: [{ key: 'id', type: 'string' }],
};

export const getAdminPostCategory = adminCoreFunctions.PostCategory.findUnique;
