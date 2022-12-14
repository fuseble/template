import { type ControllerAPI } from '@fuseble.inc/node';
import { coreFunctions } from 'controllers/_core';

export const getNoticeAPI: ControllerAPI = {
  tags: ['Notice'],
  schema: 'Notice',
  method: 'GET',
  path: '/notices/:id',
  params: [{ key: 'id', type: 'string' }],
};

export const getNotice = coreFunctions.Notice.findUnique;
