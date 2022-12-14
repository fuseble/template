import { type ControllerAPI } from '@fuseble.inc/node';
import { adminCoreFunctions } from 'controllers/_core';

export const deleteAdminNoticeAPI: ControllerAPI = {
  tags: ['Notice'],
  schema: 'Notice',
  method: 'DELETE',
  path: '/admin/notices/:id',
  authorize: 'admin',
  params: [{ key: 'id', type: 'string' }],
};

export const deleteAdminNotice = adminCoreFunctions.Notice.delete;
