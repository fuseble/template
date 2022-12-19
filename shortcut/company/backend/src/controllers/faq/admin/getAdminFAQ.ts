import { type ControllerAPI } from '@fuseble.inc/node';
import { adminCoreFunctions } from 'controllers/_core';

export const getAdminFAQAPI: ControllerAPI = {
  tags: ['FAQ'],
  schema: 'FAQ',
  method: 'GET',
  path: '/admin/faqs/:id',
  authorize: 'admin',
  params: [{ key: 'id', type: 'string' }],
};

export const getAdminFAQ = adminCoreFunctions.FAQ.findUnique;
