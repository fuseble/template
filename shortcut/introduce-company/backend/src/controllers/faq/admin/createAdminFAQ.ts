import { type ControllerAPI } from '@fuseble.inc/node';
import { adminCoreFunctions } from 'controllers/_core';

export const createAdminFAQAPI: ControllerAPI = {
  tags: ['FAQ'],
  schema: 'FAQ',
  method: 'POST',
  path: '/admin/faqs',
  authorize: 'admin',
  body: [
    { key: 'title', type: 'string' },
    { key: 'content', type: 'string' },
  ],
};

export const createAdminFAQ = adminCoreFunctions.FAQ.create;
