import { type ControllerAPI } from '@fuseble.inc/node';
import { adminCoreFunctions } from 'controllers/_core';

export const getAdminNoticeAPI: ControllerAPI = {
  tags: ['Notice'],
  schema: 'Notice',
  method: 'GET',
  path: '/admin/notices/:id',
  authorize: 'admin',
  params: [{ key: 'id', type: 'string' }],
};

export const getAdminNotice = adminCoreFunctions.Notice.findUnique;
