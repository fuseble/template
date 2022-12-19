import { type ControllerAPI } from '@fuseble.inc/node';
import { adminCoreFunctions } from 'controllers/_core';

export const updateAdminFAQAPI: ControllerAPI = {
  tags: ['FAQ'],
  schema: 'FAQ',
  method: 'PUT',
  path: '/admin/faqs/:id',
  authorize: 'admin',
  params: [{ key: 'id', type: 'string' }],
  body: [
    { key: 'title', type: 'string' },
    { key: 'content', type: 'string' },
    { key: 'seq', type: 'boolean' },
  ],
};

export const updateAdminFAQ = adminCoreFunctions.FAQ.update;
