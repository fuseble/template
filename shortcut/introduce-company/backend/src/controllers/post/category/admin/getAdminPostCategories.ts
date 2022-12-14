import { type ControllerAPI, paginationQuery } from '@fuseble.inc/node';
import { adminCoreFunctions } from 'controllers/_core';

export const getAdminPostCategoriesAPI: ControllerAPI = {
  tags: ['PostCategory'],
  schema: 'PostCategory[]',
  method: 'GET',
  path: '/admin/post-categories',
  authorize: 'admin',
  query: paginationQuery,
};

export const getAdminPostCategories = adminCoreFunctions.PostCategory.findMany;
