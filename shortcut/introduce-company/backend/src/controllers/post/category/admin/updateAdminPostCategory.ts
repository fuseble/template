import { type ControllerAPI } from '@fuseble.inc/node';
import { adminCoreFunctions } from 'controllers/_core';

export const updateAdminPostCategoryAPI: ControllerAPI = {
  tags: ['PostCategory'],
  schema: 'PostCategory',
  method: 'PUT',
  path: '/admin/post-categories/:id',
  authorize: 'admin',
  params: [{ key: 'id', type: 'string' }],
  body: [
    { key: 'seq', type: 'number' },
    { key: 'name', type: 'string' },
    { key: 'parentId', type: 'string', nullable: true },
  ],
};

export const updateAdminPostCategory = adminCoreFunctions.PostCategory.update;
