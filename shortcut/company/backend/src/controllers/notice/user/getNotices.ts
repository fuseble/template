import { type ControllerAPI, paginationQuery } from '@fuseble.inc/node';
import { coreFunctions } from 'controllers/_core';

export const getNoticesAPI: ControllerAPI = {
  tags: ['Notice'],
  schema: 'Notice[]',
  method: 'GET',
  path: '/notices',
  query: paginationQuery,
};

export const getNotices = coreFunctions.Notice.findMany;
