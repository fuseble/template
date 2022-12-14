import { type ControllerAPI } from '@fuseble.inc/node';
import { coreFunctions } from 'controllers/_core';

export const getPostCategoriesAPI: ControllerAPI = {
  tags: ['PostCategory'],
  schema: 'PostCategory[]',
  method: 'GET',
  path: '/post-categories',
};

export const getPostCategories = coreFunctions.PostCategory.findMany;
