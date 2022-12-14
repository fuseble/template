import { type ControllerAPI } from '@fuseble.inc/node';
import { adminCoreFunctions } from 'controllers/_core';

export const deleteAdminFAQAPI: ControllerAPI = {
  tags: ['FAQ'],
  schema: 'FAQ',
  method: 'DELETE',
  path: '/admin/faqs/:id',
  authorize: 'admin',
  params: [{ key: 'id', type: 'string' }],
};

export const deleteAdminFAQ = adminCoreFunctions.FAQ.delete;
