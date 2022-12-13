import { type ControllerAPI } from '@fuseble.inc/node';
import { adminCoreFunctions } from 'controllers/_core';

export const getAdminUserAPI: ControllerAPI = {
  tags: ['User'],
  schema: 'User',
  method: 'GET',
  path: '/admin/users/:id',
  authorize: 'admin',
  params: [{ key: 'id', type: 'string' }],
};

export const getAdminUser = adminCoreFunctions.User.findUnique;
