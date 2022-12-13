import { type ControllerAPI, paginationQuery } from '@fuseble.inc/node';
import { adminCoreFunctions } from 'controllers/_core';

export const getAdminNoticesAPI: ControllerAPI = {
  tags: ['Notice'],
  schema: 'Notice[]',
  method: 'GET',
  path: '/admin/notices',
  authorize: 'admin',
  query: paginationQuery,
};

export const getAdminNotices = adminCoreFunctions.Notice.findMany;
