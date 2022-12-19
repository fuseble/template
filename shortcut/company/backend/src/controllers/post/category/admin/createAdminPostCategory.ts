import { type ControllerAPI } from '@fuseble.inc/node';
import { adminCoreFunctions } from 'controllers/_core';

export const createAdminPostCategoryAPI: ControllerAPI = {
  tags: ['PostCategory'],
  schema: 'PostCategory',
  method: 'POST',
  path: '/admin/post-categories',
  authorize: 'admin',
  body: [
    { key: 'seq', type: 'number', nullable: true },
    { key: 'name', type: 'string' },
    { key: 'parentId', type: 'string', nullable: true },
  ],
};

export const createAdminPostCategory = adminCoreFunctions.PostCategory.create;
