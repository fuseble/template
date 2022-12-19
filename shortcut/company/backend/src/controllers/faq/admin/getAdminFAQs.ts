import { type ControllerAPI, paginationQuery } from '@fuseble.inc/node';
import { adminCoreFunctions } from 'controllers/_core';

export const getAdminFAQsAPI: ControllerAPI = {
  tags: ['FAQ'],
  schema: 'FAQ[]',
  method: 'GET',
  path: '/admin/faqs',
  authorize: 'admin',
  query: paginationQuery,
};

export const getAdminFAQs = adminCoreFunctions.FAQ.findMany;
