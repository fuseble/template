import { type ControllerAPI } from '@fuseble.inc/node';
import { adminCoreFunctions } from 'controllers/_core';

export const deleteAdminPostCategoryAPI: ControllerAPI = {
  tags: ['PostCategory'],
  schema: 'PostCategory',
  method: 'DELETE',
  path: '/admin/post-categories/:id',
  authorize: 'admin',
  params: [{ key: 'id', type: 'string' }],
};

export const deleteAdminPostCategory = adminCoreFunctions.PostCategory.delete;
